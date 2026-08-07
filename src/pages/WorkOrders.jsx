export default function WorkOrders() {
  const orders = [
    { id: 201, title: 'Service Engine 5', status: 'Open' },
    { id: 202, title: 'Inspect Ladder 2', status: 'Assigned' },
  ]

  return (
    <main style={{padding:24}}>
      <h1>Work Orders</h1>
      <ul>
        {orders.map(o => (
          <li key={o.id}>{o.title} — {o.status}</li>
        ))}
      </ul>
    </main>
  )
}
