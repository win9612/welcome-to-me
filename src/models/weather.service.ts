import { fetchSimple, fetchWrapper } from "@/utils/fetch";
import "qs";

const weatherBaseUrl = "https://api.weatherapi.com/v1";
const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

/**
 * 최근 날씨 정보를 받아오는 함수
 * @param body
 * @returns
 */
export const getCurrentWeather = async (body: { city: string }): Promise<Response> => {
  const response = await fetchSimple(`${weatherBaseUrl}/current.json?key=${weatherApiKey}&q=${body.city}&aqi=yes`);

  if (!response.ok) throw new Error(response.statusText);

  return response;
};

/**
 * 현재 시간을 받아오는 함수
 */
export const getCurrentTime = async (timeZone: string): Promise<Response> => {
  const response = await fetchSimple(`https://timeapi.io/api/Time/current/zone?timeZone=${timeZone}`, ["time"]);

  if (!response.ok) throw new Error("시간 정보를 가져올 수 없습니다.");

  return response;
};
