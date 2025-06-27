import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RefundPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen w-full max-w-[100vw] overflow-hidden">
      <Header />
      <main className="flex-grow py-16 md:py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Refund Policy</span>
            </h1>
            
            <div className="bg-card rounded-xl shadow-lg p-6 md:p-8 text-card-foreground leading-relaxed">
              <div className="border-l-4 border-primary pl-4 mb-8 py-2 bg-primary/5 rounded-r-md">
                <p className="italic">
                  Last Updated: May 2025
                </p>
              </div>

              <p className="mb-6">
                At Espresso Hosting, we maintain a <strong>strict refund policy</strong> to ensure fair business operations. 
                Please read this policy carefully before making any purchases.
              </p>

              <div className="mb-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  Our Policy at a Glance
                </h2>
                <p className="mb-4 font-medium">
                  Espresso Hosting offers <span className="text-primary-dark font-bold">refunds only for accidental purchases</span> 
                  and these must be requested within <span className="text-primary-dark font-bold">1 hour</span> of the purchase.
                </p>
                <p>
                  No other circumstances qualify for refunds, regardless of the reason.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Eligible for Refund
              </h2>
              <div className="pl-4 mb-8 border-l-2 border-green-500">
                <p className="mb-2">
                  <strong className="text-green-600">Accidental Purchase:</strong> If you purchased a service by mistake, 
                  you may request a refund within 1 hour of the purchase time. 
                </p>
                <p className="text-sm text-muted-foreground">
                  An accidental purchase is defined as an unintentional transaction where the wrong service was selected, 
                  or the purchase was made in error. Verification may be required.
                </p>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                Not Eligible for Refund
              </h2>
              <div className="pl-4 mb-8 border-l-2 border-red-500 space-y-4">
                <div>
                  <p className="mb-1">
                    <strong className="text-red-600">Any request after 1 hour of purchase</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Once the 1-hour window has passed, no refunds will be issued under any circumstances.
                  </p>
                </div>

                <div>
                  <p className="mb-1">
                    <strong className="text-red-600">Dissatisfaction with service</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Including but not limited to performance issues, network problems, or feature limitations.
                  </p>
                </div>

                <div>
                  <p className="mb-1">
                    <strong className="text-red-600">Change of mind or project cancellation</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    We do not offer refunds if you simply change your mind or no longer need the service.
                  </p>
                </div>

                <div>
                  <p className="mb-1">
                    <strong className="text-red-600">Server performance or technical issues</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Including server lag, connectivity issues, or compatibility problems with mods/plugins.
                  </p>
                </div>

                <div>
                  <p className="mb-1">
                    <strong className="text-red-600">Service renewals</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    It is your responsibility to cancel services before they renew if you no longer wish to continue.
                  </p>
                </div>

                <div>
                  <p className="mb-1">
                    <strong className="text-red-600">Terms of Service violations</strong>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Accounts terminated due to violations of our Terms of Service are not eligible for refunds.
                  </p>
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                How to Request a Refund
              </h2>
              <div className="bg-card/50 p-4 rounded-lg border border-muted mb-8">
                <p className="mb-4">
                  To request a refund for an accidental purchase (within 1 hour only):
                </p>
                <ol className="list-decimal list-inside mb-4 space-y-2">
                  <li>Open a support ticket through your client area immediately</li>
                  <li>Include your account username and service ID</li>
                  <li>Clearly explain how the purchase was accidental</li>
                  <li>Provide the exact time of purchase</li>
                </ol>
                <p className="text-sm text-muted-foreground italic">
                  All refund requests are subject to verification. Approved refunds will be processed within 3-5 business days.
                </p>
              </div>

              <div className="p-4 bg-accent/5 rounded-lg border border-accent/10 mb-8">
                <h2 className="text-2xl font-bold mb-2 text-foreground">
                  Understanding Our Strict Policy
                </h2>
                <p className="mb-2">
                  Our strict refund policy allows us to maintain competitive pricing and invest in superior infrastructure. 
                  We encourage all customers to carefully consider their purchase decisions and thoroughly review our services before buying.
                </p>
                <p>
                  For any questions about our services before making a purchase, please contact our support team.
                </p>
              </div>

              <h2 className="text-2xl font-bold mb-4 text-foreground">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have questions about our refund policy:
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <a href="mailto:support@espressohost.xyz" className="flex items-center gap-2 p-3 bg-card rounded-lg border border-muted hover:bg-muted/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span>support@espressohost.xyz</span>
                </a>
                <a href="https://discord.gg/espressohost" className="flex items-center gap-2 p-3 bg-card rounded-lg border border-muted hover:bg-muted/10 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#5865F2]">
                    <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.885-.608 1.284a18.566 18.566 0 0 0-5.487 0 12.217 12.217 0 0 0-.617-1.284.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.202 13.202 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .32-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                  </svg>
                  <span>Discord Support</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;