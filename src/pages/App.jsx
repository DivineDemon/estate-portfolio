import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Feature from "../components/Feature";

const App = () => {
  const features = [
    {
      id: 1,
      heading: "Welcome to the World of August Yasin,",
      desc: "here an intricate tapestry of elegance and refinement intertwines, harmonizing the convergence of your discerning real estate aspirations into a magnificent symphony of tangible possibilities. At August Yasin we elevate the art of service, embodying sophistication through an unwavering commitment to tailoring bespoke real estate solutions for a diverse clientele, whether you're a first-time homebuyer, seasoned investor, property seller, landlord or a project developer.",
    },
    {
      id: 2,
      heading: "With a Meticulous Focus,",
      desc: "on the intricate nuances of your unique property endeavors, we take great pride in delivering personalized solutions, accompanied by undivided attention and dedicated support that mirror the caliber of your exceptional real estate ambitions.",
    },
    {
      id: 3,
      heading: "Welcome to the World of August Yasin,",
      desc: "backed by 20 years of extensive knowledge spanning local, national, and international markets, ensures your aspirations transform into resplendent reality as we guide you towards achieving your real estate objectives. Our unwavering integrity, transparency, and professionalism forms the bedrock of our approach and we strive to surpass your expectations at every juncture.",
    },
    {
      id: 4,
      heading: "Our expansive suite of services",
      desc: "not only surpasses the limitations of conventional norms but also elegantly embraces a multitude of illustrious real estate transactions. These services are meticulously curated to cater to the intricate demands of the discerning clientele.",
    },
    {
      id: 5,
      heading: "From acquiring Ultra Luxury properties",
      desc: "to Facilitating seamless dispositions to securing unparalleled leases and astutely managing portfolios and from visionary project development consulting to unrivaled expertise across freehold, leasehold, condominium, single-family, multiple-family, and commercial asset classes, we stand as a pinnacle of excellence in the realm of real estate.",
    },
    {
      id: 6,
      heading:
        "We also offer professional assistance in various areas including escrow services,",
      desc: "property gifting, investor visa processing, power of attorney, document translation, will registration, company setup, preparation of articles of association and addendums, all of which are conducted in close collaboration with our esteemed business associates.",
    },
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
    <>
      <Navbar />
      <Banner />
      {features.map((feature) => (
        <Feature item={feature} key={feature.id} />
      ))}
    </>
  );
};

export default App;
