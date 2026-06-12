import type { NewPost, Post } from "../types/post.types";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Error fetching posts");
  }
  return response.json();
};

export const addPost = async (newPost: NewPost): Promise<Post> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  });
  if (!response.ok) {
    throw new Error("Error adding post");
  }

  return response.json();
};
