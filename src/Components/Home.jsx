import React from 'react'
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { Navigation } from './Navigation';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
    <Navigation/>

    {/* Hero Section */}
    <section className="pt-40 pb-32 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-6xl font-light leading-tight mb-8">
              Transform data into meaningful decisions
            </h1>
            <div className="flex items-center space-x-8">
              <button className="group flex items-center text-sm uppercase tracking-widest">
                Start Project
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <div className="h-px w-32 bg-black"></div>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <p className="text-lg max-w-md">
              We provide innovative software solutions and mentorship, 
              helping organizations make data-driven decisions with confidence.
            </p>
          </div>
        </div>
      </div>
    </section>

    

   
  </div>
  )
}
