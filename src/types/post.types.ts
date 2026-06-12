export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// post ekleme alanı için
export type NewPost = Omit<Post, "id">;
