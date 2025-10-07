import React from "react";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans.map((van) => {
    return (
      <div key={van.id} className="van-card">
        <img src={van.imageUrl} />
        <div className="van-info">
          <div className="van-title-type">
            <h2 className="van-name">{van.name}</h2>
            <p className="van-type">{van.type}</p>
          </div>
          <h2 className="van-price">
            ${van.price}
            <span className="van-price-daily">/day</span>
          </h2>
        </div>
      </div>
    );
  });

  return (
    <div className="van-page-content">
      <h1>Explore our van options</h1>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
