import React from "react";

const Gallery = () => {
  return (
    <div id="gallery" className="max-w-[1140px] m-auto w-full py-16 px-4">
      <h2 className="text-center text-gray-700 p-4">Gallery</h2>
      <div className="grid sm:grid-cols-5 gap-4">
        <div className="sm:col-span-3 col-span-2 row-span-2 overflow-hidden">
          <img className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-300"
            src="https://images.unsplash.com/photo-1580223530509-849e0ad583ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
            alt="gallery"
          />
        </div>
        <div className="overflow-hidden">
          <img className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-300"
            src="https://images.unsplash.com/photo-1541480551145-2370a440d585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=869&q=80"
            alt="gallery"
          />
        </div>
        <div className="overflow-hidden">
          <img className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-300"
            src="https://images.unsplash.com/photo-1611222565146-f0e39f5217f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="gallery"
          />
        </div>
        <div className="overflow-hidden">
          <img className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-300"
            src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="gallery"
          />
        </div>
        <div className="overflow-hidden">
          <img className="w-full h-full object-cover hover:scale-110 transition-all ease-in duration-300"
            src="https://images.unsplash.com/photo-1464093515883-ec948246accb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=859&q=80"
            alt="gallery"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
