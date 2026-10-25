import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { BIZ } from "../Pages/SiteData";

/* Moves focus to the page heading and updates the tab title on every route change */
export default function Page({ title, heading, children }) {
  const h1 = useRef(null);
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = `${title} | ${BIZ.name}`;
    h1.current?.focus();
  }, [pathname, title]);
  return (
    <>
      <h1 ref={h1} tabIndex={-1}>{heading ?? title}</h1>
      {children}
    </>
  );
}
 