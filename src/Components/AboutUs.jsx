import React from 'react'
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Navigation } from './Navigation';

export const AboutUs = () => {
    const services = [
        {
          number: "01",
          title: "Data Analysis",
          description: "Transform complex data into clear, actionable insights"
        },
        {
          number: "02",
          title: "Education",
          description: "Structured learning paths designed for real-world application"
        },
        {
          number: "03",
          title: "Mentorship",
          description: "Direct guidance from industry professionals"
        }]
  return (
    <>
        <Navigation/>
    {/* Services Section */}
    <section className="py-32 px-8 border-t">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {services.map((service) => (
            <div key={service.number} className="group">
              <div className="mb-16">
                <span className="text-sm text-gray-400">{service.number}</span>
              </div>
              <h3 className="text-xl mb-4 uppercase tracking-wider">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <button className="flex items-center text-sm group-hover:text-gray-500 transition-colors">
                Learn more
                <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}
