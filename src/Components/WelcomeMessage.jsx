export default function WelcomeMessage({ onGetDefaultPosts }) {
  return (
    <div className="m-5 p-5">
      <center>
        <h3>The List is Empty Post Somthing to Display Here</h3>
        <button
          type="button"
          className="btn btn-primary"
          onClick={onGetDefaultPosts}>
          Get Deafult Posts
        </button>
      </center>
    </div>
  );
}
