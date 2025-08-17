import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-provider";

export default function CreatePost() {

    const {addPost} = useContext(PostListContext);
    const UserId = useRef();
    const PostTitle = useRef();
    const PostBody = useRef();
    const PostTags = useRef();
    const PostReactions = useRef();

    const handleOnSubmit = (event) => {
      event.preventDefault();
      const postDetails = {
        UserId : UserId.current.value,
        PostTitle : PostTitle.current.value,
        PostBody : PostBody.current.value,
        PostTags : PostTags.current.value.trim().split(" "),
        PostReactions : PostReactions.current.value,
      }
      addPost(postDetails);
    }
    
  return (
    <form className="p-5" onSubmit={handleOnSubmit}>
      <div className="mb-3">
        <label htmlFor="UserID" className="form-label">
          Enter Your UserID
        </label>
        <input
          type="text"
          className="form-control"
          id="UserID"
          placeholder="Enter Your User Id Here "
          ref={UserId}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter Your Title
        </label>
        <input
          type="text"
          className="form-control"
          id="UserID"
          placeholder="How are you feeling today ...!"
          ref={PostTitle}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows="4"
          type="text"
          className="form-control"
          id="body"
          placeholder="Tell us more about the post ...!"
          ref={PostBody}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Reactions
        </label>
        <input
          type="number"
          className="form-control"
          id="reactions"
          placeholder="How many peoples are reacted on this Post"
          ref={PostReactions}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">
          Tags
        </label>
        <input
          type="text"
          className="form-control"
          id="tag"
          placeholder="Enter Your tage saperated by the space"
          ref={PostTags}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
}
