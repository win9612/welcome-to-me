import RevalidateButton from "@/components/RevalidateButton";
import CityNameViewer from "@/components/template/CityNameViewer";
import { ICurrentTimeResponse } from "@/interface/response/time.types";
import { ICurrentWeatherResponse } from "@/interface/response/weather.types";
import { getCurrentTime, getCurrentWeather } from "@/models/weather.service";
import dayjs from "dayjs";

const Page = async ({ params }: any) => {
  const response = await getCurrentWeather({ city: params.city });
  const jsonResposne: ICurrentWeatherResponse = await response.json();

  const time = await getCurrentTime(jsonResposne.location.tz_id);
  const jsonTime: ICurrentTimeResponse = await time.json();
  console.log(jsonTime);

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
        <div>현재 시간 : {dayjs(jsonTime.dateTime).format("YYYY-MM-DD HH:mm:ss")}</div>
        <CityNameViewer cityName={params.city} />
        <RevalidateButton tag={"time"} />
      </div>
    </div>
  );
};

export default Page;
