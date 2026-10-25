import { Link, useParams } from "react-router-dom";
import Reveal from "../Components/Reveal"; 
import Page from "../Pages/Page";
import { SERVICES } from "../Pages/SiteData";
import "./ServiceDetail.css";

export default function ServiceDetail() {
  const { slug } = useParams();
  const i = SERVICES.findIndex((s) => s.slug === slug);
  const s = SERVICES[i];
  if (!s) {
    return (
      <Page title="Service not found">
        <p>We could not find that service. <Link to="/services">See all services</Link>.</p>
      </Page>
    );
  }
  const next = SERVICES[(i + 1) % SERVICES.length];
  return (
    <Page title={s.name}>
      <nav aria-label="Breadcrumb" className="crumbs">
        <ol>
          <li><Link to="/services">Services</Link></li>
          <li aria-current="page">{s.name}</li>
        </ol>
      </nav>
      <p className="lead">{s.desc}</p>
      <p className="tag">Capacity: {s.size}</p>
      <section aria-labelledby="how-h">
        <h2 id="how-h">How to use it</h2>
        <ol className="steps">{s.steps.map((t) => <li key={t}>{t}</li>)}</ol>
      </section>
      <section aria-labelledby="know-h">
        <h2 id="know-h">Good to know</h2>
        <ul className="checks">{s.notes.map((t) => <li key={t}>{t}</li>)}</ul>
      </section>
      <p className="actions">
        <Link className="btn btn-quiet" to="/services">All services</Link>
        <Link className="btn" to={`/services/${next.slug}`}>Next: {next.name}</Link>
      </p>
    </Page>
  );
}