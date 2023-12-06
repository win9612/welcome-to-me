"use client";
import { ICurrentWeatherResponse } from "@/interface/response/weather.types";
import { getCurrentWeather } from "@/models/weather.service";
import { isHttpError } from "@/utils/error";
import dayjs from "dayjs";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CityNameViewer = ({ cityName }: { cityName: string }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [cityState, setCityState] = useState<string>("");
  const [currentTime, setCurrentTime] = useState<string>("");
  const [currentCondition, setCurrentCondition] = useState<string>("");

  useEffect(() => {
    const city = cityName;
    if (!city) return;

    setCityState(city);
  }, []);

  useEffect(() => {
    if (cityState === "") return;
    fetchCurrentWeather();
  }, [cityState]);

  const cityFormatter = (city: string) => {
    switch (city) {
      case "seoul":
        return "서울";
      case "newyork":
        return "뉴욕";
      case "london":
        return "런던";
      default:
        return "Unknown";
    }
  };

  const handleBackButtonClick = () => {
    router.back();
  };

  const fetchCurrentWeather = async () => {
    const response = await getCurrentWeather({ city: cityState });

    if (isHttpError(response)) {
      if (response.status === 400) {
        alert(`${cityFormatter(cityState)}의 날씨는 찾을 수 없습니다.`);
        throw new Error("What happen");
      } else {
        alert(`${cityFormatter(cityState)}의 날씨를 요청하던 중 오류가 발생했습니다.`);
      }
      return;
    }

    const jsonResponse: ICurrentWeatherResponse = await response.json();
    console.log(response);
    console.log(jsonResponse);

    setCurrentTime(dayjs(jsonResponse.location.localtime).format("YYYY-MM-DD HH:mm"));
    setCurrentCondition(jsonResponse.current.condition.text);
  };

  return (
    <>
      <h2>{cityFormatter(cityState)}</h2>
      <div>this url : {pathname}</div>
      <div>
        현재 시간 : <strong>{currentTime}</strong>
      </div>
      <div>
        현재 날씨 : <strong>{currentCondition}</strong>
      </div>
      <button
        onClick={handleBackButtonClick}
        style={{
          padding: "32px",
          width: "200px",
          height: "80px",
        }}
      >
        돌아가기
      </button>
    </>
  );
};

export default CityNameViewer;
