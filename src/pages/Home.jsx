import DashboardCard from '../components/DashboardCard'

export default function Home() {
  const metrics = [
    { title: 'Total Incidents', value: '12', caption: 'Last 24 hours' },
    { title: 'Units Dispatched', value: '06 Trucks', caption: 'Active response' },
    { title: 'Avg Response', value: '5.5 mins', caption: 'Field average' },
  ]

  return (
    <main>
      <section className="metric-grid">
        {metrics.map((metric) => (
          <DashboardCard key={metric.title} title={metric.title} value={metric.value} caption={metric.caption} />
        ))}
      </section>
    </main>
  )
}
