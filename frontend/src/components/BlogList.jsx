import React from "react";

const blogs = [
  { title: "Relief Efforts in Floods", date: "2025-10-01" },
  { title: "Volunteer Spotlight", date: "2025-09-28" },
  { title: "Emergency Response Tips", date: "2025-09-25" },
];

const BlogList = () => (
  <div className="list-group">
    {blogs.map((blog, idx) => (
      <div key={idx} className="list-group-item">
        <h5>{blog.title}</h5>
        <small className="text-muted">{blog.date}</small>
      </div>
    ))}
  </div>
);

export default BlogList;
