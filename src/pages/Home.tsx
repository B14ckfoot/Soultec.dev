import React from 'react';
import {
  Server,
  Shield,
  Users,
  Cloud,
  CheckCircle,
  ArrowRight,
  Star,
  ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// ... (previous imports and constants remain the same)

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-purple-900 to-gray-900 text-white overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80" 
            alt="Digital Technology Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="md:w-2/3">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transforming Businesses Through Advanced IT Solutions
            </h1>
            <p className="text-xl mb-8 text-purple-200">
              At Soultec, we empower your business with enterprise-grade technology solutions and unmatched support
            </p>
            <div className="space-x-6">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-3.5 font-semibold text-white bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <span className="relative flex items-center">
                  Get Started
                  <ArrowUpRight className="ml-2 w-5 h-5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                </span>
                <div className="absolute inset-0 rounded-xl bg-white/20 group-hover:bg-white/0 transition-colors duration-200"></div>
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-8 py-3.5 rounded-xl font-semibold border-2 border-purple-400/50 hover:border-purple-400 hover:bg-purple-400/10 transition-all duration-200"
              >
                Learn More
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Rest of the component remains the same */}
    </div>
  );
};

export default Home;