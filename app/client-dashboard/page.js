export default function ClientProfilePage() {
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
            <div className="badge">Client Profile</div>
            <h1>Account and business profile</h1>
            <p className="muted">Built from your spreadsheet structure: client profile and core account details.</p>
          </div>
        </div>

        <div className="grid-2">
          <div className="panel">
            <h3>Business Details</h3>
            <p><strong>Restaurant:</strong> Demo Restaurant</p>
            <p><strong>Category:</strong> Restaurant / Bakery / Wings Concept</p>
            <p><strong>Primary Goal:</strong> More traffic and stronger online presence</p>
            <p><strong>Target Location:</strong> San Antonio, Texas</p>
          </div>
          <div className="panel">
            <h3>Account Details</h3>
            <p><strong>Plan:</strong> 12-Month Complete Online Presence</p>
            <p><strong>Status:</strong> Active</p>
            <p><strong>Start Date:</strong> May 1, 2026</p>
            <p><strong>Renewal:</strong> April 30, 2027</p>
          </div>
          <div className="panel">
            <h3>Main Contact</h3>
            <p><strong>Name:</strong> Owner / Manager Name</p>
            <p><strong>Email:</strong> client@email.com</p>
            <p><strong>Phone:</strong> (555) 555-5555</p>
          </div>
          <div className="panel">
            <h3>Notes</h3>
            <p>Use this section later for brand voice, preferred promotions, no-go topics, and approval preferences.</p>
          </div>
        </div>
      </section>
    </main>
  );
}