import React from "react";
import PostsGrid from "../../components/posts/grid/postsGrid.component";
import { Post } from "../../common/interfaces/post.interface";

import "./home.page.css";
import { useGetPosts } from "../../hooks/posts/useGetPosts";

const Home: React.FC = () => {
  const posts: Post[] | undefined = useGetPosts();

  return (
    <div className="home">
      <PostsGrid posts={posts || []} />
    </div>
  );
};

export default Home;
