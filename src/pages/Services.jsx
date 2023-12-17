import Feature from "../components/Feature";

const Services = () => {
  const services = [
    {
      id: 7,
      heading:
        "We also offer professional assistance in various areas including escrow services,",
      desc: "property gifting, investor visa processing, power of attorney, document translation, will registration, company setup, preparation of articles of association and addendums, all of which are conducted in close collaboration with our esteemed business associates.",
    },
    {
      id: 8,
      heading:
        "We also offer professional assistance in various areas including escrow services,",
      desc: "property gifting, investor visa processing, power of attorney, document translation, will registration, company setup, preparation of articles of association and addendums, all of which are conducted in close collaboration with our esteemed business associates.",
    },
    {
      id: 9,
      heading:
        "We also offer professional assistance in various areas including escrow services,",
      desc: "property gifting, investor visa processing, power of attorney, document translation, will registration, company setup, preparation of articles of association and addendums, all of which are conducted in close collaboration with our esteemed business associates.",
    },
  ];

  return (
    <div
      id="services"
      className="flex flex-col items-center justify-center px-10 pb-10">
      <h1 id="subheading" className="mb-10 text-4xl font-bold text-[#14533B]">
        Our Services
      </h1>
      <div className="grid grid-cols-3 items-center justify-center gap-5">
        {services.map((feature) => (
          <Feature item={feature} key={feature.id} />
        ))}
      </div>
    </div>
  );
};

export default Services;
