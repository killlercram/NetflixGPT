// import React from 'react'

// eslint-disable-next-line react/prop-types
const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-16 absolute text-white bg-gradient-to-r from-black bg-opacity-99">
      <h1 className="font-bold text-4xl">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="text-black text-lg bg-white p-2 w-32 cursor-pointer opacity-90 rounded-md hover:bg-opacity-85">Play</button>
        <button className="text-white text-lg bg-gray-500 p-2 mx-4 w-32 cursor-pointer opacity-75 rounded-md hover:bg-opacity-85">More Info</button>
      </div>
    </div>
    
  );
 
};

export default VideoTitle;