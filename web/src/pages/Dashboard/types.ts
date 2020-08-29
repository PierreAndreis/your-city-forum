export interface Opinion {
  id: number;
  title: string;
  upvotes_count: number;
}

export interface ApiResponse {
  opinions: Opinion[];
}

export interface FormData {
  filter: string;
}
