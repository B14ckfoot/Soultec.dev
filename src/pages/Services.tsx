import React from 'react';
import { Server, Shield, Cloud, Users, CheckCircle, ArrowRight, Globe, Palette, Code, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: "infrastructure-management",
      icon: <Server className="w-16 h-16 text-purple-400" />,
      title: "Infrastructure Management",
      description: "Comprehensive IT infrastructure solutions that keep your business running smoothly",
      features: [
        "24/7 System Monitoring",
        "Proactive Maintenance",
        "Performance Optimization",
        "Scalability Planning"
      ],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "webops",
      icon: <Globe className="w-16 h-16 text-purple-400" />,
      title: "WebOps",
      description: "End-to-end web solutions from design to deployment and management",
      features: [
        "Custom Website Design",
        "Web Development",
        "Content Management",
        "Performance Optimization",
        "SEO & Analytics",
        "24/7 Monitoring"
      ],
      subServices: [
        {
          icon: <Palette className="w-12 h-12 text-purple-400" />,
          title: "Website Design",
          description: "Beautiful, responsive designs that engage your audience",
          features: [
            "UI/UX Design",
            "Mobile-First Approach",
            "Brand Integration",
            "User Experience Optimization"
          ]
        },
        {
          icon: <Code className="w-12 h-12 text-purple-400" />,
          title: "Web Development",
          description: "Custom web solutions built with modern technologies",
          features: [
            "Custom Development",
            "E-commerce Solutions",
            "API Integration",
            "Progressive Web Apps"
          ]
        },
        {
          icon: <Settings className="w-12 h-12 text-purple-400" />,
          title: "Website Management",
          description: "Comprehensive maintenance and support services",
          features: [
            "Content Updates",
            "Security Monitoring",
            "Performance Optimization",
            "Regular Backups"
          ]
        }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cybersecurity",
      icon: <Shield className="w-16 h-16 text-purple-400" />,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions to protect your valuable assets",
      features: [
        "Threat Detection & Response",
        "Security Audits",
        "Compliance Management",
        "Employee Training"
      ],
      image: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "cloud-solutions",
      icon: <Cloud className="w-16 h-16 text-purple-400" />,
      title: "Cloud Solutions",
      description: "Scalable cloud services designed for your business needs",
      features: [
        "Cloud Migration",
        "Hybrid Cloud Setup",
        "Cloud Security",
        "Performance Optimization"
      ],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "it-consulting",
      icon: <Users className="w-16 h-16 text-purple-400" />,
      title: "IT Consulting",
      description: "Strategic technology planning and digital transformation",
      features: [
        "Digital Strategy",
        "Process Optimization",
        "Technology Assessment",
        "Implementation Planning"
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-900 to-gray-900 text-white py-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80"
            alt="Technology Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-purple-200 max-w-3xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                id={service.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-12 items-center`}
              >
                <div className="flex-1">
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-gray-300 text-lg mb-8">{service.description}</p>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-purple-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {service.subServices && (
                    <div className="mt-12 grid md:grid-cols-3 gap-8">
                      {service.subServices.map((subService, i) => (
                        <div key={i} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50">
                          <div className="mb-4">{subService.icon}</div>
                          <h3 className="text-xl font-semibold text-white mb-3">{subService.title}</h3>
                          <p className="text-gray-300 mb-4">{subService.description}</p>
                          <ul className="space-y-2">
                            {subService.features.map((feature, j) => (
                              <li key={j} className="flex items-center text-gray-300 text-sm">
                                <CheckCircle className="w-4 h-4 text-purple-400 mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  <Link
                    to="/contact"
                    className="mt-8 inline-flex items-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </div>
                <div className="flex-1">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-gray-900/20"></div>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-900 to-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-purple-200">
            Contact us today to discuss how we can help transform your business
          </p>
          <Link 
            to="/contact"
            className="bg-white text-purple-900 px-8 py-3 rounded-lg font-semibold hover:bg-purple-100 transition duration-300 inline-flex items-center"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;