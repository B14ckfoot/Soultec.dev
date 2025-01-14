import React from 'react';
import { Users, Shield, Target, Zap } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: "2020", title: "Company Founded", description: "Started with a vision to protect privacy and security" },
    { year: "2021", title: "Service Expansion", description: "Expanded our security and privacy-focused solutions" },
    { year: "2022", title: "Strategic Growth", description: "Established key partnerships and expanded our enterprise solutions" },
    { year: "2024", title: "Industry Recognition", description: "Known for exceptional security and privacy solutions" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-gray-900 text-white py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&w=1920&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Since 2020, we've been dedicated to delivering exceptional IT solutions with a focus on security, 
              privacy, and superior service. Our commitment to protecting your digital assets drives everything we do.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <div className="max-w-3xl mx-auto space-y-4 text-gray-300">
              <p>To protect the privacy and security of our customers, first and foremost</p>
              <p>To provide Superior Service and Support, utilizing Cutting Edge, Relevant Technology</p>
              <p>To offer superb value to our customers</p>
              <p>Data privacy and security is your right and our duty</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="w-12 h-12" />, title: "Security First" },
              { icon: <Users className="w-12 h-12" />, title: "Client Focus" },
              { icon: <Target className="w-12 h-12" />, title: "Excellence" },
              { icon: <Zap className="w-12 h-12" />, title: "Innovation" }
            ].map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-xl">
                <div className="inline-block p-3 bg-purple-400/10 rounded-full mb-4">
                  <div className="text-purple-400">{value.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Approach</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Our approach to each client is unique. There are no cookie-cutter solutions, 
                  each is tailored to the specific operational needs of your business.
                </p>
                <p>
                  Some clients have Tier 1 staff capable of handling day-to-day hardware issues 
                  but they need high level network administration that includes monitoring and 
                  patch management. Others require a more complete solution, including providing 
                  staffing to your organization.
                </p>
                <p>
                  We will provide as little or as much support as you require, always with a 
                  focus on maintaining the highest standards of security and privacy.
                </p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-gray-900/20"></div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80"
                alt="Team Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24">
                  <span className="text-2xl font-bold text-purple-400">{milestone.year}</span>
                </div>
                <div className="flex-grow bg-gray-800 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Focus Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Why Security Matters</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Almost daily, headlines of data breaches point to organizations which fail to 
                protect what should be the most important information in your business life. 
                You wouldn't allow strangers to enter your home, sift through your documents, 
                take photos of your Social Security card, pour over your bank statements or 
                give them access to your children, yet it's happening online on a daily basis.
              </p>
              <p>
                We will work closely with you to provide the best consulting, and most secure 
                IT monitoring and management solutions available, coupled with consistently 
                superior customer service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;