
import React from 'react';
import { Button } from "@/components/ui/button";
import { InfoIcon } from "lucide-react";

interface ProductCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, icon, features }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="h-12 w-12 rounded-full bg-gradient-to-br from-velkalyan-light to-white flex items-center justify-center shadow-sm">
            {icon}
          </div>
          <span className="text-xs font-medium px-2 py-1 bg-velkalyan-red/10 text-velkalyan-red rounded-full">
            Honda Approved
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-velkalyan-blue">{title}</h3>
        <p className="text-velkalyan-gray mb-4">{description}</p>
        
        <div className="mb-5 bg-gray-50 p-3 rounded-lg">
          <div className="text-sm font-medium mb-2 flex items-center text-velkalyan-blue">
            <InfoIcon className="w-4 h-4 mr-1 text-velkalyan-red" />
            <span>Key Features</span>
          </div>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-sm text-velkalyan-gray flex items-start">
                <svg className="w-4 h-4 mr-2 text-velkalyan-red mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Button 
          variant="outline" 
          className="w-full bg-white border-velkalyan-blue text-velkalyan-blue group-hover:bg-velkalyan-red group-hover:border-velkalyan-red group-hover:text-white transition-colors"
        >
          Request Info
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
