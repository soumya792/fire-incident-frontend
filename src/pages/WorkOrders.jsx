export default function WorkOrders() {
  const orders = [
    { id: 201, title: 'Service Engine 5', status: 'Open', due: 'Today' },
    { id: 202, title: 'Inspect Ladder 2', status: 'Assigned', due: 'Tomorrow' },
    { id: 203, title: 'Calibrate Radio Systems', status: 'Pending', due: 'Sep 30' },
  ]

  return (
    <main>
      <section className="order-grid">
        {orders.map((order) => (
          <article key={order.id} className="work-card">
            <p className="metric-label">Work order</p>
            <strong>{order.title}</strong>
            <p className="order-copy">Due: {order.due}</p>
            <div className="work-status">
              <span>{order.status}</span>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
