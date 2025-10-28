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
            to={van.id}
            state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
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

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  }

  return (
    <div className="van-page-content">
      <h1>Explore our van options</h1>
      <div className="van-list-filter-buttons">
        <button
          onClick={() => handleFilterChange("type", "simple")}
          className={`van-type simple ${
            typeFilter === "simple" ? "selected" : ""
          }`}
        >
          Simple
        </button>
        <button
          onClick={() => handleFilterChange("type", "luxury")}
          className={`van-type luxury ${
            typeFilter === "luxury" ? "selected" : ""
          }`}
        >
          Luxury
        </button>
        <button
          onClick={() => handleFilterChange("type", "rugged")}
          className={`van-type rugged ${
            typeFilter === "rugged" ? "selected" : ""
          }`}
        >
          Rugged
        </button>
        {typeFilter && (
          <button
            onClick={() => handleFilterChange("type", null)}
            className="van-type clear-filters"
          >
            Clear filter
          </button>
        )}
      </div>
      <div className="van-list">{vanElements}</div>
    </div>
  );
}
