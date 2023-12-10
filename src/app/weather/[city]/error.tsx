"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  const router = useRouter();

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
      <button
        onClick={() => router.back()}
        style={{
          width: "120px",
          height: "60px",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        뒤로 가기
      </button>
    </div>
  );
};

export default Error;
