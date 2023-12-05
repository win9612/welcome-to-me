"use client";
import { useRouter } from "next/navigation";
import React from "react";

const CityList = () => {
  const router = useRouter();

  const handleCityClick = (cityName: string) => {
    router.push(`/weather/detail?city=${cityName}`);
  };

  return (
    <div>
      <h1>날씨</h1>
      <ul>
        <li onClick={() => handleCityClick("서울")}>서울</li>
        <li onClick={() => handleCityClick("뉴욕")}>뉴욕</li>
        <li onClick={() => handleCityClick("런던")}>런던</li>
      </ul>
    </div>
  );
};

export default CityList;
