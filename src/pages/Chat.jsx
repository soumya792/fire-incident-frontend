export default function Chat() {
  const conversations = [
    { id: 1, name: 'Dispatch', message: 'Engine 5 en route to station.', time: '09:18' },
    { id: 2, name: 'Field Team', message: 'Confirming ladder inspection completed.', time: '09:12' },
  ]

  return (
    <main>
      <section className="chat-panel">
        <div className="chat-list">
          {conversations.map((item) => (
            <article key={item.id} className="chat-item">
              <strong>{item.name}</strong>
              <p className="chat-copy">{item.message}</p>
              <small>{item.time}</small>
            </article>
          ))}
        </div>
        <div className="chat-detail">
          <p className="metric-label">Active channel</p>
          <h2>Dispatch Center</h2>
          <p className="card-copy">Live updates and crew coordination for current incidents.</p>
        </div>
      </section>
    </main>
  )
}
