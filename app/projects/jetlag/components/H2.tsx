"use client";

import { SECTIONS } from "@/app/const";
import useSectionObserver from "../useSectionObserver";

export default function H2({ id, children }: { id: (typeof SECTIONS)[number]; children: string }) {
  const ref = useSectionObserver(id);

  return (
    <h2 id={id} ref={ref}>
      {children}
    </h2>
  );
}
