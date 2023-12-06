"use client";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  console.error(error);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
      }}
    >
      <h1>에러 발생</h1>
      <div>앗! 에러가 발생했습니다.</div>
      <div>message: {error.message}</div>
    </div>
  );
};

export default Error;
