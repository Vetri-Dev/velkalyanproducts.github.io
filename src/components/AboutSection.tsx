
import React from 'react';
import { Shield, Star, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">About Velkalyan Products</h2>
              <p className="text-velkalyan-gray mb-4">
                With over 15 years of experience in manufacturing precision hand tools, Velkalyan Products 
                has established itself as a leading supplier to the automotive industry in India.
              </p>
              <p className="text-velkalyan-gray">
                Our partnership with Honda Motorcycles India Ltd. is built on our commitment to quality, 
                innovation, and understanding the specific needs of automotive professionals. We pride 
                ourselves on delivering tools that enhance efficiency, safety, and performance.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center bg-velkalyan-light p-4 rounded-lg">
                <div className="text-4xl font-bold text-velkalyan-red mb-1">15+</div>
                <div className="text-sm text-center text-velkalyan-blue">Years of Experience</div>
              </div>
              <div className="flex flex-col items-center bg-velkalyan-light p-4 rounded-lg">
                <div className="text-4xl font-bold text-velkalyan-red mb-1">1000+</div>
                <div className="text-sm text-center text-velkalyan-blue">Products Engineered</div>
              </div>
              <div className="flex flex-col items-center bg-velkalyan-light p-4 rounded-lg">
                <div className="text-4xl font-bold text-velkalyan-red mb-1">50+</div>
                <div className="text-sm text-center text-velkalyan-blue">Service Centers Supplied</div>
              </div>
              <div className="flex flex-col items-center bg-velkalyan-light p-4 rounded-lg">
                <div className="text-4xl font-bold text-velkalyan-red mb-1">99%</div>
                <div className="text-sm text-center text-velkalyan-blue">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-velkalyan-light p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-4">
                  <Shield className="h-5 w-5 text-velkalyan-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                  <p className="text-velkalyan-gray">
                    Every tool undergoes rigorous testing and quality control measures to ensure they 
                    meet international standards and Honda's specific requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-velkalyan-light p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-4">
                  <Star className="h-5 w-5 text-velkalyan-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Innovation Focus</h3>
                  <p className="text-velkalyan-gray">
                    Our R&D team continuously works on enhancing tool designs for better ergonomics, 
                    durability, and functionality to address evolving industry needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-velkalyan-light p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-4">
                  <Users className="h-5 w-5 text-velkalyan-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Customer Support</h3>
                  <p className="text-velkalyan-gray">
                    Our dedicated support team provides technical assistance, training, and 
                    after-sales service to ensure optimal performance of our tools.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-velkalyan-light p-6 rounded-lg">
              <div className="flex items-start mb-4">
                <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-4">
                  <Award className="h-5 w-5 text-velkalyan-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Industry Recognition</h3>
                  <p className="text-velkalyan-gray">
                    Recognized for excellence in tool manufacturing with multiple industry awards 
                    and certifications for quality and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
