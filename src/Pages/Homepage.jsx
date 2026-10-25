import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal"; 
import Page from "../Pages/Page";
import Porthole from "../Pages/Porthole";
import { BIZ } from "../Pages/SiteData";
import "./Homepage.css";

const STRIP = ["Open seven days", "Washers for every load", "Free folding tables", "Step-free entrance", "Bring your own detergent"];
 
export default function HomePage() {
  return (
    <Page
      title="Clean laundry, on your schedule"
      heading={<>Clean laundry, <span className="mark">on your schedule</span></>}
    >
      <div className="hero">
        <div className="hero-copy">
          <p className="lead">
            Walk in, load up, walk out. {BIZ.name} is a self-service laundromat with a machine for every size of load.
          </p>
          <div className="actions">
            <Link className="btn" to="/services">See our machines</Link>
            <Link className="btn btn-quiet" to="/contact">Find us</Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <span className="bubble b1" /><span className="bubble b2" /><span className="bubble b3" />
          <Porthole />
        </div>
      </div>
 
      <div className="strip">
        <ul className="strip-track" aria-label="Highlights">
          {STRIP.map((t) => <li key={t}>{t}</li>)}
          {STRIP.map((t) => <li key={t + "-copy"} aria-hidden="true">{t}</li>)}
        </ul>
      </div>
 
      <section aria-labelledby="what-h" className="bento">
        <h2 id="what-h">Everything you need, nothing you don't</h2>
        <div className="bento-grid">
          {SERVICES.slice(0, 3).map((s, i) => (
            <Reveal key={s.slug} delay={i * 80} className={`tile t${i}`}>
              <p className="tag">{s.size}</p>
              <h3><Link className="stretch" to={`/services/${s.slug}`}>{s.name}</Link></h3>
              <p>{s.desc}</p>
              <span className="arrow" aria-hidden="true">→</span>
            </Reveal>
          ))}
          <Reveal delay={240} className="tile t3">
            <h3>Hours</h3>
            <dl className="hours">
              {BIZ.hours.map(([d, h]) => (<div key={d}><dt>{d}</dt><dd>{h}</dd></div>))}
            </dl>
            <p>Last wash starts one hour before closing.</p>
          </Reveal>
        </div>
      </section>
 
      <Reveal className="cta">
        <h2>Ready when you are</h2>
        <p>{BIZ.address}</p>
        <div className="actions">
          <Link className="btn" to="/contact">Get directions and contact</Link>
          <Link className="btn" to="/services">All services</Link>
        </div>
      </Reveal>
    </Page>
  );
};