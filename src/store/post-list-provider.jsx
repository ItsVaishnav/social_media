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
  }
  return UpdatedPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST
  );

  const addPost = (postDetails) => {
    const action = {
      type: "ADD_POST",
      payload: {
        id: new Date(),
        title: postDetails.PostTitle,
        body: postDetails.PostBody,
        reactions: postDetails.PostReactions,
        tags: postDetails.PostTags,
        userId: postDetails.UserId,
      },
    };
    dispatchPostList(action);
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
    <PostListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST = [
  {
    id: "1",
    title: "Going To Satara",
    body: "I am going to satara on the vecation of ganpati bappa",
    reactions: 6,
    tags: ["bappa", "satara", "Home Town"],
    userId: "user-31",
  },
  {
    id: "2",
    title: "Watching Movie",
    body: "Thi smovie is so amazing and it has mind blowing acton seens",
    reactions: 20,
    tags: ["movie", "Action", "Chill", "Movie_Time"],
    userId: "user-20",
  },
];

export default PostListProvider;
