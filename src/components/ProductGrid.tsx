
import React from 'react';
import ProductCard from './ProductCard';
import { Screwdriver, Wrench, Package, ShoppingBag } from 'lucide-react';

const ProductGrid = () => {
  const products = [
    {
      title: 'Precision Screwdrivers',
      description: 'Professional-grade screwdrivers engineered for precise torque and durability.',
      icon: <Screwdriver className="w-6 h-6 text-velkalyan-blue" />,
      features: [
        'Chrome vanadium steel construction',
        'Ergonomic grip handles',
        'Magnetic tips for easy handling',
        'Multiple size options available'
      ]
    },
    {
      title: 'Professional Spanners',
      description: 'High-quality spanners designed for optimal grip and torque control.',
      icon: <Wrench className="w-6 h-6 text-velkalyan-blue" />,
      features: [
        'Forged chrome-molybdenum steel',
        'Precision machined openings',
        '15° offset for knuckle clearance',
        'Chrome-plated finish'
      ]
    },
    {
      title: 'Box Wrenches',
      description: 'Durable box wrenches that provide superior leverage for challenging tasks.',
      icon: <Wrench className="w-6 h-6 text-velkalyan-blue" />,
      features: [
        'Double-ended design for versatility',
        'Heat-treated alloy steel construction',
        'Chrome plating resists corrosion',
        'Sizes to fit Honda specifications'
      ]
    },
    {
      title: 'Spark Plug Wrenches',
      description: 'Specialized wrenches for precise and safe spark plug installation and removal.',
      icon: <Wrench className="w-6 h-6 text-velkalyan-blue" />,
      features: [
        'Rubber insert to protect ceramic',
        'Hex design for improved torque',
        'Deep socket design for access',
        'Size-specific for Honda engines'
      ]
    },
    {
      title: 'Professional Tool Bags',
      description: 'Durable, organized tool storage solutions for automotive professionals.',
      icon: <ShoppingBag className="w-6 h-6 text-velkalyan-blue" />,
      features: [
        'Heavy-duty canvas construction',
        'Multiple compartments for organization',
        'Reinforced handles and seams',
        'Custom foam inserts available'
      ]
    },
    {
      title: 'Tool Sets & Kits',
      description: 'Comprehensive tool collections designed specifically for Honda maintenance.',
      icon: <Package className="w-6 h-6 text-velkalyan-blue" />,
      features: [
        'Curated selection for specific models',
        'Carrying case included',
        'All tools meet Honda specifications',
        'Available for different service levels'
      ]
    },
  ];

  return (
    <section id="products" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Premium Product Range</h2>
          <p className="text-velkalyan-gray">
            Explore our lineup of professional-grade hand tools engineered to meet the exacting 
            standards of Honda Motorcycles and automotive professionals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard 
              key={index}
              title={product.title}
              description={product.description}
              icon={product.icon}
              features={product.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
