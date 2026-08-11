export default function AssetDetails() {
  const asset = {
    name: 'Engine 5',
    status: 'Available',
    nextInspection: '2026-09-12',
    location: 'Station 3',
    notes: 'Full pump test completed. No outstanding issues.',
  }

  return (
    <main>
      <section className="detail-card">
        <p className="metric-label">Asset details</p>
        <h2>{asset.name}</h2>
        <div className="detail-grid">
          <div>
            <p className="card-label">Status</p>
            <span className="status-pill status-safe">{asset.status}</span>
          </div>
          <div>
            <p className="card-label">Location</p>
            <p>{asset.location}</p>
          </div>
          <div>
            <p className="card-label">Next inspection</p>
            <p>{asset.nextInspection}</p>
          </div>
        </div>
        <p className="card-copy">{asset.notes}</p>
      </section>
    </main>
  )
}
