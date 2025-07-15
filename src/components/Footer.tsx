import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import PrivacyPolicyModal from './PrivacyPolicyModal';

const Footer = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-purple-400" />
                  <span>info@soultec.dev</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-purple-400" />
                  <span>(661)448-0520</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-purple-400" />
                  <span>Bakersfield, CA</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/services#infrastructure-management" className="hover:text-purple-400 transition duration-150">Infrastructure Management</Link></li>
                <li><Link to="/services#cybersecurity" className="hover:text-purple-400 transition duration-150">Cybersecurity</Link></li>
                <li><Link to="/services#cloud-solutions" className="hover:text-purple-400 transition duration-150">Cloud Solutions</Link></li>
                <li><Link to="/services#it-consulting" className="hover:text-purple-400 transition duration-150">IT Consulting</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-purple-400 transition duration-150">About Us</Link></li>
                <li><Link to="/careers" className="hover:text-purple-400 transition duration-150">Careers</Link></li>
                <li><Link to="/blog" className="hover:text-purple-400 transition duration-150">Blog</Link></li>
                <li>
                  <button
                    onClick={() => setIsPrivacyModalOpen(true)}
                    className="hover:text-purple-400 transition duration-150"
                  >
                    Privacy Policy
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Soultec. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <PrivacyPolicyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </>
  );
};

export default Footer;