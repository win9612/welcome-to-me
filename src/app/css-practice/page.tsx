"use client";
import { Box } from "@/components/SimpleStyledComponents/Box";
import { InlineBlockDiv } from "@/components/SimpleStyledComponents/InlineBlockDiv";
import { InlineDiv } from "@/components/SimpleStyledComponents/InlineDiv";
import React from "react";

const Page = () => {
  return (
    <main>
      <Box>
        {/* <InlineDiv>Inline Div</InlineDiv>
        <InlineBlockDiv>Inline Block Div</InlineBlockDiv> */}
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Box>
      <Box>
        {/* <InlineDiv>Inline Div</InlineDiv>
        <InlineBlockDiv>Inline Block Div</InlineBlockDiv> */}
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Box>
    </main>
  );
};

export default Page;
