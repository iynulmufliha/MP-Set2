import React from "react";

const podcasts = [
  { title: "Crisis Response Insights", src: "/podcasts/podcast1.mp3" },
  { title: "Volunteer Stories", src: "/podcasts/podcast2.mp3" },
];

const PodcastPlayer = () => (
  <div>
    {podcasts.map((p, idx) => (
      <div key={idx} className="mb-3">
        <h6>{p.title}</h6>
        <audio controls src={p.src} className="w-100" />
      </div>
    ))}
  </div>
);

export default PodcastPlayer;
