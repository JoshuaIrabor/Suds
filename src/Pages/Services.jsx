import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal"; 

import Page from "../Pages/Page";
import { SERVICES } from "../Pages/SiteData";
import "./Services.css";



export default function Services() {
  return (
    <Page title="Services">
      <p className="lead">Every machine is self-service. Pick a size, load it and start it yourself. Select a service to see how it works.</p>
      <ul className="grid" aria-label="Machines and amenities">
        {SERVICES.map((s, i) => (
          <Reveal as="li" key={s.slug} delay={(i % 3) * 80} className="svc">
            <span className="num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <p className="tag">{s.size}</p>
            <h2><Link className="stretch" to={`/services/${s.slug}`}>{s.name}</Link></h2>
            <p>{s.desc}</p>
            <span className="arrow" aria-hidden="true">→</span>
          </Reveal>
        ))}
      </ul>
    </Page>
  );
}