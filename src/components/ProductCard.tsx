
import React from 'react';
import { Button } from "@/components/ui/button";
import { InfoIcon, Star } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, features }) => {
  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-glow transition-all duration-500 border border-gray-100/50 hover:border-velkalyan-blue/20 transform hover:-translate-y-2">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-velkalyan-blue/5 via-transparent to-velkalyan-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="relative p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="relative">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-velkalyan-blue/10 to-velkalyan-orange/10 flex items-center justify-center shadow-soft group-hover:shadow-medium transition-all duration-300 group-hover:scale-110">
              {icon}
            </div>
            <div className="absolute -top-1 -right-1 h-6 w-6 bg-gradient-to-r from-velkalyan-orange to-velkalyan-amber rounded-full flex items-center justify-center">
              <Star className="h-3 w-3 text-white" />
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1.5 bg-gradient-to-r from-velkalyan-orange/20 to-velkalyan-amber/20 text-velkalyan-navy rounded-full border border-velkalyan-orange/30">
            Honda Certified
          </span>
        </div>
        
        <div className="mb-6">
          <h3 className="text-2xl font-heading font-bold mb-3 text-velkalyan-navy group-hover:text-gradient transition-all duration-300">{title}</h3>
          <p className="text-velkalyan-gray leading-relaxed">{description}</p>
        </div>
        
        <div className="mb-8 glass-effect p-5 rounded-xl">
          <div className="text-sm font-semibold mb-3 flex items-center text-velkalyan-navy">
            <InfoIcon className="w-4 h-4 mr-2 text-velkalyan-orange" />
            <span>Premium Features</span>
          </div>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-velkalyan-slate flex items-start group/item">
                <div className="w-5 h-5 mr-3 rounded-full bg-gradient-to-r from-velkalyan-orange to-velkalyan-amber flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform duration-200">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <span className="group-hover/item:text-velkalyan-navy transition-colors duration-200">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          className="w-full h-12 font-semibold btn-gradient text-white border-0 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 transform hover:scale-[1.02] relative overflow-hidden group/btn"
        >
          <span className="relative z-10">Request Information</span>
          <div className="absolute inset-0 bg-gradient-to-r from-velkalyan-blue to-velkalyan-navy opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
