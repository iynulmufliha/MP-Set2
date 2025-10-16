import React, { useState, useEffect } from "react";

const ImpactWall = () => {
  const [totalDonations, setTotalDonations] = useState(0);
  const [totalVolunteers, setTotalVolunteers] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);

  // Fetch totals on component mount
  useEffect(() => {
    fetchTotals();
  }, []);

  const fetchTotals = async () => {
    try {
      // Donations
      const donationRes = await fetch("http://localhost:5000/api/donations");
      const donations = await donationRes.json();
      const donationSum = donations.reduce((acc, d) => acc + Number(d.amount), 0);
      setTotalDonations(donationSum);

      // Volunteers
      const volunteerRes = await fetch("http://localhost:5000/api/volunteers");
      const volunteers = await volunteerRes.json();
      setTotalVolunteers(volunteers.length);

      // Points
      const pointsRes = await fetch("http://localhost:5000/api/points");
      const points = await pointsRes.json();
      const pointsSum = points.reduce((acc, p) => acc + Number(p.points), 0);
      setTotalPoints(pointsSum);
    } catch (err) {
      console.log(err);
    }
  }};

  export default ImpactWall;