/** @jsxImportSource @emotion/react */
"use client"
import { Suspense } from "react";
import AllSections from "./all-section";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AllSections />
    </Suspense>
  );
}