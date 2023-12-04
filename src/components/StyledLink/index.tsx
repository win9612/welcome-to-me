import { IStyledLinkProps } from "@/interface/props/components.types";
import Link from "next/link";
import React from "react";

const StyledLink = ({ href, label, prefetch, scroll, replace }: IStyledLinkProps) => {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      scroll={scroll}
      replace={replace}
      style={{
        fontWeight: "bold",
        fontSize: "16px",
      }}
    >
      {label}
    </Link>
  );
};

export default StyledLink;
