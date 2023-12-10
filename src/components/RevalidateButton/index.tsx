"use client";

import { fetchSimple } from "@/utils/fetch";
import React from "react";

const RevalidateButton = ({ tag }: { tag: string }) => {
  const handleClick = async () => {
    const response = await fetchSimple(`/api/revalidate?tag=${tag}`);
    const jsonResponse = await response.json();
    console.log(response);
    console.log(jsonResponse);
  };

  return (
    <button
      style={{
        width: "160px",
        height: "80px",
      }}
      onClick={handleClick}
    >
      재검증
    </button>
  );
};

export default RevalidateButton;
