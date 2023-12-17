import { useState } from "react";

const Feature = ({ item }) => {
  const [activate, setActivate] = useState(false);

  return (
    <div
      className="relative w-full h-full overflow-hidden rounded-xl cursor-pointer"
      onMouseEnter={() => setActivate(true)}
      onMouseLeave={() => setActivate(false)}>
      <div className="bg-black w-full h-full rounded-xl">
        <img
          className={`w-full h-full object-cover transition duration-300 ease-in-out transform scale-100 rounded-xl ${
            activate && "scale-105 opacity-70"
          }`}
          src={require(`../assets/img/${item.id}.jpg`)}
          alt="dubai"
        />
      </div>
      <div
        className={`absolute bottom-0 left-0 rounded-xl m-5 h-[50%] backdrop-blur-sm bg-white/30 flex items-center justify-center opacity-0 transition duration-300 ease-in-out ${
          activate && "opacity-100"
        }`}>
        <p className="text-white font-bold text-lg overflow-hidden text-center p-10">
          <h1 className="text-normal mb-5">{item.heading}</h1>
          <p className="text-xs text-wrap text-justify">{item.desc}</p>
        </p>
      </div>
    </div>
  );
};

export default Feature;
