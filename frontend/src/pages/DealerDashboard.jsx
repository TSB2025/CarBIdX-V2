import Button from "../components/Button.jsx";
import "./../styles/layout.css";

function DealerDashboard() {
  const sampleRequests = [
    { id: 1, year: 2020, make: "Honda", model: "Accord", zip: "94539" },
    { id: 2, year: 2021, make: "Toyota", model: "RAV4", zip: "94016" }
  ];

  return (
    <div className="page">
      <h2>Dealer Dashboard</h2>

      <div className="dashboard-list">
        {sampleRequests.map((req) => (
          <div key={req.id} className="dashboard-item">
            <p>
              {req.year} {req.make} {req.model}
            </p>
            <p>ZIP: {req.zip}</p>
            <Button label="Place Bid" onClick={() => console.log("Bid on:", req.id)} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default DealerDashboard;
