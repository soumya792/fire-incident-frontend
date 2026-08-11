export default function Settings() {
  const settings = [
    { label: 'Notifications', value: 'Enabled' },
    { label: 'Two-factor authentication', value: 'Enabled' },
    { label: 'Auto-update maps', value: 'Enabled' },
  ]

  return (
    <main>
      <section className="settings-card">
        <p className="metric-label">Settings</p>
        {settings.map((setting) => (
          <div key={setting.label} className="settings-row">
            <div>
              <p className="settings-label">{setting.label}</p>
              <p className="settings-copy">{setting.value}</p>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
