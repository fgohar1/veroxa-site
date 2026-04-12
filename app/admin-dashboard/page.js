export default function AdminDashboard() {
  return (
    <main className="portal-shell">
      <aside className="sidebar">
        <div className="brand">VEROXA</div>
        <div className="sidebar-stack">
          <a className="sidebar-link" href="/admin-dashboard">Overview</a>
          <a className="sidebar-link" href="#">Clients</a>
          <a className="sidebar-link" href="#">Employees</a>
          <a className="sidebar-link" href="#">Pipeline</a>
          <a className="sidebar-link" href="#">Approvals</a>
          <a className="sidebar-link" href="#">Reports</a>
          <a className="sidebar-link" href="#">Access Control</a>
          <a className="sidebar-link" href="/">Back to Website</a>
        </div>
      </aside>

      <section className="dashboard">
        <div className="dashboard-top">
          <div>
            <div className="badge">Admin Portal</div>
            <h1>Veroxa control room</h1>
            <p className="muted">A high-level system for client management, team management, and portal oversight.</p>
          </div>
          <a className="small-btn" href="#">Create New Client</a>
        </div>

        <div className="metrics">
          <div className="metric"><div className="metric-value">12</div><p>Total clients</p></div>
          <div className="metric"><div className="metric-value">3</div><p>Total employees</p></div>
          <div className="metric"><div className="metric-value">7</div><p>Pending approvals</p></div>
          <div className="metric"><div className="metric-value">4</div><p>Reports due</p></div>
        </div>

        <div className="grid-2">
          <div className="panel"><h3>Client Management</h3><p>Track package type, status, renewal timeline, and account health across all clients.</p></div>
          <div className="panel"><h3>Team Management</h3><p>Track employee workload, client assignments, and system capacity.</p></div>
          <div className="panel"><h3>Content Pipeline</h3><p>See what is planned, in progress, pending approval, approved, and posted.</p></div>
          <div className="panel"><h3>Access Control</h3><p>Track missing accounts, pending invites, shared assets, and operational blockers.</p></div>
        </div>
      </section>
    </main>
  );
}
