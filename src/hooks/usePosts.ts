import { useQuery } from "@tanstack/react-query";
import { fetchPosts } from "../api/postAPI";

// get method
export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};
