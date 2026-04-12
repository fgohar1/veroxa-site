export default function ContentCalendarPage() {
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
            <div className="badge">Content Calendar</div>
            <h1>Planned content schedule</h1>
            <p className="muted">Structured to match your workbook’s content calendar logic.</p>
          </div>
        </div>

        <div className="table-card">
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Platform</th>
                  <th>Type</th>
                  <th>Theme</th>
                  <th>Status</th>
                  <th>Approved By</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>May 05</td>
                  <td>Instagram</td>
                  <td>Reel</td>
                  <td>Weekend Offer</td>
                  <td><span className="status-pill status-green">Approved</span></td>
                  <td>Owner</td>
                </tr>
                <tr>
                  <td>May 07</td>
                  <td>Facebook</td>
                  <td>Image Post</td>
                  <td>Signature Item</td>
                  <td><span className="status-pill status-yellow">Pending</span></td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>May 09</td>
                  <td>Google</td>
                  <td>Business Post</td>
                  <td>Lunch Special</td>
                  <td><span className="status-pill status-blue">Planned</span></td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
}