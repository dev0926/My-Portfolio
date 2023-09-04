import React from "react";
import MySvg from '../../assets/programmer.svg'; 

const ComputersCanvas = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex justify-start items-center 
    p-12 sm:p-32 md:p-24 lg:p-32 xl:p-48">
      <img src={MySvg} alt="Computer" width="500" height="500" className="ml-20 ml-sm-19 mt-12 mb-" 
      style={{ marginTop: '90px', marginLeft: '20px' }} />
    </section>
  );
};

export default ComputersCanvas;