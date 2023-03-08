import type { DocumentData } from 'firebase/firestore';

export interface NewPostDataType extends DocumentData {
  content: string;
  title: string;
}

export interface PostDataType extends NewPostDataType {
  id: string;
}
