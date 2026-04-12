export default function ApprovalsRequestsPage() {
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
            <div className="badge">Approvals & Requests</div>
            <h1>Client approvals and open requests</h1>
            <p className="muted">Built around your approvals and requests tracking tab.</p>
          </div>
        </div>

        <div className="table-card">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Request</th>
                  <th>Priority</th>
                  <th>Status</th>
                  <th>Due Date</th>
                  <th>Owner</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Update Mother’s Day reel caption</td>
                  <td><span className="status-pill status-yellow">Medium</span></td>
                  <td><span className="status-pill status-blue">In Progress</span></td>
                  <td>May 06</td>
                  <td>Operator 1</td>
                </tr>
                <tr>
                  <td>Approve weekend combo graphic</td>
                  <td><span className="status-pill status-red">High</span></td>
                  <td><span className="status-pill status-yellow">Pending Client</span></td>
                  <td>May 05</td>
                  <td>Client</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}
