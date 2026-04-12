export default function WeeklyUpdatesPage() {
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
            <div className="badge">Weekly Updates</div>
            <h1>Weekly client update feed</h1>
            <p className="muted">A clean client-facing version of the weekly update system.</p>
          </div>
        </div>

        <div className="grid-2">
          <div className="panel"><h3>Content Posted</h3><p>3 feed posts, 2 reels, 4 stories posted this week.</p></div>
          <div className="panel"><h3>Best Performing Post</h3><p>Weekend offer post drove the strongest reach and engagement.</p></div>
          <div className="panel"><h3>Google Activity</h3><p>1 Google Business post published, 4 new reviews received, 2 review replies completed.</p></div>
          <div className="panel"><h3>Next Week Plan</h3><p>Focus on lunch offer content, one chef-led reel, and another Google update.</p></div>
        </div>
      </section>
    </main>
  );
}
