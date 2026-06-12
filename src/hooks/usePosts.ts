import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addPost, fetchPosts } from "../api/postAPI";
import type { NewPost } from "../types/post.types";

// get method
export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};

// post method
export const useAddPost = () => {
  const queryClient = useQueryClient(); // cache'i yönetmek için

  return useMutation({
    mutationFn: (newPost: NewPost) => addPost(newPost),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] }); // post eklendikten sonra oto güncelleme ve cache silme
    },
  });
};
