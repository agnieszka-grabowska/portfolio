import React from "react";
import { useSectionContext } from "./SectionProvider";
import { SECTIONS } from "@/app/const";

export default function useSectionObserver(section: (typeof SECTIONS)[number]) {
  const { setSection } = useSectionContext();
  const ref = React.useRef(null);

  React.useEffect(() => {
    function callback(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSection(section);
        } else {
          if (entry.intersectionRect.top > 0) {
            const indexOfSection = SECTIONS.findIndex((sec) => sec === section);
            setSection(SECTIONS[indexOfSection - 1]);
          } else {
            if (section === "tech-stack") {
              setSection("solved-issues");
            }
          }
        }
      });
    }
    let observer = new IntersectionObserver(callback, { threshold: [0.5] });

    if (ref.current !== null) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [setSection, section]);

  return ref;
}
