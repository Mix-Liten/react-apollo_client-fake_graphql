import React from "react";
import { Post } from "../../../common/interfaces/post.interface";
import GridItem from "./gridItem/gridItem.component";

import "./postsGrid.component.css";

interface Props {
  posts: Post[];
}

const PostsGrid: React.FC<Props> = ({ posts }) => {
  return (
    <div className="posts-grid">
      {posts.map((post) => (
        <div key={post.id}>
          <GridItem post={post} />
        </div>
      ))}
    </div>
  );
};

export default PostsGrid;
