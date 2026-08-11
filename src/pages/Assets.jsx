import AssetCard from '../components/AssetCard'

export default function Assets() {
  const assets = [
    { id: 1, name: 'Engine 5', status: 'Available', details: 'Location: Station 3' },
    { id: 2, name: 'Ladder 2', status: 'In Service', details: 'Maintenance due' },
    { id: 3, name: 'Rescue 1', status: 'Inspection', details: 'Safety check scheduled' },
  ]

  return (
    <main>
      <section className="asset-grid">
        {assets.map((asset) => (
          <AssetCard key={asset.id} name={asset.name} status={asset.status} details={asset.details} />
        ))}
      </section>
    </main>
  )
}
