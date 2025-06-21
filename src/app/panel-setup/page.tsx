'use client';

import { useState, useEffect } from 'react';
import { useUser, RedirectToSignIn } from '@clerk/nextjs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function PanelSetup() {
  const { isLoaded, isSignedIn, user } = useUser();
  const router = useRouter();
  
  const [isLoading, setIsLoading] = useState(true);
  const [panelPass, setPanelPass] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  // Only fetch password on first load if user is signed in
  useEffect(() => {
    async function fetchPanelPassword() {
      if (!isLoaded || !isSignedIn || !user?.id) return;
      
      setIsLoading(true);
      
      try {
        const response = await fetch('https://ws.edithbot.xyz/getpass', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ clerkUserId: user.id }),
        });
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        if (data && data.panelPass) {
          setPanelPass(data.panelPass);
        } else {
          setError('Could not retrieve panel password. Please contact support.');
        }
      } catch (err) {
        console.error('Failed to fetch panel password:', err);
        setError('Failed to communicate with the server. Please try again or contact support.');
      } finally {
        setIsLoading(false);
      }
    }
    
    fetchPanelPassword();
  }, [isLoaded, isSignedIn, user]);
  
  // Show loading state while Clerk loads
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
  
  // If not signed in, redirect to sign-in
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-100 to-primary-300">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center py-12 px-4">
        <div className="w-full max-w-3xl bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold mb-4 bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
              Welcome to Espresso Hosting!
            </h1>
            <p className="text-xl text-primary-700">
              Your panel account is ready to use
            </p>
          </div>
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-10">
              <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mb-6"></div>
              <p className="text-lg text-primary-700">Setting up your panel access...</p>
            </div>
          ) : error ? (
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <svg className="w-8 h-8 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <h2 className="text-2xl font-bold text-red-700">Setup Error</h2>
              </div>
              <p className="text-red-700 mb-4">{error}</p>
              <div className="flex justify-center">
                <button 
                  onClick={() => window.location.reload()} 
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Try Again
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <svg className="w-8 h-8 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h2 className="text-2xl font-bold text-green-800">Panel Account Created!</h2>
                </div>
                
                <p className="text-green-800 mb-4">
                  Your control panel password has been generated. We've also sent these details to your email address.
                </p>
                
                <div className="bg-white border-2 border-green-300 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">Username:</span>
                    <span className="font-bold text-primary-800">{user.emailAddresses[0].emailAddress}</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="font-medium text-gray-700">Password:</span>
                    <div className="flex items-center">
                      <span className="font-bold font-mono text-primary-800 bg-gray-100 px-2 py-1 rounded">{panelPass}</span>
                      <button 
                        onClick={() => {
                          navigator.clipboard.writeText(panelPass || '');
                          alert('Password copied to clipboard!');
                        }}
                        className="ml-2 text-accent-600 hover:text-accent-700"
                        title="Copy to clipboard"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"></path>
                          <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h3 className="text-xl font-bold text-blue-800 mb-3">Important Notes:</h3>
                <ul className="list-disc list-inside space-y-2 text-blue-800">
                  <li>You can change your panel password anytime in the Panel User Settings.</li>
                  <li>For security reasons, please change your default password after first login.</li>
                  <li>Keep your login credentials secure and don't share them with others.</li>
                  <li>If you lose access, you can reset your password from the panel login page.</li>
                </ul>
              </div>
              
              <div className="flex justify-center pt-6">
                <Link
                  href="https://panel.espressohost.xyz"
                  className="bg-accent-500 hover:bg-accent-600 text-white font-extrabold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg transform hover:scale-[1.02] active:scale-[0.98] text-xl"
                >
                  Go to Control Panel
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
