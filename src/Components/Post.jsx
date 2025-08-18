import { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { PostListContext } from "../store/post-list-provider";

export default function Post({ post }) {
  const {deletePost} = useContext(PostListContext);
  return (
    <div className="card my-3 mx-4" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>{deletePost(post.id)}}>
            {<MdDeleteForever />}
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map(ele => <span key={ele} className="badge text-bg-info m-1">ele</span>)}
        
        <div className="alert alert-success" role="alert">
          This Post is Reacted by {post.reactions.likes+post.reactions.dislikes} People Liked By {post.reactions.likes} and disliked by {post.reactions.dislikes}
        </div>
      </div>
    </div>
  );
}
