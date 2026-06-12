import { useGetPosts } from "../hooks/usePosts";

export default function PostList() {
  const { data, isLoading, isError, error } = useGetPosts();

  if (isLoading) return <h2>Yükleniyor...</h2>;

  if (isError) return <h2>Bir hata oluştu: {error.message}</h2>;
  
  return (
    <div>
      <h1>Gönderiler</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
