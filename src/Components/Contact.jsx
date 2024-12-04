import React from 'react';
import { Navigation } from './Navigation';

export const Contact = () => {
  return (
    <>
    <Navigation/>
     {/* Contact Section */}
     <section className="py-32 px-8 bg-gray-50">
      <div id='content'>Hello Sweing dai</div>
     <div className="max-w-6xl mx-auto">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
         <div>
           <h2 className="text-4xl font-light mb-8">Ready to transform your data?</h2>
           <p className="text-gray-600 mb-8 max-w-md">
             Contact us to discuss how we can help you achieve your goals through 
             data-driven solutions and expert mentorship.
           </p>
           <button className="border border-black px-8 py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
             Contact Us
           </button>
         </div>
         <div className="grid grid-cols-2 gap-8">
           <div>
             <p className="text-sm text-gray-400 mb-2">Email</p>
             <p>contact@digital-horizons.com</p>
           </div>
           <div>
             <p className="text-sm text-gray-400 mb-2">Location</p>
             <p>Ramkot, Sitapaila</p>
           </div>
         </div>
       </div>
     </div>
   </section>
   </>
  )
}
