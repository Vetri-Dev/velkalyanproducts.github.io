
import React from 'react';
import { Check } from 'lucide-react';

const PartnershipBanner = () => {
  return (
    <section id="partnership" className="bg-velkalyan-blue py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white mb-10">
          <h2 className="text-3xl font-bold mb-4 text-white">Official Tool Partner of Honda Motorcycles India</h2>
          <p className="text-lg opacity-90">
            Velkalyan Products has been the trusted supplier of premium hand tools for Honda Motorcycles India Ltd., 
            meeting their exacting standards for quality, durability, and precision.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-velkalyan-red rounded-full flex items-center justify-center mr-3">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Honda Certified</h3>
            </div>
            <p className="opacity-90">
              All our tools meet and exceed Honda's rigorous quality control standards and specifications.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-velkalyan-red rounded-full flex items-center justify-center mr-3">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Custom Engineering</h3>
            </div>
            <p className="opacity-90">
              Specialized tools designed specifically for Honda motorcycle assembly and maintenance requirements.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-white">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 bg-velkalyan-red rounded-full flex items-center justify-center mr-3">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Nationwide Supply</h3>
            </div>
            <p className="opacity-90">
              Reliable distribution to all Honda service centers and manufacturing facilities across India.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipBanner;
