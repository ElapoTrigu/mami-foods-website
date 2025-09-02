import React, { useEffect } from "react";
// Adjust import paths to match your project structure
import { Section } from "../components/ui/Section";
import { Card } from "../components/ui/Card";
import { Button, LinkButton } from "../components/ui/button";

/**
 * About Page (single page with anchored sections)
 * ----------------------------------------------
 * Sections on one page: Story (#story), Farmers (#farmers), Team (#team)
 * Your nav can link to /about#story, /about#farmers, /about#team
 */

// Smoothly scroll to the hash on first load and when hash changes
function useScrollToHash(offset = 0) {
  useEffect(() => {
    function handler() {
      const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
      if (!id) return;
      const el = document.getElementById(id);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    handler();
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, [offset]);
}

export default function AboutPage() {
  // If you have a fixed navbar, set offset (e.g., 72)
  useScrollToHash(72);

  return (
    <main>
      {/* Hero */}
      <Section>
        <div className="container">
          <div className="section-title">
            <div className="eyebrow">About Us</div>
            <h1 className="h1 title" style={{ margin: 0 }}>About Mami Foods</h1>
            <p className="lead" style={{ marginTop: "0.75rem" }}>
              Preservative‑free dried fruits, condiments, and juices crafted with farmers across Malawi.
            </p>
            <nav aria-label="About sections" style={{ marginTop: "1rem", display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
              <LinkButton href="#story" variant="outline">Our Story</LinkButton>
              <LinkButton href="#farmers" variant="outline">Our Farmers</LinkButton>
              <LinkButton href="#team" variant="outline">Meet the Team</LinkButton>
            </nav>
          </div>
        </div>
      </Section>

      {/* Our Story */}
      <Section>
        <div id="story" className="container">
          <div className="section-title">
            <div className="eyebrow">Our Story</div>
            <h2 className="h2 title">Rooted in community, built for quality</h2>
            <p className="lead" style={{ marginTop: "0.5rem" }}>
              From a small kitchen project to a growing agri‑processing brand, our journey is powered by farmers, family,
              and a love for good food.
            </p>
          </div>
          <div className="max-w-prose">
            <p>
              We partner with smallholder farmers to source seasonal fruits and vegetables, then process them using
              high standards and zero preservatives. Our mission is to reduce post‑harvest losses while creating
              high‑quality, shelf‑stable products.
            </p>
            <p>
              Today, Mami Foods serves retail stores, hotels, and resellers with consistent quality and delightful
              flavors, while expanding farmer income opportunities.
            </p>
          </div>
        </div>
      </Section>

      {/* Our Farmers */}
      <Section>
        <div id="farmers" className="container">
          <div className="section-title">
            <div className="eyebrow">Our Farmers</div>
            <h2 className="h2 title">Partnering across Malawi</h2>
            <p className="lead" style={{ marginTop: "0.5rem" }}>
              We work directly with smallholder farmers for fair engagement, quality sourcing, and reliable offtake.
            </p>
          </div>

          <div className="grid grid-2">
            <Card className="card-pad">
              <h4 className="h4" style={{ margin: 0 }}>Sourcing & Training</h4>
              <p className="muted" style={{ marginTop: ".25rem" }}>
                We provide guidance on harvesting, handling, and grading to reduce post‑harvest losses and improve
                household incomes.
              </p>
            </Card>

            <Card className="card-pad">
              <h4 className="h4" style={{ margin: 0 }}>Fair & Predictable Offtake</h4>
              <p className="muted" style={{ marginTop: ".25rem" }}>
                Transparent pricing and scheduled collections help farmers plan production and cashflow.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section>
        <div id="team" className="container">
          <div className="section-title">
            <div className="eyebrow">Team</div>
            <h2 className="h2 title">Meet the people behind Mami Foods</h2>
          </div>

          <div className="grid grid-2">
            <Card>
              <img
                src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop"
                alt=""
                style={{ width: "100%", height: 220, objectFit: "cover" }}
              />
              <div className="card-pad">
                <h3 className="h3" style={{ margin: 0 }}>Ekari Trigu</h3>
                <p className="muted" style={{ marginTop: ".25rem" }}>CEO & Founder</p>
                <p className="muted" style={{ marginTop: ".5rem" }}>
                  Leads strategy, partnerships, and quality across our product lines.
                </p>
              </div>
            </Card>

            <Card>
              <img
                src="https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?q=80&w=1200&auto=format&fit=crop"
                alt=""
                style={{ width: "100%", height: 220, objectFit: "cover" }}
              />
              <div className="card-pad">
                <h3 className="h3" style={{ margin: 0 }}>Elapo Trigu</h3>
                <p className="muted" style={{ marginTop: ".25rem" }}>Product Innovation & IT</p>
                <p className="muted" style={{ marginTop: ".5rem" }}>
                  Builds new product ideas and our digital stack for operations and sales.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section tight>
        <div className="container">
          <Card className="center">
            <div className="card-pad">
              <h3 className="h3" style={{ margin: 0 }}>Want to stock Mami Foods?</h3>
              <p className="lead" style={{ marginTop: ".5rem" }}>
                Reach out for wholesale pricing, custom labels, and regular deliveries.
              </p>
              <div style={{ marginTop: "1rem", display: "inline-flex", gap: ".75rem", flexWrap: "wrap" }}>
                <LinkButton href="#contact" variant="primary">Get a Quote</LinkButton>
                <LinkButton href="#contact" variant="outline">WhatsApp Us</LinkButton>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <div id="contact" className="container">
          <div className="section-title">
            <div className="eyebrow">Contact</div>
            <h2 className="h2 title">Let’s talk</h2>
          </div>

          <div className="grid grid-2">
            <Card>
              <div className="card-pad">
                <form onSubmit={(e)=> e.preventDefault()}>
                  <div>
                    <label className="label" htmlFor="name">Name</label>
                    <input className="input" id="name" name="name" placeholder="Your name" required />
                  </div>
                  <div style={{ height: "0.75rem" }} />
                  <div>
                    <label className="label" htmlFor="email">Email</label>
                    <input className="input" id="email" type="email" name="email" placeholder="you@example.com" required />
                  </div>
                  <div style={{ height: "0.75rem" }} />
                  <div>
                    <label className="label" htmlFor="msg">Message</label>
                    <textarea className="textarea" id="msg" name="message" rows={4} placeholder="How can we help?" />
                  </div>
                  <div style={{ height: "1rem" }} />
                  <Button type="submit" variant="primary">Send message</Button>
                </form>
              </div>
            </Card>

            <Card className="card-pad">
              <h4 className="h4" style={{ marginTop: 0 }}>Contact details</h4>
              <p className="muted">Mami Foods, Blantyre, Malawi</p>
              <p className="muted">Email: hello@mamifoods.mw</p>
              <p className="muted">Phone: +265 999 000 000</p>
            </Card>
          </div>
        </div>
      </Section>
    </main>
  );
}
