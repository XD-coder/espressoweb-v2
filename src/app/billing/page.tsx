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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-300">
        <div className="p-10 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-primary-200">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mb-4"></div>
          <div className="text-2xl font-semibold text-primary-800 animate-pulse">Loading...</div>
        </div>
      </div>
    );
  }

  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-100 to-primary-300">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-10 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-primary-200">
            <p className="text-2xl font-semibold text-primary-800">Please sign in to access this page</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (isLoaded && isSignedIn) {
    
  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-100 to-primary-300">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-10 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-primary-200">
            <p className="text-2xl font-semibold text-primary-800">Plan not found. Please go back and select a valid plan.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const total =plan.priceRs;

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-100 to-primary-300">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-8 sm:py-12 px-4">
        <div className="w-full max-w-6xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01] border border-primary-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0">
            <div className="p-6 sm:p-8 md:p-12 bg-gradient-to-br from-primary-50 to-primary-100 flex flex-col justify-between border-b md:border-b-0 md:border-r border-primary-200">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">{plan.name}</h2>
                <h3 className="text-xl sm:text-2xl font-semibold text-primary-800 mb-6">Features:</h3>
                <ul className="space-y-3 sm:space-y-4 text-primary-700 text-base sm:text-lg">
                  {plan.features && plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-accent-500 mr-2 sm:mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-6 sm:p-8 md:p-12 flex flex-col justify-between bg-white">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-900 mb-6 sm:mb-8 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">Your Bill Summary</h3>
                <div className="space-y-4 sm:space-y-6 text-base sm:text-lg">
                  <div className="flex justify-between items-center bg-primary-50 p-3 sm:p-4 rounded-xl border border-primary-200">
                    <span className="text-primary-700 font-medium">Price:</span>
                    <span className="text-xl sm:text-2xl font-bold text-accent-600">₹{plan.priceRs}</span>
                  </div>
                  <div className="flex justify-between items-center bg-primary-100 p-4 sm:p-6 rounded-xl border-2 border-primary-300">
                    <span className="text-primary-800 font-bold text-lg sm:text-xl">Total Amount:</span>
                    <span className="text-2xl sm:text-3xl font-extrabold text-accent-600">₹{total}</span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button 
                  onClick={() => {
                    if (plan.redirect) {
                      window.location.href = plan.redirect;
                    }
                  }} 
                  className="w-full mt-8 sm:mt-10 bg-accent-500 hover:bg-accent-600 text-primary-950 py-3 sm:py-4 px-6 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-opacity-50 shadow-lg"
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