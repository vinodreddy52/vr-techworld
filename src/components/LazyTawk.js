import React, { useEffect, useState, Suspense, lazy } from "react";

// We lazy-load the chat widget and only mount it after a short delay
const TawkToChat = lazy(() => import("./ChatWidget"));

const LazyTawk = ({ delay = 3000 }) => {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const id = window.requestIdleCallback
      ? window.requestIdleCallback(() => setShouldLoad(true), { timeout: delay })
      : setTimeout(() => setShouldLoad(true), delay);

    return () => {
      if (typeof id === "number") clearTimeout(id);
    };
  }, [delay]);

  if (!shouldLoad) return null;

  return (
    <Suspense fallback={null}>
      <TawkToChat />
    </Suspense>
  );
};

export default LazyTawk;
