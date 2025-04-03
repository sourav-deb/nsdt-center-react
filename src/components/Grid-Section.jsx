import React from 'react';

const GridSection = () => {
  // Sample data for the grid cards
  const gridCards = [
    {
      id: 1,
      title: 'Knowledge',
      description: 'Acquire in-depth knowledge through our comprehensive curriculum.',
      icon: '🚀',
    },
    {
      id: 2,
      title: 'Practical Skills',
      description: 'Develop hands-on skills with real-world projects and lab sessions.',
      icon: '💡',
    },
    {
      id: 3,
      title: 'Expert Instruction',
      description: 'Learn from industry experts dedicated to guiding you towards success.',
      icon: '🔍',
    },
    {
      id: 4,
      title: 'Certificate',
      description: 'Receive a recognized diploma certificate upon successful completion.',
      icon: '🌟',
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row gap-8 h-full">
          {/* First Column - 50% width on desktop */}
          <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl font-bold mb-4 font-georgia text-gray-800 text-left">
                What to Expect from our Diploma Course?
              </h2>
              <p className="text-gray-600 mb-1 text-left text-lg font-[500]">
                Where Learning Knows No Limits!
              </p>
            </div>
            <div className="mt-4 flex-grow">
              <img
                src="/src/assets/student-woman-startup.jpg"
                alt="Section illustration"
                className="w-full h-auto shadow-[#F4931E_-10px_10px]"
              />
            </div>
          </div>

          {/* Second Column - 50% width on desktop with 2x2 grid */}
          <div className="w-full md:w-1/2 h-full flex items-center justify-center">
            <div className="grid grid-cols-2 gap-4 h-auto w-full my-auto">
              {gridCards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full"
                >
                  <div className="text-3xl mb-3">{card.icon}</div>
                  <h3 className="text-2xl font-[1000] mb-2 font-georgia text-gray-800 text-left">{card.title}</h3>
                  <p className="text-gray-600 text-left text-lg font-[500] flex-grow">{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridSection;