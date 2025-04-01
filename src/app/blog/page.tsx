/** @jsxImportSource @emotion/react */
"use client"
import { Suspense } from "react";

export default function Blog() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div><p>here</p></div>
    </Suspense>
  );
}