import { useState } from "react";
import InputField from "../components/InputField.jsx";
import Button from "../components/Button.jsx";
import "./../styles/layout.css";

function BuyerRequest() {
  const [zip, setZip] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buyer Request Submitted");
  };

  return (
    <div className="page">
      <h2>Start Your Vehicle Request</h2>

      <form className="form-box" onSubmit={handleSubmit}>
        <InputField
          label="ZIP Code"
          value={zip}
          onChange={(e) => setZip(e.target.value)}
          placeholder="Enter ZIP"
          required
        />

        <InputField
          label="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          placeholder="e.g. 2020"
          required
        />

        <InputField
          label="Make"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          placeholder="e.g. Toyota"
          required
        />

        <InputField
          label="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="e.g. Camry"
          required
        />

        <Button type="submit" label="Continue" />
      </form>
    </div>
  );
}

export default BuyerRequest;
