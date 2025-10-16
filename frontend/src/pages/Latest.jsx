import React from "react";
import BlogList from "../components/BlogList";
import StoryList from "../components/StoryList";
import PodcastPlayer from "../components/PodcastPlayer";

const Latest = () => {
  return (
    <div>
      <h2 className="mb-4 text-center">Latest Updates</h2>
      <section className="mb-5">
        <h4>Blogs</h4>
        <BlogList />
      </section>
      <section className="mb-5">
        <h4>Survivor Stories</h4>
        <StoryList />
      </section>
      <section>
        <h4>Podcasts</h4>
        <PodcastPlayer />
      </section>
    </div>
  );
};

export default Latest;
