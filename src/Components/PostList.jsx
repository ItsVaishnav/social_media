import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-provider";
import WelcomeMessage from "./WelcomeMessage";
import Loding from "./Loding";  

export default function PostList() {

  const { postList , addInitialPosts} = useContext(PostListContext);
  const [fetching , setFetching] = useState(false);
  useEffect(()=>{
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true)
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data)=> {
        addInitialPosts(data.posts);
        setFetching(false);
      });

      return () => {
        console.log("Cleaning the posts ..!");
        controller.abort();
      }
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
