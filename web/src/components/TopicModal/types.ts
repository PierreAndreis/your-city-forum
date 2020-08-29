export interface FormData {
  title: string;
  content: string;
}

export interface TopicModalProps {
  closeModal(): void;
  newTopic(): void;
}
