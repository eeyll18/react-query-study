import type { Post } from "../types/post.types";

export const fetchPosts = async (): Promise<Post[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Error fetching posts");
  }
  return response.json();
};
