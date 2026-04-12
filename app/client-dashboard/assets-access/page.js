export default function AssetsAccessPage() {
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
            <div className="badge">Assets & Access</div>
            <h1>Accounts, assets, and access tracker</h1>
            <p className="muted">Built from your assets and access section so both sides know what is connected and what is pending.</p>
          </div>
        </div>

        <div className="table-card">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Platform</th>
                  <th>Access Status</th>
                  <th>Owner</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Instagram</td>
                  <td><span className="status-pill status-green">Connected</span></td>
                  <td>Client</td>
                  <td>Main account access received</td>
                </tr>
                <tr>
                  <td>Google Business Profile</td>
                  <td><span className="status-pill status-yellow">Pending</span></td>
                  <td>Client</td>
                  <td>Ownership invite waiting</td>
                </tr>
                <tr>
                  <td>Canva</td>
                  <td><span className="status-pill status-blue">Shared</span></td>
                  <td>Veroxa</td>
                  <td>Brand kit and templates added</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
