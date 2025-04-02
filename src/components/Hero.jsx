import React from 'react';
import modiImage from '../assets/modi.png';

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-32 bg-white">
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Left Column - Image */}
        <div className="w-full md:w-[30%]">
          <img
            src={modiImage} // Replace with your image path
            alt="Hero"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Right Column - Text Content */}
        <div className="w-full md:w-[70%] space-y-8 text-left">
          {/* First Row */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              "
            </h1>
            <p className="text-3xl italic text-gray-600">
            Today, The World and India Need a Skilled Workforce. If We Have to Promote the Development of Our Country Then Our Mission Has to Be Skill Development’ And ‘Skilled India’. Millions And Millions of Indian Youth Should Acquire the Skills Which Could Contribute Towards Making India a Modern Country.
            </p>
          </div>

          {/* Second Row */}
          <div>
            <p className="text-lg text-gray-900 text-left font-semibold">
                Shri Narendra Modi - Hon'ble PM of India,</p>
            <p className="text-lg text-gray-900 text-left font-semibold">
                ( Independence Day 2014 )
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;