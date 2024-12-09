
import Image from 'next/image'
import React from 'react'
import { ChevronLeft , ChevronRight } from 'lucide-react';


const Card = () => {
    return (
        <div >
            <div className='flex justify-between mt-28 px-10 lg:px-16'>
                <div>
                    <span className='text-lg font-semibold'>Best of Air Max</span>
                </div>

                <div className='flex items-center justify-between'>
                    <span>shop</span>
                    <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800 mx-3'>
                      < ChevronLeft />
                    </div>
                    <div className='p-2 bg-gray-100 text-zinc-400 rounded-full hover:bg-gray-200 hover:text-zinc-800'>
                    < ChevronLeft />
                    </div>
                </div>

            </div>


 <div className="max-w-7xl mx-auto px-4 my-8 font-helvetica text-[15px]">
          <div className="flex gap-12 overflow-x-scroll md:overflow-x-hidden">
            {/* Product 1 */}
            <div className="flex-shrink-0 w-48 ml-8">
              <img
                src="/Shoe6.png"
                alt="Air Jordan"
                className="w-full h-48 object-cover rounded-md border"
              />
              <h4 className="font-medium mt-2 ">Air Jordan 1 Mid SE Craft</h4>
              <p className="text-gray-500">Men's Shoes</p>
            </div>
           {/* Product 2 */}
           <div className="flex-shrink-0 w-48">
              <img
                src="/Shirt4.png"
                alt="Air Jordan"
                className="w-full h-48 object-cover rounded-md border"
              />
              <h4 className="font-medium mt-2">Air Jordan 1 Mid SE Craft</h4>
              <p className="text-gray-500">Men's Shoes</p>
            </div>
            {/* Product 3 */}
            <div className="flex-shrink-0 w-48">
              <img
                src="/Shoe5.png"
                alt="Air Jordan"
                className="w-full h-48 object-cover rounded-md border"
              />
              <h4 className="font-medium mt-2">Air Jordan 1 Mid SE Craft</h4>
              <p className="text-gray-500">Men's Shoes</p>
            </div>
            {/* Product 4 */}
            <div className="flex-shrink-0 w-48">
              <img
                src="/Shirt2.png"
                alt="Air Jordan"
                className="w-full h-48 object-cover rounded-md border"
              />
              <h4 className="font-medium mt-2">Air Jordan 1 Mid SE Craft</h4>
              <p className="text-gray-500">Men's Shoes</p>
            </div>
            {/* Product 6 */}
            <div className="flex-shrink-0 w-48">
              <img
                src="/Shoes.png"
                alt="Air Jordan"
                className="w-full h-48 object-cover rounded-md border"
              />
              <h4 className="font-medium mt-2">Air Jordan 1 Mid SE Craft</h4>
              <p className="text-gray-500">Men's Shoes</p>
            </div>
            
          </div>
        </div>

        </div>
    )
}

export default Card