import React, { useState } from "react";

const DonationForm = () => {
  const [amount, setAmount] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for donating $${amount}!`);
    setAmount("");
  };

  return (
    <div className="card p-3 shadow-sm">
      <h5 className="mb-3">Donate Now</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="form-control mb-3"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-primary w-100">Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;
