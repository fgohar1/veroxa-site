export default function ClientDashboard() {
  return (
    <main className="portal-shell">
      
<aside className="sidebar">
  <div className="brand">VEROXA</div>
  <div className="sidebar-stack">
    <a className="sidebar-link" href="/client-dashboard">Overview</a>
    <a className="sidebar-link" href="/client-dashboard/profile">Client Profile</a>
    <a className="sidebar-link" href="/client-dashboard/monthly-reports">Monthly Reports</a>
    <a className="sidebar-link" href="/client-dashboard/weekly-updates">Weekly Updates</a>
    <a className="sidebar-link" href="/client-dashboard/content-calendar">Content Calendar</a>
    <a className="sidebar-link" href="/client-dashboard/approvals-requests">Approvals & Requests</a>
    <a className="sidebar-link" href="/client-dashboard/assets-access">Assets & Access</a>
    <a className="sidebar-link" href="/">Back to Website</a>
  </div>
</aside>

      <section className="dashboard">
        <div className="dashboard-top">
          <div>
            <div className="badge">Client Portal</div>
            <h1>Restaurant growth dashboard</h1>
            <p className="muted">A premium client-facing overview of the Veroxa system.</p>
          </div>
          <a className="small-btn" href="/client-dashboard/monthly-reports">Open Monthly Report</a>
        </div>

        <div className="metrics">
          <div className="metric"><div className="metric-value">24</div><p>Posts planned this month</p></div>
          <div className="metric"><div className="metric-value">8</div><p>Reels scheduled</p></div>
          <div className="metric"><div className="metric-value">3</div><p>Approvals pending</p></div>
          <div className="metric"><div className="metric-value">12</div><p>Review actions completed</p></div>
        </div>

        <div className="grid-2">
          <div className="panel">
            <div className="kicker">Portal Home</div>
            <h3>What this portal includes</h3>
            <ul className="list">
              <li>Client profile and account details</li>
              <li>Monthly reports and weekly updates</li>
              <li>Content calendar and approval flow</li>
              <li>Assets, account access, and support visibility</li>
            </ul>
          </div>
          <div className="panel">
            <div className="kicker">Current Plan</div>
            <h3>Complete Online Presence</h3>
            <p>12-month plan — $1000/month</p>
            <p>Goal: stronger online presence, more traffic, more trust, more repeatability.</p>
          </div>
          <div className="panel">
            <div className="kicker">Quick Links</div>
            <p><a href="/client-dashboard/profile">Client Profile</a></p>
            <p><a href="/client-dashboard/content-calendar">Content Calendar</a></p>
            <p><a href="/client-dashboard/approvals-requests">Approvals & Requests</a></p>
          </div>
          <div className="panel">
            <div className="kicker">Recent Activity</div>
            <p>3 posts published this week, 1 Google Business update completed, 2 client approvals received.</p>
          </div>
        </div>
      </section>
    </main>
  );
}