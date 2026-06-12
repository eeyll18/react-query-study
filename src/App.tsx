import "./App.css";
import AddPost from "./components/AddPost";
import PostList from "./components/PostList";

function App() {
  return (
    <div>
      <AddPost />
      <hr />
      <PostList />
    </div>
  );
}

export default App;
