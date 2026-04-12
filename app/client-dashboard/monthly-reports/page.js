export default function MonthlyReportsPage() {
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
            <div className="badge">Monthly Reports</div>
            <h1>Monthly performance report</h1>
            <p className="muted">Growth snapshot, content performance, Google impact, reviews, insights, and next month plan.</p>
          </div>
          <a className="small-btn" href="#">Download PDF</a>
        </div>

        <div className="metrics">
          <div className="metric"><div className="metric-value">+420</div><p>Follower growth</p></div>
          <div className="metric"><div className="metric-value">18.4K</div><p>Reach</p></div>
          <div className="metric"><div className="metric-value">6.8%</div><p>Engagement rate</p></div>
          <div className="metric"><div className="metric-value">+23</div><p>Reviews gained</p></div>
        </div>

        <div className="grid-2">
          <div className="panel"><h3>Growth Snapshot</h3><p>Show follower growth, reach, engagement, and main wins here.</p></div>
          <div className="panel"><h3>Content Performance</h3><p>Highlight top post, top reel, and what messaging worked best.</p></div>
          <div className="panel"><h3>Google Impact</h3><p>Track views, calls, directions, and review-related growth from Google Business activity.</p></div>
          <div className="panel"><h3>Next Month Plan</h3><p>List next month’s campaign direction, offers, and execution priorities.</p></div>
        </div>
      </section>
    </main>
  );
}
