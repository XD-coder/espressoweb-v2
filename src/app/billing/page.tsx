'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useSearchParams } from 'next/navigation';
import { gameCategories } from '../../../data';
import React, { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';

function BillingPage() {
  const searchParams = useSearchParams();
  const incatagory = searchParams.get('catagory');
  const planCode = searchParams.get('plancode');
  const [promoCodeInput, setPromoCodeInput] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [finalPrice, setFinalPrice] = useState(0);
  const [feedbackMessage, setFeedbackMessage] = useState({ type: '', text: '' });
  const [promoRedirectUrl, setPromoRedirectUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { isSignedIn, user, isLoaded } = useUser();

  // Find the selected plan
  const selectedCategory = gameCategories.find(category => category.name === incatagory);
  const plans = selectedCategory && 'plans' in selectedCategory ? selectedCategory.plans : [];
  const plan = plans.find(p => p.code === planCode);

  // Calculate final price whenever plan or discount changes
  useEffect(() => {
    if (plan) {
      const basePrice = plan.priceRs;
      if (appliedDiscount > 0 && basePrice < 500) {
        const discountAmount = basePrice * (appliedDiscount / 100);
        setFinalPrice(basePrice - discountAmount);
      } else {
        setFinalPrice(basePrice);
      }
    }
  }, [plan, appliedDiscount]);

  const handleApplyPromoCode = async () => {
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
        text: 'Our 20% OFF promotion cannot be applied to plans costing ₹500 or more',
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
      });

      if (response.status === 200) {
        const data = await response.json();
        const discountPercent = data.discountPercent || 20;
        setAppliedDiscount(discountPercent);
        
        // If the plan name matches one of the redirect URL keys
        const redirectKey = plan.name.replace(/\s+/g, ' ');
        if (data.redirectUrl && data.redirectUrl[redirectKey]) {
          setPromoRedirectUrl(data.redirectUrl[redirectKey]);
        } else {
          setPromoRedirectUrl(null);
        }
        
        setFeedbackMessage({
          type: 'success',
          text: `Success! ${discountPercent}% OFF promotion applied.`,
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

  // Loading state
  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark dark:from-primary-dark dark:to-accent-dark">
        <div className="glass p-10 rounded-xl" style={{ boxShadow: 'var(--shadow-xl)' }}>
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-6"></div>
          <div className="text-2xl font-bold text-primary-foreground text-center animate-pulse">Loading your order details...</div>
        </div>
      </div>
    );
  }

  // Not signed in state
  if (!isSignedIn) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-light to-primary dark:from-primary-dark dark:to-accent-dark">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="glass p-10 rounded-xl max-w-lg w-full text-center animate-slide-up" style={{ boxShadow: 'var(--shadow-xl)' }}>
            <svg className="w-16 h-16 mx-auto mb-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-3xl font-bold text-gradient mb-4">Authentication Required</h2>
            <p className="text-lg text-foreground mb-6">Please sign in to access the billing page and complete your order.</p>
            <Button className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-3 px-8 rounded-lg">
              Sign In
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Plan not found state
  if (!plan) {
    return (
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-light to-primary dark:from-primary-dark dark:to-accent-dark">
        <Header />
        <main className="flex-1 flex items-center justify-center p-4">
          <div className="glass p-10 rounded-xl max-w-lg w-full text-center animate-slide-up" style={{ boxShadow: 'var(--shadow-xl)' }}>
            <svg className="w-16 h-16 mx-auto mb-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-3xl font-bold text-gradient mb-4">Plan Not Found</h2>
            <p className="text-lg text-foreground mb-6">We couldn't find the plan you're looking for. Please go back and select a valid plan.</p>
            <Button onClick={() => window.history.back()} className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-3 px-8 rounded-lg">
              Return to Plans
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Main billing page
  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-card">
      <Header />
        <main className="flex-1 py-6 sm:py-12 px-3 sm:px-4 max-w-7xl mx-auto w-full animate-fade-in">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-4xl font-bold text-gradient mb-2">Complete Your Order</h1>
          <p className="text-muted-foreground text-sm sm:text-base">You're just a few steps away from your server.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-8">
          {/* Left Column - Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl p-4 sm:p-6 shadow-lg border border-border">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4 sm:mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gradient">Order Summary</h2>
                <span className="px-3 py-1 bg-primary text-primary-foreground text-xs sm:text-sm font-medium rounded-full inline-block">
                  {incatagory} Server
                </span>
              </div>
              
              {/* Stack plan info and pricing vertically on mobile, side by side on tablet+ */}
              <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
                {/* Plan Info */}
                <div className="flex-1">
                  <div className="bg-accent/30 dark:bg-accent/10 rounded-lg p-3 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-card-foreground">{plan.name}</h3>
                    
                    <div className="space-y-2 sm:space-y-4">
                      <ul className="space-y-1.5 sm:space-y-3">
                        {plan.features && plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary mt-0.5 mr-2 sm:mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm sm:text-base text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Pricing Info */}
                <div className="flex-1">
                  <div className="bg-card rounded-lg border border-border p-3 sm:p-5 shadow-sm">
                    <div className="flex justify-between items-center mb-3 sm:mb-4">
                      <span className="text-sm sm:text-base text-foreground">Base Price:</span>
                      <span className="text-lg sm:text-xl font-bold">₹{plan.priceRs.toFixed(2)}</span>
                    </div>
                    
                    {/* Eligibility Badge - simplified for mobile */}
                    <div className={`mb-3 sm:mb-4 p-2 sm:p-3 rounded-md ${
                      plan.priceRs < 500 
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' 
                        : 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800'
                    }`}>
                      <div className="flex items-center">
                        {plan.priceRs < 500 ? (
                          <>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xs sm:text-sm font-medium text-green-800 dark:text-green-300">
                              Eligible for 20% OFF promotion
                            </p>
                          </>
                        ) : (
                          <>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-amber-600 dark:text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <p className="text-xs sm:text-sm font-medium text-amber-800 dark:text-amber-300">
                              Not eligible for 20% OFF (₹500+ plans)
                            </p>
                          </>
                        )}
                      </div>
                    </div>
                    
                    {/* Discount Section - more compact on mobile */}
                    {appliedDiscount > 0 && (
                      <div className="mb-3 sm:mb-4 pt-3 sm:pt-4 border-t border-border">
                        <div className="flex justify-between text-sm sm:text-base text-foreground mb-1 sm:mb-2">
                          <span>Subtotal:</span>
                          <span>₹{plan.priceRs.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm sm:text-base text-green-600 dark:text-green-400 font-medium">
                          <span>Discount ({appliedDiscount}%):</span>
                          <span>-₹{(plan.priceRs * (appliedDiscount / 100)).toFixed(2)}</span>
                        </div>
                      </div>
                    )}
                    
                    {/* Total - more compact on mobile */}
                    <div className="flex justify-between items-center mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-border">
                      <span className="text-base sm:text-lg font-semibold text-foreground">Total Amount:</span>
                      <div className="text-xl sm:text-2xl font-extrabold text-primary">₹{finalPrice.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Payment Section */}
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl p-4 sm:p-6 shadow-lg border border-border">
              <h2 className="text-xl sm:text-2xl font-bold text-gradient mb-4 sm:mb-6">Payment</h2>
              
              {/* Promo Code Section - more compact on mobile */}
              <div className="mb-4 sm:mb-6">
                <label htmlFor="promo" className="block text-xs sm:text-sm font-medium mb-1.5 sm:mb-2 text-foreground">
                  Have a promo code?
                </label>
                <div className="flex gap-2">
                  <input
                    id="promo"
                    type="text"
                    placeholder="Enter code"
                    value={promoCodeInput}
                    onChange={(e) => setPromoCodeInput(e.target.value.toUpperCase())}
                    className={`w-full px-3 sm:px-4 py-1.5 sm:py-2 rounded-md border text-sm ${
                      feedbackMessage.type === 'success' 
                      ? 'border-green-500 bg-green-50 dark:bg-green-900/20 text-foreground' 
                      : feedbackMessage.type === 'error'
                      ? 'border-destructive bg-destructive/10 text-foreground'
                      : 'border-input bg-background text-foreground'
                    }`}
                    disabled={isLoading || appliedDiscount > 0}
                  />
                  <Button
                    onClick={handleApplyPromoCode}
                    disabled={isLoading || appliedDiscount > 0}
                    className={`whitespace-nowrap text-xs sm:text-sm py-1 sm:py-2 px-2 sm:px-3 ${
                      appliedDiscount > 0 
                      ? 'bg-green-600 hover:bg-green-700' 
                      : 'bg-primary hover:bg-primary-dark'
                    }`}
                  >
                    {isLoading ? (
                      <>
                        <div className="h-3 w-3 sm:h-4 sm:w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-1 sm:mr-2"></div>
                        <span>Applying</span>
                      </>
                    ) : appliedDiscount > 0 ? "Applied" : "Apply"}
                  </Button>
                </div>
                
                {/* Feedback Messages - more compact for mobile */}
                {feedbackMessage.text && (
                  <div className={`mt-2 sm:mt-3 p-2 sm:p-3 rounded-md ${
                    feedbackMessage.type === 'error' 
                    ? 'bg-destructive/10 border border-destructive/30' 
                    : 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800'
                  }`}>
                    <div className="flex items-start">
                      {feedbackMessage.type === 'error' ? (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-destructive mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 dark:text-green-500 mr-1.5 sm:mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                      <div>
                        <p className={`text-xs sm:text-sm font-medium ${
                          feedbackMessage.type === 'error' ? 'text-destructive' : 'text-green-700 dark:text-green-300'
                        }`}>
                          {feedbackMessage.text}
                        </p>
                        
                        {feedbackMessage.text.includes('already used') && (
                          <p className="text-[10px] sm:text-xs text-destructive/80 mt-0.5 sm:mt-1">
                            Each code can only be used once per account.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Payment Button - optimized for mobile */}
              <div className="space-y-3 sm:space-y-4">
                <Button 
                  onClick={() => {
                    const finalRedirect = promoRedirectUrl || (plan && plan.redirect);
                    if (finalRedirect) {
                      window.location.href = finalRedirect;
                    }
                  }} 
                  disabled={isLoading}
                  className="w-full py-4 sm:py-6 text-base sm:text-lg font-bold bg-primary hover:bg-primary-dark"
                >
                  {appliedDiscount > 0 ? `Pay ₹${finalPrice.toFixed(2)}` : 'Proceed to Payment'}
                </Button>
                
                <div className="flex items-center justify-center space-x-1.5 sm:space-x-2 text-muted-foreground text-xs sm:text-sm">
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Secured by Razorpay</span>
                </div>
                
                {appliedDiscount > 0 && (
                  <div className="text-center text-xs sm:text-sm text-green-600 dark:text-green-400 font-medium">
                    Your discount has been successfully applied!
                  </div>
                )}
              </div>
              
              {/* Payment Methods - simplified for mobile */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-border">
                <p className="text-xs sm:text-sm text-foreground mb-2 sm:mb-3">We accept:</p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  <div className="bg-muted px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">Credit Card</div>
                  <div className="bg-muted px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">Debit Card</div>
                  <div className="bg-muted px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">UPI</div>
                  <div className="bg-muted px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">Net Banking</div>
                  <div className="bg-muted px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] sm:text-xs">Wallets</div>
                </div>
              </div>
            </div>
            
            {/* Support Info - more compact for mobile */}
            <div className="mt-4 sm:mt-6 bg-accent/30 dark:bg-accent/10 rounded-xl p-3 sm:p-4 shadow-md">
              <div className="flex items-start">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-accent-foreground mr-2 sm:mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-xs sm:text-sm text-foreground">Need help with your order?</p>
                  <p className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1">Contact us on Discord for assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

const DynamicBillingPage = dynamic(() => Promise.resolve(BillingPage), {
  ssr: false,
});

export default DynamicBillingPage;