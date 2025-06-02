import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const NotFoundPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center py-20 bg-primary-50">
        <div className="text-center p-8 bg-white rounded-xl shadow-lg max-w-md mx-auto">
          <h1 className="text-9xl font-extrabold text-primary-950 mb-4 animate-bounce">404</h1>
          <h2 className="text-3xl font-bold text-primary-800 mb-4">Page Not Found</h2>
          <p className="text-lg text-primary-700 mb-8">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/" className="inline-block bg-accent-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-accent-600 transition duration-300 transform hover:scale-105">
            Go to Homepage
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFoundPage;