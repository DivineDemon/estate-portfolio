import BannerImage from "../assets/img/banner.jpg";

const Banner = () => {
  return (
    <div className="w-full h-screen bg-[#14533B] relative">
      <img
        src={BannerImage}
        alt="banner"
        className="w-full h-full opacity-50 object-cover"
      />
      <div className="flex flex-col items-center justify-center space-y-7 text-center top-1/2 left-1/2 absolute transform -translate-x-1/2 text-white">
        <h1 className="text-9xl font-semibold">August Yasin</h1>
        <p className="text-3xl font-medium">
          Turning your Dreams, into your Location.
        </p>
      </div>
    </div>
  );
};

export default Banner;
