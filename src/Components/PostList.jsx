import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-provider";

export default function PostList() {
  const {postList} = useContext(PostListContext);
  return <div className="d-flex flex-wrap justify-content-evenly">
    {postList.map(post => <Post key={post.id} post={post}/>)}
      </div>
}
