import { fetchSimple, fetchWrapper } from "@/utils/fetch";
import "qs";

const weatherBaseUrl = "https://api.weatherapi.com/v1";
const weatherApiKey = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const getCurrentWeather = async (body: { city: string }): Promise<Response> => {
  const response = await fetchSimple(`${weatherBaseUrl}/current.json?key=${weatherApiKey}&q=${body.city}&aqi=yes`);

  if (!response.ok) throw new Error(response.statusText);

  return response;
};
