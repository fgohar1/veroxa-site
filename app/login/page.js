export default function LoginPage() {
  return (
    <main className="login-wrap">
      <div className="login-card">
        <div className="badge">Portal Login</div>
        <h2>Choose your Veroxa access</h2>
        <p>This is a premium visual login gateway. It is ready for real authentication later.</p>

        <div className="form-group">
          <label>Access Type</label>
          <select defaultValue="client">
            <option value="client">Client</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input placeholder="name@example.com" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="••••••••" />
        </div>

        <div className="button-row">
          <a className="primary-btn" href="/client-dashboard">Client Demo</a>
          <a className="secondary-btn" href="/employee-dashboard">Employee Demo</a>
          <a className="secondary-btn" href="/admin-dashboard">Admin Demo</a>
        </div>
      </div>
    </main>
  );
}
