'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useSearchParams } from 'next/navigation';
import { gameCategories } from '../../../data';
import React from 'react';
import { sub } from 'framer-motion/client';
import { Router } from 'next/router';

export default function BillingPage() {
  const searchParams = useSearchParams();
  const incatagory = searchParams.get('catagory');
  const planCode = searchParams.get('planCode');
  const Pcode = searchParams.get('pCode');
  

  // Find the selected plan using constants
  const selectedCategory = gameCategories.find((catagory) => (catagory.name === incatagory));
  const plans = selectedCategory && typeof selectedCategory === 'object' && 'plans' in selectedCategory ? selectedCategory.plans : [];
  const plan = plans.find((p) => p.code === planCode || p.code === Pcode);

  

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

  const subtotal = plan.discountedPrice.replace(/[^0-9.-]+/g, '');
  const taxRate = 0.15;
  const taxAmount = Math.round((taxRate * Number(subtotal)) * 100) / 100;
  const total = (Number(subtotal) + Number(taxAmount) ).toFixed(2);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-10">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden">
          {/* Left: Plan Details */}
          <div className="md:w-1/2 w-full p-8 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50">
            <h2 className="text-2xl text-primary-800   font-bold mb-2">{plan.name}</h2>
            <ul className="list-disc text-primary-600 pl-5 space-y-2">
              {plan.features && plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          {/* Right: Billing Info */}
          <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl text-primary-800 font-semibold mb-4">Your Bill</h3>
              <div className="space-y-2 text-primary-500">
                <div className="flex justify-between">
                  <span>Original Price:</span>
                  <span className="line-through ">${plan.price}</span>
                </div>
                <div className="flex justify-between">
                  <span>Discounted Price:</span>
                  <span className="font-semibold">${plan.discountedPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (15% GST):</span>
                  <span>${taxAmount}</span>
                </div>
                <div className="flex justify-between border-t pt-2 mt-2 font-bold text-lg">
                  <span>Total:</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <button onClick={()=>{Router}} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition">Pay with Card / UPI</button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}