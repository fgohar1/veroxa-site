import Link from 'next/link';
import SectionIntro from '@/components/SectionIntro';

export const metadata = { title: 'Services — Veroxa' };

export default function ServicesPage() {
  return (
    <section className="page-shell">
      <div className="container">
        <div className="eyebrow">Services</div>
        <h1 className="page-title">The Veroxa service stack is designed to make restaurants look stronger online and move with consistency.</h1>
        <p className="lead">Every service is tied back to a simple goal: a cleaner online presence that builds trust, improves visibility, and supports repeatable growth.</p>

        <div className="cards-3">
          <div className="card"><h3>Social media execution</h3><p>Content planning, creative direction, production management, approvals, and posting rhythm.</p></div>
          <div className="card"><h3>Google profile optimization</h3><p>Posting, listing updates, visibility improvement, review support, and ongoing maintenance.</p></div>
          <div className="card"><h3>Client reporting</h3><p>Weekly WhatsApp updates and monthly reporting that keeps owners clear on progress.</p></div>
        </div>

        <section>
          <SectionIntro
            kicker="Complete Online Presence"
            title="Your core operating system for restaurant visibility"
            text="This is the main Veroxa offer. It gives restaurant owners a structured online presence instead of random disconnected activity."
          />
          <div className="card">
            <ul className="clean">
              <li>Content planning and monthly direction</li>
              <li>Creative production management for posting consistency</li>
              <li>Google Business Profile optimization and updates</li>
              <li>Review and reputation support</li>
              <li>Weekly communication and monthly reporting</li>
            </ul>
          </div>
        </section>

        <section>
          <SectionIntro
            kicker="Paid Ads"
            title="An optional acceleration layer for restaurants ready to push harder"
            text="Ads are available as an add-on to the main service or as a standalone offer for businesses that only want campaign management."
          />
          <div className="cards-3">
            <div className="card"><h3>Ads add-on</h3><p>Integrated with Complete Online Presence for a stronger top-to-bottom growth stack.</p></div>
            <div className="card"><h3>Ads-only option</h3><p>For restaurants that want direct ad management without the full Veroxa system.</p></div>
            <div className="card"><h3>Campaign focus</h3><p>Designed to support offers, awareness, reach, and strategic customer acquisition.</p></div>
          </div>
        </section>

        <div className="band center">
          <h3>Need a custom fit?</h3>
          <p className="muted">We can help you decide whether your restaurant is best suited for Complete Online Presence, Ads Only, or the combined package.</p>
          <Link className="btn btn-primary" href="/contact">Talk to Veroxa</Link>
        </div>
      </div>
    </section>
  );
}
