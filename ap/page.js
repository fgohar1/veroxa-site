export default function Home() {
  return (
    <main>
      <div className="nav">
        <div className="brand">VEROXA</div>
        <div className="nav-links">
          <a href="#system">System</a>
          <a href="#pricing">Pricing</a>
          <a href="#portal">Portal</a>
          <a href="/login">Login</a>
        </div>
      </div>

      <section className="hero">
        <div className="container">
          <div className="badge">Restaurant Growth Operating System</div>
          <h1>One premium platform for clients, employees, and admins.</h1>
          <p className="hero-text">
            Built from your real Veroxa portal workflow: client profile, monthly reports,
            weekly updates, content calendar, approvals, requests, and assets access.
          </p>
          <div className="button-row">
            <a className="primary-btn" href="/login">Open Portal Login</a>
            <a className="secondary-btn" href="#portal">See Portal Structure</a>
          </div>

          <div className="grid-3">
            <div className="card"><h3>Client Portal</h3><p>Restaurant owners see reports, weekly updates, content approvals, and account access in one place.</p></div>
            <div className="card"><h3>Employee Portal</h3><p>Your team sees assigned clients, workflows, deadlines, approvals, and reporting tasks.</p></div>
            <div className="card"><h3>Admin Portal</h3><p>You manage all clients, packages, tasks, approvals, reports, and assets from one control room.</p></div>
          </div>
        </div>
      </section>

      <section id="system" className="section">
        <div className="container">
          <div className="badge">Built From Your Real Workflow</div>
          <h2>Not just a website. A proper Veroxa operating system.</h2>
          <p className="section-lead">
            This structure mirrors your Excel-based portal system and turns it into a cleaner online experience.
          </p>
          <div className="grid-4">
            <div className="card"><h3>Client Profile</h3><p>Main client details, package, goals, contacts, and account status.</p></div>
            <div className="card"><h3>Monthly Reports</h3><p>Growth snapshot, content performance, reviews, Google impact, and next plan.</p></div>
            <div className="card"><h3>Weekly Updates</h3><p>What was posted, what performed best, Google activity, and next steps.</p></div>
            <div className="card"><h3>Content & Access</h3><p>Calendar, approvals, requests, and all platform/account access in one flow.</p></div>
          </div>
        </div>
      </section>

      <section id="portal" className="section">
        <div className="container">
          <div className="badge">Portal Structure</div>
          <h2>Portal pages included in this build</h2>
          <div className="grid-3">
            <div className="panel">
              <h3>Client Pages</h3>
              <ul className="list">
                <li>Overview</li>
                <li>Client Profile</li>
                <li>Monthly Reports</li>
                <li>Weekly Updates</li>
                <li>Content Calendar</li>
                <li>Approvals & Requests</li>
                <li>Assets & Access</li>
              </ul>
            </div>
            <div className="panel">
              <h3>Employee Dashboard</h3>
              <ul className="list">
                <li>Assigned clients</li>
                <li>Work queue</li>
                <li>Reporting tracker</li>
                <li>Approvals tracker</li>
                <li>Assets pending</li>
              </ul>
            </div>
            <div className="panel">
              <h3>Admin Dashboard</h3>
              <ul className="list">
                <li>Business overview</li>
                <li>Client management</li>
                <li>Team management</li>
                <li>Pipeline control</li>
                <li>Bottlenecks and access status</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section">
        <div className="container">
          <div className="panel">
            <div className="badge">Pricing</div>
            <h2>Simple pricing. Premium execution.</h2>
            <div className="grid-4">
              <div className="card"><h3>3 Months</h3><p>$1200/month</p><p>First month: $800</p></div>
              <div className="card"><h3>6 Months</h3><p>$1100/month</p><p>First month: $600</p></div>
              <div className="card"><h3>12 Months</h3><p>$1000/month</p><p>First month: $400</p></div>
              <div className="card"><h3>No Contract</h3><p>$1500/month</p><p>Ads add-on available</p></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
