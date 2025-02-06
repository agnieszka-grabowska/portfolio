"use client";

import { SECTIONS } from "@/app/const";
import { useSectionContext } from "../SectionProvider";

export default function Item({
  id,
  children,
}: {
  id: (typeof SECTIONS)[number];
  children: string;
}) {
  const { section } = useSectionContext();

  return (
    <li>
      <a href={`#${id}`} className={section === id ? "active" : undefined}>
        {children}
      </a>
    </li>
  );
}
