export interface RouteParams {
  opinionId: number;
}

export interface Upvotes {
  opinion_id: number;
  user_id: string;
}

export interface Opinion {
  id: number;
  title: string;
  content: string;
  upvotes: Upvotes[];
}
