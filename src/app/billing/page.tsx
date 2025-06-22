'use client';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useSearchParams } from 'next/navigation';
import { gameCategories } from '../../../data';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import dynamic from 'next/dynamic';

function BillingPage() {
  const searchParams = useSearchParams();
  const incatagory = searchParams.get('catagory');
  const planCode = searchParams.get('plancode');
  const Pcode= planCode;
  const Router = useRouter();
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState({ type: '', text: '' });
  const [promoRedirectUrl, setPromoRedirectUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Find the selected plan using constants
  const selectedCategory = gameCategories.find((catagory) => (catagory.name === incatagory));
  const plans = selectedCategory && typeof selectedCategory === 'object' && 'plans' in selectedCategory ? selectedCategory.plans : [];
  const plan = plans.find((p) => p.code === planCode || p.code === Pcode);

  useEffect(() => {
    if (plan) {
      const basePrice = plan.priceRs;
      if (appliedDiscount > 0) {
        const discountAmount = basePrice * (appliedDiscount / 100);
        setFinalPrice(basePrice - discountAmount);
      } else {
        setFinalPrice(basePrice);
      }
    }
  }, [plan, appliedDiscount]);  const handleApplyPromoCode = async () => {
    if (!promoCodeInput.trim()) {
      setFeedbackMessage({
        type: 'error',
        text: 'Please enter a promo code',
      });
      return;
    }

    if (!plan) {
      setFeedbackMessage({
        type: 'error',
        text: 'No plan selected',
      });
      return;
    }

    // Check if the plan price exceeds 500 rupees
    if (plan.priceRs >= 500) {
      setFeedbackMessage({
        type: 'error',
        text: 'Promo codes cannot be applied to plans costing ₹500 or more',
      });
      return;
    }

    if (!user || !user.primaryEmailAddress) {
      setFeedbackMessage({
        type: 'error',
        text: 'User email not available. Please try again.',
      });
      return;
    }

    const userEmail = user.primaryEmailAddress.emailAddress;
    
    setIsLoading(true);
    try {
      const response = await fetch('https://ws.edithbot.xyz/promoVerify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          promo: promoCodeInput,
          email: userEmail
        }),
      });      if (response.status === 200) {
        const data = await response.json();
        setAppliedDiscount(data.discountPercent);
        
        // If the plan name matches one of the redirect URL keys
        const redirectKey = plan.name.replace(/\s+/g, ' ');
        if (data.redirectUrl && data.redirectUrl[redirectKey]) {
          setPromoRedirectUrl(data.redirectUrl[redirectKey]);
        } else {
          setPromoRedirectUrl(null);
        }
        
        setFeedbackMessage({
          type: 'success',
          text: `Success! ${data.discountPercent}% discount applied.`,
        });
      } else if (response.status === 400) {
        setAppliedDiscount(0);
        setPromoRedirectUrl(null);
        setFeedbackMessage({
          type: 'error',
          text: 'This promo code has expired.',
        });
      } else if (response.status === 401) {
        setAppliedDiscount(0);
        setPromoRedirectUrl(null);
        setFeedbackMessage({
          type: 'error',
          text: 'You\'ve already used this promo code.',
        });
      } else if (response.status === 404) {
        setAppliedDiscount(0);
        setPromoRedirectUrl(null);
        setFeedbackMessage({
          type: 'error',
          text: 'Invalid promo code. Please check and try again.',
        });
      } else {
        setAppliedDiscount(0);
        setPromoRedirectUrl(null);
        setFeedbackMessage({
          type: 'error',
          text: 'An error occurred. Please try again.',
        });
      }
    } catch (error) {
      console.error('Error applying promo code:', error);
      setAppliedDiscount(0);
      setPromoRedirectUrl(null);
      setFeedbackMessage({
        type: 'error',
        text: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };
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
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-6xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-[1.01] border border-primary-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            <div className="p-8 md:p-12 bg-gradient-to-br from-primary-50 to-primary-100 flex flex-col justify-between border-b md:border-b-0 md:border-r border-primary-200">
              <div>
                <h2 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">{plan.name}</h2>
                <h3 className="text-2xl font-semibold text-primary-800 mb-6">Features:</h3>
                <ul className="space-y-4 text-primary-700 text-lg">
                  {plan.features && plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-6 h-6 text-accent-500 mr-3 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-between bg-white">
              <div>
                <h3 className="text-3xl font-bold text-primary-900 mb-8 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text">Your Bill Summary</h3>
                
                {/* Promo Code Banner */}
                <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                  <div className="flex items-center">
                    <svg className="h-5 w-5 text-yellow-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-yellow-700 font-medium">Promo codes are only applicable on orders below ₹500.</p>
                  </div>
                </div>
                
                <div className="space-y-6 text-lg">
                  <div className="flex justify-between items-center bg-primary-50 p-4 rounded-xl border border-primary-200">
                    <span className="text-primary-700 font-medium">Price:</span>
                    <span className="text-2xl font-bold text-accent-600">₹{plan.priceRs}</span>
                  </div>                  {/* Promo Code Section */}
                  <div className="mt-4">
                    <label htmlFor="promo" className="block text-sm font-medium mb-1 text-primary-800">
                      Promo Code
                    </label>
                    <div className="flex items-center space-x-2">
                      <input
                        id="promo"
                        placeholder="Enter your code"
                        value={promoCodeInput}
                        onChange={(e) => setPromoCodeInput(e.target.value.toUpperCase())}
                        className={`w-full px-4 py-2 border text-black rounded-lg transition-all duration-300 ${
                          feedbackMessage.type === 'success' 
                          ? 'border-green-500 bg-green-50' 
                          : feedbackMessage.type === 'error'
                          ? 'border-red-500 bg-red-50'
                          : 'border-primary-300'
                        }`}
                        disabled={isLoading}
                      />
                      <button 
                        onClick={handleApplyPromoCode} 
                        className={`text-white font-bold py-2 px-4 rounded-lg transition-all ${
                          isLoading 
                          ? 'bg-gray-400 cursor-not-allowed' 
                          : 'bg-accent-500 hover:bg-accent-600'
                        }`}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center">
                            <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            <span>Applying</span>
                          </div>
                        ) : "Apply"}
                      </button>
                    </div>
                    
                    {feedbackMessage.text && (
                      <div className={`mt-3 p-3 rounded-lg ${
                        feedbackMessage.type === 'error' 
                        ? 'bg-red-100 border border-red-300' 
                        : 'bg-green-100 border border-green-300'
                      }`}>
                        <div className="flex items-center">
                          {feedbackMessage.type === 'error' ? (
                            <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              {feedbackMessage.text.includes('already used') ? (
                                // Info icon for "already used" case
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                              ) : (
                                // Error icon for other errors
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                              )}
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                          <p className={`text-sm font-medium ${
                            feedbackMessage.type === 'error' ? 'text-red-700' : 'text-green-700'
                          }`}>
                            {feedbackMessage.text}
                          </p>
                        </div>
                        
                        {feedbackMessage.text.includes('already used') && (
                          <p className="text-sm text-red-600 mt-2 pl-7">
                            Each promo code can only be used once per account. Please try a different code.
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  {appliedDiscount > 0 && (
                    <div className="mt-4 border-t pt-4 border-primary-200">
                      <div className="flex justify-between text-primary-700">
                        <span>Subtotal</span>
                        <span>₹{plan.priceRs.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-green-500">
                        <span>Discount ({appliedDiscount}%)</span>
                        <span>
                          -₹
                          {(plan.priceRs * (appliedDiscount / 100)).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="flex justify-between items-center bg-primary-100 p-6 rounded-xl border-2 border-primary-300">
                    <span className="text-primary-800 font-bold text-xl">Total Amount:</span>
                    <span className="text-3xl font-extrabold text-accent-600">₹{finalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>              <div className="mt-10">
                <button 
                  onClick={() => {
                    const finalRedirect = promoRedirectUrl || (plan && plan.redirect);
                    if (finalRedirect) {
                      window.location.href = finalRedirect;
                    }
                  }} 
                  disabled={isLoading}
                  className={`w-full bg-accent-500 hover:bg-accent-600 text-white font-extrabold py-5 rounded-xl transition-all duration-300 shadow-lg transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-accent-500 focus:ring-opacity-50 text-xl ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {appliedDiscount > 0 ? `Pay ₹${finalPrice.toFixed(2)} with Card / UPI` : 'Pay with Card / UPI'}
                </button>
                {appliedDiscount > 0 && (
                  <p className="text-center text-green-600 font-medium mt-2">
                    Your discount has been applied!
                  </p>
                )}
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