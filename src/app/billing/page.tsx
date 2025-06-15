'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useSearchParams } from 'next/navigation';
import { gameCategories } from '../../../data';
import React from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import dynamic from 'next/dynamic';

function BillingPage() {
  const searchParams = useSearchParams();
  const incatagory = searchParams.get('catagory');
  const planCode = searchParams.get('plancode');
  const Pcode= planCode;
  const Router = useRouter();

  // Find the selected plan using constants
  const selectedCategory = gameCategories.find((catagory) => (catagory.name === incatagory));
  const plans = selectedCategory && typeof selectedCategory === 'object' && 'plans' in selectedCategory ? selectedCategory.plans : [];
  const plan = plans.find((p) => p.code === planCode || p.code === Pcode);


  const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-xl font-semibold text-gray-700">Loading...</div>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center text-xl">You must be signed in to access this page.</div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoaded && isSignedIn) {
    
  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center text-xl">Plan not found. Please go back and select a valid plan.</div>
        </main>
        <Footer />
      </div>
    );
  }

  const total =plan.priceRs;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-primary-400 to-primary-200 text-gray-100">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-6xl bg-primary-500 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.005]">
          {/* Grid layout for content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Left: Plan Details */}
            <div className="p-8 md:p-12 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-opacity-50 border-b md:border-b-0 md:border-r border-primary-700 flex flex-col justify-between">
              <div>
                <h2 className="text-4xl font-extrabold text-white mb-4">{plan.name}</h2>
                <h3 className="text-2xl font-semibold text-white mb-4">Features:</h3>
                <ul className="list-disc list-inside space-y-3 text-gray-200 text-base">
                  {plan.features && plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Right: Billing Info */}
            <div className="p-8 md:p-12 flex flex-col justify-between bg-primary-700">
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">Your Bill Summary</h3>
                <div className="space-y-4 text-lg">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Price:</span>
                    <span className="text-green-400 text-2xl font-bold">₹{plan.priceRs}</span>
                  </div>
                  <div className="border-t border-gray-700 pt-4 mt-4 flex justify-between items-center font-bold text-2xl">
                    <span className="text-white">Total Amount:</span>
                    <span className="text-yellow-400">${total}</span>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex flex-col gap-5">
                
                <button 
                  onClick={() => {
                    if (plan.redirect) {
                      window.location.href = plan.redirect;
                    }
                  }} 
                  className="w-full bg-accent-500 hover:bg-accent-600 text-dark-100 font-extrabold py-4 rounded-lg transition-all duration-300 shadow-lg transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-75 text-xl"
                >
                  Pay with Card / UPI
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}}

const DynamicBillingPage = dynamic(() => Promise.resolve(BillingPage), {
  ssr: false,
});

export default DynamicBillingPage;