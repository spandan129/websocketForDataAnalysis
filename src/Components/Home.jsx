import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Navigation } from './Navigation';

export const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-5xl font-light leading-tight mb-8 text-black">
              Transform data into meaningful decisions
            </h1>
            <div className="flex items-center space-x-8">
              <button className="group flex items-center text-base uppercase tracking-wider hover:opacity-80 transition-opacity" id="content-button" type='button' title="Start Project Button">
                Start Project
                <ArrowUpRight className="ml-2 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
              <div className="h-px w-32 bg-black"></div>
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-lg text-black leading-relaxed max-w-md">
              We provide innovative software solutions and mentorship,
              helping organizations leverage advanced analytics to drive growth.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="gap-16 lg:flex lg:w-full">
            {/* Introduction Block */}
            <div className='lg:w-1/2' id="content" data-type="Achievements" title="Our Achievements">
              <p className="text-5xl font-light mb-8 text-black">01</p>
              <h2 className="text-3xl font-light mb-6 text-black">Data-Driven Excellence</h2>
              <p className="text-lg leading-relaxed text-black mb-4">
                Welcome to the future of business intelligence. At DataSense Analytics, we transform complex data landscapes into clear, actionable insights.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div>
                  <p className="text-4xl font-light mb-2 text-black">98%</p>
                  <p className="text-sm uppercase tracking-wider text-gray-600">Accuracy Rate</p>
                </div>
                <div>
                  <p className="text-4xl font-light mb-2 text-black">500+</p>
                  <p className="text-sm uppercase tracking-wider text-gray-600">ML Models</p>
                </div>
                <div>
                  <p className="text-4xl font-light mb-2 text-black">10PB+</p>
                  <p className="text-sm uppercase tracking-wider text-gray-600">Data Processed</p>
                </div>
              </div>
              <button id='inside-content-button' title='click button' type='button' className='p-2 bg-black text-white mt-4'>Click Me!!!</button>
            </div>

            {/* Impact Section */}
            <div className='lg:w-1/2 mt-8 lg:mt-0' id="content" data-type="Our impact" title="Our Impact on It worldy">
              <p className="text-5xl font-light mb-8 text-black">02</p>
              <h2 className="text-3xl font-light mb-6 text-black">Our Impact</h2>
              <p className="text-lg leading-relaxed text-black">
                Our solutions have revolutionized operations across healthcare, retail, and finance. From optimizing patient care to personalizing customer experiences, our impact spans diverse sectors.
              </p>
              <div className="grid grid-cols-3 gap-8 mt-8">
                <div>
                  <p className="text-4xl font-light mb-2 text-black">100%</p>
                  <p className="text-sm uppercase tracking-wider text-gray-600">Satisfied Users</p>
                </div>
                <div>
                  <p className="text-4xl font-light mb-2 text-black">500+</p>
                  <p className="text-sm uppercase tracking-wider text-gray-600">Projects</p>
                </div>
                <div>
                  <p className="text-4xl font-light mb-2 text-black">100+</p>
                  <p className="text-sm uppercase tracking-wider text-gray-600">Clients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-light mb-12 text-black">Impact in Action</h2>
          <video
            id="content-video"
            title="Impact Video"
            controls
            className="w-full max-w-3xl mx-auto"
          >
            <source
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </div>
  );
};

export default Home;
