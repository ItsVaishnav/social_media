import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-provider";
import WelcomeMessage from "./WelcomeMessage";
import Loding from "./Loding";

export default function PostList() {
  const { postList , addInitialPosts} = useContext(PostListContext);
  const [fetching , setFetching] = useState(false);
  useEffect(()=>{
    setFetching(true)
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data)=> {
        addInitialPosts(data.posts);
        setFetching(false);
      });
  },[]);

  return (
    <div className="d-flex flex-wrap justify-content-evenly">
      {fetching && <Loding/>}
      {!fetching && postList.length === 0 ? (
        <WelcomeMessage/>
      ) : null}
      {!fetching && postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}
