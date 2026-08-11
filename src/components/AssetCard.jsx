export default function AssetCard({ name, status, details }) {
  return (
    <article className="asset-card">
      <div>
        <p className="asset-name">{name}</p>
        <p className="asset-details">{details}</p>
      </div>
      <span className={`status-pill ${status === "In Service" ? "status-warning" : "status-safe"}`}>
        {status}
      </span>
    </article>
  );
}
