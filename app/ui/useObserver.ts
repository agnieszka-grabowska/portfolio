import React from "react";
import { Tab, useTab } from "./tabProvider";

export default function useObserver(tab: Tab) {
  const { setCurrentTab } = useTab();
  const ref = React.useRef(null);

  React.useEffect(() => {
    function callback(entries: IntersectionObserverEntry[]) {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0.5) {
          setCurrentTab(tab);
        }
      });
    }
    let observer = new IntersectionObserver(callback, { threshold: [0.25, 0.5, 0.75, 1] });

    if (ref.current !== null) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [setCurrentTab, tab]);

  return ref;
}
