import DashboardCard from '../components/DashboardCard'

export default function Home() {
  return (
    <main style={{padding:24}}>
      <h1>Home</h1>
      <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:16}}>
        <DashboardCard title="Total Incidents" value="12" />
        <DashboardCard title="Units Dispatched" value="06 Trucks" />
        <DashboardCard title="Avg Response" value="5.5 mins" />
      </div>
    </main>
  )
}
