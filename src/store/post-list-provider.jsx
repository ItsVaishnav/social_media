import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let UpdatedPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    UpdatedPostList = currentPostList.filter(
      (ele) => ele.id !== action.payload.deleteId
    );
  } else if (action.type === "ADD_POST") {
    UpdatedPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_POSTS") {
    UpdatedPostList = action.payload;
  }
  return UpdatedPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    []
  );

  const addPost = (postDetails) => {
    const action = {
      type: "ADD_POST",
      payload: {
        id: new Date(),
        title: postDetails.PostTitle,
        body: postDetails.PostBody,
        reactions: {
          likes : postDetails.PostReactions.likes,
          dislikes: postDetails.PostReactions.dislikes
        },
        tags: postDetails.PostTags,
        userId: postDetails.UserId,
      },
    };
    dispatchPostList(action);
  };

const addInitialPosts = (data) => {
    const action = {
      type: "ADD_POSTS",
      payload: data,
    };
    dispatchPostList(action);
    console.log(data);
  };


  const deletePost = (id) => {
    const action = {
      type: "DELETE_POST",
      payload: {
        deleteId: id,
      },
    };
    dispatchPostList(action);
  };
  return (
    <PostListContext.Provider value={{ postList, addPost, deletePost , addInitialPosts }}>
      {children}
    </PostListContext.Provider>
  );
};


export default PostListProvider;
