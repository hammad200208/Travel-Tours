import React from "react";

const ContactMap = () => {
  return (
    <section className="w-full px-5 md:px-10 py-10">
      <div className="max-w-5xl mx-auto h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-md">
        <img
          src="/map.png"  
          alt="Map"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default ContactMap;
