export default function Timer() {
  return (
    <main>
      <section className="detail-card">
        <p className="metric-label">Field timer</p>
        <h2>Active dispatch</h2>
        <div className="detail-grid">
          <div>
            <p className="card-label">Current timer</p>
            <p>00:12:34</p>
          </div>
          <div>
            <p className="card-label">Active status</p>
            <p>On duty</p>
          </div>
        </div>
        <p className="card-copy">Track critical response time for active work orders and support crew coordination.</p>
      </section>
    </main>
  );
}
