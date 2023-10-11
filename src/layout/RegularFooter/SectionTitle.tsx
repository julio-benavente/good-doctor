"use client";

import { Divider } from "@mui/material";
// import Link from "next/link";
import { ReactNode } from "react";

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <p className="text-base font-bold text-white">{children}</p>
      <Divider className="mt-2 mb-3 border-b-2 bg-emerald-200" />
    </div>
  );
};

export default SectionTitle;
