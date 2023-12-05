"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Page = ({ params }: any) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  console.log(params);

  useEffect(() => {
    console.log(pathname);
    console.log(searchParams.get("city"));
  }, []);

  return (
    <div>
      <h1>{searchParams.get("city") ?? "Unknown"}</h1>
      <div>this url : {pathname}</div>
    </div>
  );
};

export default Page;
