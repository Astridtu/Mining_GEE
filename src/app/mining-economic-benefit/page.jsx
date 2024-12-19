import React from 'react';
import BarChart from "../../components/BarChart";
const features = [
  { name: 'Origin', description: 'Designed by Good Goods, Inc.' },
  { name: 'Material', description: 'Solid walnut base with rare earth magnets and powder coated steel card cover' },
  { name: 'Dimensions', description: '6.25" x 3.55" x 1.15"' },
  { name: 'Finish', description: 'Hand sanded and finished with natural oil' },
  { name: 'Includes', description: 'Wood card tray and 3 refill packs' },
  { name: 'Considerations', description: 'Made from natural materials. Grain and color vary with each item.' },
];

const MiningEconomicBenefit = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Mining economic and Mining artifacts</h2>
          <p className="mt-4 text-gray-500">
          Understanding the interplay between mining economics and artifacts highlights how mining 
          has shaped human civilization and continues to influence economic and technological progress.
          </p>
          <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
             <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Iron</dt>
                 <dd className="mt-2 text-sm text-gray-500">Iron is a chemical element; it has the symbol Fe (from Latin ferrum 'iron') and atomic number 26.
                     It is a metal that belongs to the first transition series and group 8 of the periodic table. 
                    It is, by mass, the most common element on Earth, forming much of Earth's outer and inner core.</dd>
             </div>
             <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Gold</dt>
                  <dd className="mt-2 text-sm text-gray-500">
                  Gold is a chemical element with the chemical symbol Au and atomic number 79. 
                  In its pure form, it is a bright, slightly orange-yellow, dense, soft, malleable, and ductile metal. 
                  Chemically, gold is a transition metal, a group 11 element, and one of the noble metals.
                </dd>
             </div>
             <div className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">Copper</dt>
              <dd className="mt-2 text-sm text-gray-500">copper (Cu), chemical element, a reddish,
                 extremely ductile metal of Group 11 (Ib) of the periodic table that is an unusually good conductor of electricity and heat.</dd>
             </div>
             <div className="border-t border-gray-200 pt-4">
                 <dt className="font-medium text-gray-900">Coal</dt>
                  <dd className="mt-2 text-sm text-gray-500">Coal is a sedimentary deposit composed predominantly of carbon that is readily combustible. 
                    Coal is black or brownish-black, and has a composition that (including inherent moisture) 
                    consists of more than 50 percent by weight and more than 70 percent by volume of carbonaceous material.</dd>
             </div>
           </dl>

        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
          <img
            src="/Iron.jpg"
          />
          <img
            src="/gold.jpg"
          />
          <img
            src="/copper.jpg"
          />
          <img
            src="/coal.jpg"
          />
        </div>
      </div>
          <div className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl flex items-center justify-center">Numbers of contributed mining artifacts (All over the world)</div>
      <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
               <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                 <div className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base/7 text-gray-600">Mongolia contributed 0.05%</dt>
          <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">2.6 billion metric tons of Iron</dd>
             </div>
               <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                   <dt className="text-base/7 text-gray-600">Mongolia contributed 2.3%</dt>
               <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">22 million metric tons of Copper</dd>
               </div>
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                 <dt className="text-base/7 text-gray-600">Mongolia contributed 0.5%</dt>
                 <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">3,644 metric tons of Gold</dd>
               </div>     
               <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                 <dt className="text-base/7 text-gray-600">Mongolia contributed 0.95%</dt>
                 <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">8.54 billion metric tons of coal</dd>
               </div> 
            </dl>
           </div>
           </div>
           <BarChart/>
        </div>

  );
};

export default MiningEconomicBenefit;