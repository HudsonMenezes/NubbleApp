export interface PostComment {
  id: number; // 110,
  message: string; // "Cursim tersus cumque vaco bibo demoror terra.",
  createdAt: string; // "2025-07-05T16:20:57.000-03:00",
  author: {
    id: number; // 7,
    profileUrl: string;
    name: string;
    userName: string;
  };
}

export interface PostCommentAPI {
  id: number; // 110,
  message: string; // "Cursim tersus cumque vaco bibo demoror terra.",
  user_id: number; //7,
  post_id: number; //1,
  created_at: string; //"2025-07-05T16:20:57.000-03:00",
  updated_at: string; //"2025-07-08T09:25:52.234-03:00",
  user: {
    id: number; //7,
    first_name: string; //"Mateus",
    last_name: string; //"de Souza",
    username: string; //"mateussouza",
    email: string; //"msouza@coffstack.com",
    profile_url: string; //"https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/8-mateus.png",
    is_online: boolean; //false,
    full_name: string; //"Mateus de Souza"
  };
  post: {
    id: number; //1,
    text: string; //"Bom dia!",
    user_id: number; //1,
    image_url: string; //"https://nubble-development.s3.sa-east-1.amazonaws.com/backend-integration/post1.jpg",
    is_fixed: boolean; //false,
    is_activated: boolean; //true,
    created_at: string; // "2025-07-08T09:25:32.907-03:00",
    updated_at: string; // "2025-07-08T09:25:32.912-03:00",
    status: string; //"published",
    meta: {};
  };
  meta: {};
}
