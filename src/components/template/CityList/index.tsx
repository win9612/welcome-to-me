"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CityList = () => {
  const router = useRouter();

  const handleCityClick = (cityName: string) => {
    router.push(`/weather/${cityName}`);
  };

  return (
    <div>
      <h1>날씨</h1>
      <section
        style={{
          display: "flex",
          width: "640px",
          boxSizing: "border-box",
          padding: "32px",
          borderRadius: "16px",
          backgroundColor: "beige",
        }}
      >
        <ul>
          <li
            onClick={() => handleCityClick("seoul")}
            style={{
              marginTop: "12px",
              padding: "8px",
              cursor: "pointer",
            }}
          >
            서울
          </li>
          <li
            onClick={() => handleCityClick("newyork")}
            style={{
              marginTop: "12px",
              padding: "8px",
              cursor: "pointer",
            }}
          >
            뉴욕
          </li>
          <li
            onClick={() => handleCityClick("london")}
            style={{
              marginTop: "12px",
              padding: "8px",
              cursor: "pointer",
            }}
          >
            런던
          </li>
        </ul>
      </section>
    </div>
  );
};

export default CityList;
