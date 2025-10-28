import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vanElements = vans
    .filter((van) => !typeFilter || van.type === typeFilter)
    .map((van) => {
      return (
        <div key={van.id} className="van-card">
          <Link
            to={`/vans/${van.id}`}
            aria-label={`View details for ${van.name}, 
                             priced at $${van.price} per day`}
          >
            <img src={van.imageUrl} />
            <div className="van-info">
              <div className="van-title-type">
                <h2 className="van-name">{van.name}</h2>
                <i className={`van-type ${van.type} selected`}>{van.type}</i>
              </div>
              <h2 className="van-price">
                ${van.price}
                <span className="van-price-daily">/day</span>
              </h2>
            </div>
          </Link>
        </div>
      );
    });

  return (
    <div className="van-page-content">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <Link className="van-type simple" to="?type=simple">
          Simple
        </Link>
        <Link className="van-type luxury" to="?type=luxury">
          Luxury
        </Link>
        <Link className="van-type rugged" to="?type=rugged">
          Rugged
        </Link>
        <Link className="van-type clear-filters" to=".">
          Clear Filter
        </Link>
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
