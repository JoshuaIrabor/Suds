import { useState } from "react";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Services from "./Pages/Services";
import ServiceDetail from "./Pages/ServiceDetail";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Page from "./Pages/Page";
import { BIZ } from "./Pages/SiteData";
import "./App.css";

export default function App() {
  const [open, setOpen] = useState(false);
  const links = [["/", "Home"], ["/services", "Services"], ["/about", "About"], ["/contact", "Contact"]];
  return (
    <BrowserRouter>
      <a className="skip" href="#main">Skip to main content</a>
      <header className="bar">
        <Link to="/" className="brand"><span className="brand-mark" aria-hidden="true" />{BIZ.name}</Link>
        <button className="menu-btn" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>
          {open ? "Close menu" : "Menu"}
        </button>
        <nav id="nav" aria-label="Main" className={open ? "open" : ""}>
          <ul>
            {links.map(([to, label]) => (
              <li key={to}>
                <NavLink to={to} end={to === "/"} onClick={() => setOpen(false)}>{label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page title="Page not found"><p>That page does not exist. <Link to="/">Go to the home page</Link>.</p></Page>} />
        </Routes>
      </main>
      <footer>
        <div className="foot">
          <p className="foot-brand">{BIZ.name}</p>
          <p>{BIZ.address}</p>
          <p><a href={`tel:${BIZ.phone.replace(/[^\d]/g, "")}`}>{BIZ.phone}</a> · <a href={`mailto:${BIZ.email}`}>{BIZ.email}</a></p>
        </div>
      </footer>
    </BrowserRouter>
  );
}