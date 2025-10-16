import React from "react";

const stories = [
  { name: "Ravi", story: "We survived the flood thanks to volunteers!" },
  { name: "Anita", story: "The crisis map helped us locate shelters fast." },
];

const StoryList = () => (
  <div className="list-group">
    {stories.map((s, idx) => (
      <div key={idx} className="list-group-item">
        <h6>{s.name}</h6>
        <p>{s.story}</p>
      </div>
    ))}
  </div>
);

export default StoryList;
