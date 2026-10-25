import { useRef, useState } from "react";
import Reveal from "../Components/Reveal"; 
import Page from "../Pages/Page";
import { BIZ } from "../Pages/SiteData";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed
  const summary = useRef(null);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Enter an email address like name@example.com.";
    if (form.message.trim().length < 5) e.message = "Enter a message of at least 5 characters.";
    return e;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) { setTimeout(() => summary.current?.focus(), 0); return; }
    setStatus("sending");
    try {
      // Point this at your backend contact route
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(res.status);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("failed");
    }
  }

  const field = (id, label, extra = {}) => (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {errors[id] && <p id={`${id}-err`} className="err">{errors[id]}</p>}
      {extra.area ? (
        <textarea id={id} name={id} rows={5} value={form[id]} onChange={onChange}
          required aria-invalid={!!errors[id]} aria-describedby={errors[id] ? `${id}-err` : undefined} />
      ) : (
        <input id={id} name={id} type={extra.type || "text"} autoComplete={extra.ac} value={form[id]}
          onChange={onChange} required aria-invalid={!!errors[id]}
          aria-describedby={errors[id] ? `${id}-err` : undefined} />
      )}
    </div>
  );

  return (
    <Page title="Contact">
      <div className="two-col">
        <section aria-labelledby="visit-h">
          <h2 id="visit-h">Visit or call</h2>
          <address>
            {BIZ.address}<br />
            <a href={`tel:${BIZ.phone.replace(/[^\d]/g, "")}`}>{BIZ.phone}</a><br />
            <a href={`mailto:${BIZ.email}`}>{BIZ.email}</a>
          </address>
          <h3>Hours</h3>
          <dl className="dl">
            {BIZ.hours.map(([d, h]) => (<div key={d}><dt>{d}</dt><dd>{h}</dd></div>))}
          </dl>
        </section>

        <section aria-labelledby="msg-h">
          <h2 id="msg-h">Send a message</h2>
          {status === "sent" && <p role="status" className="ok">Message sent. We will reply by email.</p>}
          {status === "failed" && <p role="alert" className="err">Message not sent. Try again, or call us at {BIZ.phone}.</p>}
          {Object.keys(errors).length > 0 && (
            <div ref={summary} tabIndex={-1} role="alert" className="err summary">
              <p>Fix {Object.keys(errors).length} problem{Object.keys(errors).length > 1 ? "s" : ""} before sending:</p>
              <ul>{Object.entries(errors).map(([k, v]) => <li key={k}><a href={`#${k}`}>{v}</a></li>)}</ul>
            </div>
          )}
          <form onSubmit={onSubmit} noValidate>
            {field("name", "Your name", { ac: "name" })}
            {field("email", "Email address", { type: "email", ac: "email" })}
            {field("message", "Message", { area: true })}
            <button className="btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending message" : "Send message"}
            </button>
          </form>
        </section>
      </div>
    </Page>
  );
}
