export default function EmployeeDashboard() {
  return (
    <main className="portal-shell">
      <aside className="sidebar">
        <div className="brand">VEROXA</div>
        <div className="sidebar-stack">
          <a className="sidebar-link" href="/employee-dashboard">Overview</a>
          <a className="sidebar-link" href="#">Assigned Clients</a>
          <a className="sidebar-link" href="#">Work Queue</a>
          <a className="sidebar-link" href="#">Approvals Tracker</a>
          <a className="sidebar-link" href="#">Reports Due</a>
          <a className="sidebar-link" href="#">Assets Pending</a>
          <a className="sidebar-link" href="/">Back to Website</a>
        </div>
      </aside>

      <section className="dashboard">
        <div className="dashboard-top">
          <div>
            <div className="badge">Employee Portal</div>
            <h1>Operations dashboard</h1>
            <p className="muted">Built around execution, deadlines, approvals, and client work.</p>
          </div>
          <a className="small-btn" href="#">Update Status</a>
        </div>

        <div className="metrics">
          <div className="metric"><div className="metric-value">8</div><p>Assigned clients</p></div>
          <div className="metric"><div className="metric-value">17</div><p>Open tasks</p></div>
          <div className="metric"><div className="metric-value">5</div><p>Pending approvals</p></div>
          <div className="metric"><div className="metric-value">2</div><p>Reports due this week</p></div>
        </div>

        <div className="grid-2">
          <div className="panel"><h3>Assigned Clients</h3><ul className="list"><li>Baklovah Bakery</li><li>Wing Concept Demo</li><li>Restaurant Alpha</li><li>Restaurant Bravo</li></ul></div>
          <div className="panel"><h3>Work Queue</h3><ul className="list"><li>Create captions for 2 accounts</li><li>Upload 3 reels for review</li><li>Prepare 1 monthly report draft</li><li>Schedule Google update</li></ul></div>
          <div className="panel"><h3>Approvals Tracker</h3><p>Track pending client approvals, what is blocked, and what can move forward.</p></div>
          <div className="panel"><h3>Assets Pending</h3><p>Track missing logins, shared drives, brand assets, and access bottlenecks here.</p></div>
        </div>
      </section>
    </main>
  );
}
