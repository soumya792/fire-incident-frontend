import { useParams } from "react-router-dom";

export default function WorkOrderDetails() {
  const { id } = useParams();
  const order = {
    title: "Service Engine 5",
    assignedTo: "Crew Alpha",
    status: "Open",
    description: "Complete routine service and verify pump output pressures.",
    dueDate: "Today",
    location: "Station 3",
  };

  return (
    <main>
      <section className="detail-card">
        <p className="metric-label">Work order details</p>
        <h2>{order.title}</h2>
        <div className="detail-grid">
          <div>
            <p className="card-label">Order ID</p>
            <p>{id}</p>
          </div>
          <div>
            <p className="card-label">Assigned</p>
            <p>{order.assignedTo}</p>
          </div>
          <div>
            <p className="card-label">Due date</p>
            <p>{order.dueDate}</p>
          </div>
          <div>
            <p className="card-label">Location</p>
            <p>{order.location}</p>
          </div>
        </div>
        <p className="card-copy">{order.description}</p>
      </section>
    </main>
  );
}
