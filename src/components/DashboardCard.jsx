export default function DashboardCard({ title, value, caption }) {
  return (
    <article className="metric-card">
      <p className="metric-label">{title}</p>
      <p className="metric-value">{value}</p>
      {caption ? <p className="metric-caption">{caption}</p> : null}
    </article>
  );
}
