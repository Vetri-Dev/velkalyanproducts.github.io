
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Tool } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-lg mx-auto lg:mx-0 space-y-8 animate-fade-in">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-velkalyan-blue mb-4">
                Precision Tools for Automotive Excellence
              </h1>
              <p className="text-lg text-velkalyan-gray mt-4">
                Trusted supplier of premium hand tools to Honda Motorcycles India Ltd. 
                Engineering quality, durability, and precision for automotive professionals.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-velkalyan-red hover:bg-velkalyan-red/90 text-white">
                Explore Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline">
                About Our Partnership
              </Button>
            </div>
            <div className="px-4 py-3 bg-white/80 backdrop-blur-sm rounded-lg border shadow-sm inline-block">
              <p className="font-medium text-velkalyan-blue flex items-center">
                <Tool className="mr-2 h-5 w-5 text-velkalyan-red" />
                Official Tool Supplier for Honda Motorcycles India Ltd.
              </p>
            </div>
          </div>
          
          <div className="metal-gradient rounded-xl overflow-hidden shadow-2xl p-6 flex items-center justify-center relative animate-fade-in">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-velkalyan-red/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-velkalyan-blue/10 rounded-full blur-3xl"></div>
            <div className="relative z-10 text-center p-8">
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                  <Tool className="h-10 w-10 text-velkalyan-blue mb-2" />
                  <span className="font-medium">Screwdrivers</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                  <Tool className="h-10 w-10 text-velkalyan-blue mb-2" />
                  <span className="font-medium">Spanners</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                  <Tool className="h-10 w-10 text-velkalyan-blue mb-2" />
                  <span className="font-medium">Box Wrenches</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md">
                  <Tool className="h-10 w-10 text-velkalyan-blue mb-2" />
                  <span className="font-medium">Tool Bags</span>
                </div>
              </div>
              <p className="text-velkalyan-blue font-medium">Engineered for Honda Quality Standards</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
