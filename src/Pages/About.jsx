import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal"; 
import Page from "../Pages/Page";
import { ACCESS } from "../Pages/SiteData";

export default function About() {
  return (
    <Page title="About us">
      <p className="lead">
        We are a neighborhood laundromat built around one idea: laundry day should be easy for everyone.
      </p>
      <p>Replace this paragraph with your story: when you opened, who runs the shop, and what makes it a good place to spend an hour.</p>
      <section aria-labelledby="acc-h">
        <h2 id="acc-h">Accessibility in our store</h2>
        <ul className="checks">{ACCESS.map((a) => <li key={a}>{a}</li>)}</ul>
        <p>If something in our store or on this site is hard to use, tell us on the <Link to="/contact">contact page</Link> and we will fix it.</p>
      </section>
    </Page>
  );
}