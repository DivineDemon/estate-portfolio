const Feature = ({ item }) => {
  return (
    <div className="w-full flex flex-row items-center justify-center">
      <img
        src={require(`../assets/img/${item.id}.jpg`)}
        alt="dubai"
        className={item.id % 2 === 0 ? "order-1" : "order-last"}
      />
      <div className="flex flex-col items-start justify-start">
        <h1>{item.heading}</h1>
        <p>{item.desc}</p>
      </div>
    </div>
  );
};

export default Feature;
