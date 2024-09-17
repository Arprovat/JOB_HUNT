import React from 'react';

const Timeline = () => {
  return (
    <div className=" text-pink-400 h-full">
      <div className="mx-auto py-10">
        <h2 className="pb-3 pt-2 text-white text-center text-3xl">Vertical Left-Right Timeline</h2>
        
        {/* First Section */}
        <div className="flex items-center">
          <div className="w-1/6 text-center relative">
            <div className="bg-pink-400 text-gray-800 font-bold p-4 rounded-full z-10">1</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 border-l-4 border-pink-400 h-full z-0"></div>
          </div>
          <div className="w-5/6">
            <h5 className="text-white text-lg">Fully Responsive</h5>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. 
              Morbi orci urna, iaculis in ligula et, posuere interdum lectus.
            </p>
          </div>
        </div>

        {/* Path between 1 and 2 */}
        <div className="flex items-center">
          <div className="w-1/6">
            <div className="relative">
              <div className="border-4 border-pink-400 rounded-lg w-full h-6 absolute top-0 right-0 transform rotate-45"></div>
            </div>
          </div>
          <div className="w-5/6">
            <hr className="border-t-4 border-pink-400"/>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex items-center justify-end">
          <div className="w-5/6 text-right">
            <h5 className="text-white text-lg">Using Tailwind CSS</h5>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. 
              Morbi orci urna, iaculis in ligula et, posuere interdum lectus.
            </p>
          </div>
          <div className="w-1/6 text-center relative">
            <div className="bg-pink-400 text-gray-800 font-bold p-4 rounded-full z-10">2</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 border-l-4 border-pink-400 h-full z-0"></div>
          </div>
        </div>

        {/* Path between 2 and 3 */}
        <div className="flex items-center">
          <div className="w-1/6">
            <div className="relative">
              <div className="border-4 border-pink-400 rounded-lg w-full h-6 absolute top-0 right-0 transform rotate-45"></div>
            </div>
          </div>
          <div className="w-5/6">
            <hr className="border-t-4 border-pink-400"/>
          </div>
        </div>

        {/* Third Section */}
        <div className="flex items-center">
          <div className="w-1/6 text-center relative">
            <div className="bg-pink-400 text-gray-800 font-bold p-4 rounded-full z-10">3</div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 border-l-4 border-pink-400 h-full z-0"></div>
          </div>
          <div className="w-5/6">
            <h5 className="text-white text-lg">Now with JSX and Tailwind</h5>
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor gravida aliquam. 
              Morbi orci urna, iaculis in ligula et, posuere interdum lectus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
