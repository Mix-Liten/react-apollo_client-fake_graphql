import React from "react";
import PostsGrid from "../../components/posts/grid/postsGrid.component";
import { Post } from "../../common/interfaces/post.interface";

import "./home.page.css";

const Home: React.FC = () => {
  const posts: Post[] = [
    {
      id: "1",
      title: "title",
      body: "body",
    },
  ];

  return (
    <div className="home">
      <PostsGrid posts={posts || []} />
    </div>
  );
};

export default Home;
