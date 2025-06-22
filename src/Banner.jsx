import React from 'react';

const Banner = () => {
  return (
    <div
      className=" mt-[1px] h-[500px] bg-fixed bg-center bg-cover flex items-center justify-center text-white"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80')`,
      }}
    >
      <div className=" text-center">
        <h1 className="text-4xl font-bold mb-4">Explore the World with Us</h1>
        <p className="text-lg">Find the best hotels and travel blogs to inspire your next journey</p>
      </div>
    </div>
  );
};

export default Banner;