import React from "react";
import BlogList from "../components/BlogList";
import StoryList from "../components/StoryList";
import PodcastPlayer from "../components/PodcastPlayer";

const Latest = () => {
  return (
    <div className="container px-0">
      <h2 className="text-center my-4">Latest Updates</h2>

      <section className="py-3">
        <StoryList />
      </section>

      <section className="py-1">
        <h2 className="mt-5 mb-3">Blogs</h2>
        <BlogList />
      </section>

      <section className="py-1">
        <h2 className="mt-5 mb-3">Podcasts</h2>
        <PodcastPlayer />
      </section>
    </div>
  );
};

export default Latest;
