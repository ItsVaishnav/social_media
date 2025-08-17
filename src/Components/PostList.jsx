import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-provider";
import WelcomeMessage from "./WelcomeMessage";

export default function PostList() {
  const { postList , addInitialPosts} = useContext(PostListContext);
  const onGetDefaultPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data)=> addInitialPosts(data.posts));
  };
  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {postList.length === 0 ? (
        <WelcomeMessage onGetDefaultPosts={onGetDefaultPosts} />
      ) : null}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
