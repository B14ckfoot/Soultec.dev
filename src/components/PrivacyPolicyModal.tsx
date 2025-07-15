import React from 'react';
import { X } from 'lucide-react';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0">
        <div className="fixed inset-0 transition-opacity bg-gray-900 bg-opacity-75" onClick={onClose} />

        <div className="relative inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-800 rounded-2xl">
          <div className="absolute top-0 right-0 pt-4 pr-4">
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="mt-2 text-gray-300">
            <h2 className="text-2xl font-bold text-white mb-6">Privacy Policy</h2>
            
            <div className="space-y-6">
              <section>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">1. Information Collection</h3>
                <p>We collect information necessary to provide our IT services, including:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Contact information (name, email, phone number)</li>
                  <li>System and network data for monitoring and maintenance</li>
                  <li>Security logs and audit trails</li>
                  <li>Technical information about your IT infrastructure</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">2. Data Protection</h3>
                <p>We implement industry-leading security measures to protect your data:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>End-to-end encryption for data transmission</li>
                  <li>Secure data centers with 24/7 monitoring</li>
                  <li>Regular security audits and penetration testing</li>
                  <li>Access control and authentication protocols</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">3. Data Usage</h3>
                <p>Your data is used exclusively for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Providing contracted IT services</li>
                  <li>System monitoring and maintenance</li>
                  <li>Security threat detection and prevention</li>
                  <li>Service improvement and optimization</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">4. Third-Party Services</h3>
                <p>We may use trusted third-party services for:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Cloud infrastructure and hosting</li>
                  <li>Security monitoring and threat detection</li>
                  <li>Backup and disaster recovery</li>
                  <li>Analytics and performance monitoring</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">5. Data Retention</h3>
                <p>We retain data in accordance with:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Legal and regulatory requirements</li>
                  <li>Service agreement terms</li>
                  <li>Business continuity needs</li>
                  <li>Industry best practices</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">6. Your Rights</h3>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-2 space-y-2">
                  <li>Access your personal data</li>
                  <li>Request data correction or deletion</li>
                  <li>Opt-out of non-essential data collection</li>
                  <li>Receive a copy of your data</li>
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-purple-400 mb-3">7. Contact Us</h3>
                <p>For privacy-related inquiries, contact us at:</p>
                <p className="mt-2">Email: info@soultec.dev</p>
                <p>Phone: (661) 448-0520</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyModal;