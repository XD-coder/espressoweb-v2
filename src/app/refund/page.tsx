import Header from '../../components/Header';
import Footer from '../../components/Footer';

const RefundPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow py-20 bg-primary-50">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold text-primary-950 text-center mb-12">Refund Policy</h1>
          <div className="bg-white rounded-xl shadow-lg p-8 text-primary-800 leading-relaxed">
            <p className="mb-4">
              At Espresso Hosting, we strive to provide the best possible service to our customers. We understand that sometimes things don't work out as planned, and we want to ensure a fair and transparent refund process.
            </p>

            <h2 className="text-3xl font-bold text-primary-950 mb-4">Eligibility for Refund</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                <strong>New Accounts:</strong> New customers are eligible for a full refund within 7 days of the initial purchase date if they are not satisfied with our service. This applies only to the first service purchased by a new customer.
              </li>
              <li>
                <strong>Service Unavailability:</strong> If a service experiences prolonged and unresolvable downtime directly attributable to Espresso Hosting's infrastructure, and no suitable alternative can be provided, a pro-rata refund for the unused portion of the service period may be issued.
              </li>
              <li>
                <strong>Billing Errors:</strong> In cases of proven billing errors made by Espresso Hosting, a full refund for the erroneous charge will be issued.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-950 mb-4">Non-Eligibility for Refund</h2>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>
                <strong>Renewals:</strong> Refunds are generally not issued for service renewals. It is the customer's responsibility to cancel services before the renewal date if they do not wish to continue.
              </li>
              <li>
                <strong>Violations of Terms of Service:</strong> Accounts terminated due to violations of our Terms of Service (e.g., spamming, illegal activities, abusive behavior) are not eligible for refunds.
              </li>
              <li>
                <strong>Third-Party Software/Licenses:</strong> We do not offer refunds for third-party software licenses, domains, or other services purchased through us but provided by external vendors.
              </li>
              <li>
                <strong>Change of Mind:</strong> Refunds will not be issued for reasons such as a change of mind, lack of technical knowledge, or if your hardware/software does not meet the requirements for the game server.
              </li>
            </ul>

            <h2 className="text-3xl font-bold text-primary-950 mb-4">How to Request a Refund</h2>
            <p className="mb-4">
              To request a refund, please open a support ticket through your client area within the eligible refund period. Your request should include:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>Your account username and service ID.</li>
              <li>The reason for your refund request.</li>
              <li>Any relevant details or evidence supporting your claim.</li>
            </ul>
            <p className="mb-4">
              All refund requests will be reviewed by our billing department. We aim to process eligible refunds within 5-7 business days.
            </p>

            <h2 className="text-3xl font-bold text-primary-950 mb-4">Refund Method</h2>
            <p className="mb-4">
              Approved refunds will be issued to the original payment method used for the purchase. Please note that it may take additional time for the refund to appear on your statement, depending on your bank or payment provider.
            </p>

            <h2 className="text-3xl font-bold text-primary-950 mb-4">Changes to Refund Policy</h2>
            <p className="mb-4">
              Espresso Hosting reserves the right to modify this Refund Policy at any time. Any changes will be posted on this page, and it is your responsibility to review this policy periodically. Your continued use of our services after any modifications signifies your acceptance of the updated policy.
            </p>

            <h2 className="text-3xl font-bold text-primary-950 mb-4">Contact Us</h2>
            <p className="mb-4">
              If you have any questions about our Refund Policy, please contact us:
            </p>
            <ul className="list-disc list-inside mb-4 space-y-2">
              <li>By email: support@espressohost.xyz</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RefundPolicyPage;