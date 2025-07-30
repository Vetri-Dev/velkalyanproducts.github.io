
import React from 'react';
import { Shield, Star, Users, Award } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-gradient">About Velkalyan Products</h2>
              <p className="text-muted-foreground mb-4">
                With over 25 years of industry experience, Velkalyan Products has consistently delivered quality, reliability, and scalability, earning long-standing partnerships with OEM leaders such as TVS Motor Company and Honda Motorcycle & Scooter India (HMSI).
              </p>
              <p className="text-muted-foreground">
                Our partnership with Honda Motorcycles India Ltd. is built on our commitment to quality, 
                innovation, and understanding the specific needs of automotive professionals. We pride 
                ourselves on delivering tools that enhance efficiency, safety, and performance.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center cyber-card p-4 rounded-lg border border-primary/30">
                <div className="text-4xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-center text-muted-foreground">Years of Experience</div>
              </div>
              <div className="flex flex-col items-center cyber-card p-4 rounded-lg border border-primary/30">
                <div className="text-4xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-center text-muted-foreground">Products Engineered</div>
              </div>
              <div className="flex flex-col items-center cyber-card p-4 rounded-lg border border-primary/30">
                <div className="text-4xl font-bold text-primary mb-1">Certifications</div>
                <div className="text-sm text-center text-muted-foreground">IATF 16949:2016 for QMS, ISO 14001:2015 for EMS</div>
              </div>
              <div className="flex flex-col items-center cyber-card p-4 rounded-lg border border-primary/30">
                <div className="text-4xl font-bold text-primary mb-1">99%</div>
                <div className="text-sm text-center text-muted-foreground">Customer Satisfaction</div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="cyber-card p-6 rounded-lg border border-primary/30">
              <div className="flex items-start mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mr-4 neon-glow">
                  <Shield className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    Every tool undergoes rigorous testing and quality control measures to ensure they 
                    meet QMS requirements.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="cyber-card p-6 rounded-lg border border-primary/30">
              <div className="flex items-start mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mr-4 neon-glow">
                  <Star className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Innovation Focus</h3>
                  <p className="text-muted-foreground">
                    Our R&D team continuously works on enhancing tool designs for better ergonomics, 
                    durability, and functionality to address evolving industry needs.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="cyber-card p-6 rounded-lg border border-primary/30">
              <div className="flex items-start mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mr-4 neon-glow">
                  <Users className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Customer Support</h3>
                  <p className="text-muted-foreground">
                    Our dedicated support team provides technical assistance and 
                    after-sales service to ensure optimal performance of our tools.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="cyber-card p-6 rounded-lg border border-primary/30">
              <div className="flex items-start mb-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mr-4 neon-glow">
                  <Award className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Industry Recognition</h3>
                  <p className="text-muted-foreground">
                    Recognized for excellence in tool manufacturing with multiple industry awards 
                    and quality certifications.
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
