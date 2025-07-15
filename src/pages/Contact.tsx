import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('https://webserver.soultec.dev/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        })
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Server error (${response.status}): ${errorText || response.statusText}`);
      }

      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      
      if (error instanceof TypeError && error.message.includes('fetch')) {
        setErrorMessage('Network error: Unable to connect to the server. Please check your internet connection and try again.');
      } else if (error instanceof Error) {
        setErrorMessage(`Failed to send message: ${error.message}`);
      } else {
        setErrorMessage('There was an error sending your message. Please try again later.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-gray-900 text-white py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Have a question or want to learn more about our services? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="backdrop-blur-md bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
              <h2 className="text-2xl font-bold text-white mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="block w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="block w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="block w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="(123) 456-7890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="block w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="block w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {errorMessage && (
                  <div className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
                    <AlertCircle className="w-5 h-5" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-xl text-base font-medium text-white ${
                    isSubmitting
                      ? 'bg-purple-500 cursor-not-allowed'
                      : 'bg-purple-600 hover:bg-purple-700'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-200`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400">
                    Thank you for your message! We'll get back to you soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-purple-400 mt-1" />
                    <div className="ml-4">
                      <p className="text-gray-300">Email</p>
                      <a href="mailto:info@soultec.dev" className="text-purple-400 hover:text-purple-300">
                        info@soultec.dev
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-purple-400 mt-1" />
                    <div className="ml-4">
                      <p className="text-gray-300">Phone</p>
                      <a href="tel:+16614480520" className="text-purple-400 hover:text-purple-300">
                        (661) 448-0520
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-purple-400 mt-1" />
                    <div className="ml-4">
                      <p className="text-gray-300">Address</p>
                      <p className="text-purple-400">
                        <br />
                        Bakersfield, CA 93309
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-md bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50">
                <h3 className="text-xl font-semibold text-white mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 text-purple-400 mr-2" />
                    <span>Monday - Friday: </span>
                    <span className="ml-auto text-purple-400">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 text-purple-400 mr-2" />
                    <span>Saturday: </span>
                    <span className="ml-auto text-purple-400">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-5 h-5 text-purple-400 mr-2" />
                    <span>Sunday: </span>
                    <span className="ml-auto text-purple-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;