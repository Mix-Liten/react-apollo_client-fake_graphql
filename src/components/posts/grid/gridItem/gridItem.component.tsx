import React from "react";
import { Post } from "../../../../common/interfaces/post.interface";

import "./gridItem.component.css";

interface Props {
  post: Post;
}

const PostsGridItem: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <p>{post.body}</p>
    </div>
  );
};

export default PostsGridItem;
