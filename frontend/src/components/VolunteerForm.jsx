import React, { useState } from "react";

const VolunteerForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${name} for volunteering!`);
    setName(""); setEmail("");
  };

  return (
    <div className="card p-3 shadow-sm">
      <h5 className="mb-3">Join as Volunteer</h5>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success w-100">Join</button>
      </form>
    </div>
  );
};

export default VolunteerForm;
