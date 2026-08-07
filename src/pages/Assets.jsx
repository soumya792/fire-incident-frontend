import AssetCard from '../components/AssetCard'

export default function Assets() {
  const assets = [
    { id: 1, name: 'Engine 5', status: 'Available', details: 'Location: Station 3' },
    { id: 2, name: 'Ladder 2', status: 'In Service', details: 'Maintenance due' },
  ]

  return (
    <main style={{padding:24}}>
      <h1>Assets</h1>
      <div style={{display:'grid',gap:12}}>
        {assets.map(a => (
          <AssetCard key={a.id} name={a.name} status={a.status} details={a.details} />
        ))}
      </div>
    </main>
  )
}
