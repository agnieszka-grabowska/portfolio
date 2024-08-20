import React from "react";
import { Tab, useTab } from "./tabProvider";

export default function useObserver(tab: Tab) {
  const { setCurrentTab } = useTab();
  const ref = React.useRef(null);

  React.useEffect(() => {
    function callback(entries: IntersectionObserverEntry[]) {
      if (entries[0].isIntersecting) {
        setCurrentTab(tab);
      }
    }
    let observer = new IntersectionObserver(callback, { threshold: 0.2 });

    if (ref.current !== null) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [setCurrentTab, tab]);

  return ref;
}
