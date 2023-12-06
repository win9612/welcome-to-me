import CityNameViewer from "@/components/template/CityNameViewer";
import { ICurrentWeatherResponse } from "@/interface/response/weather.types";
import { getCurrentWeather } from "@/models/weather.service";

const Page = async ({ params }: any) => {
  const response = await getCurrentWeather({ city: params.city });
  const jsonResposne: ICurrentWeatherResponse = await response.json();
  console.log(jsonResposne);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h1>도시 이름 뷰어입니다.</h1>
        <h2>{jsonResposne.location.country}</h2>
        <CityNameViewer cityName={params.city} />
      </div>
    </div>
  );
};

export default Page;
