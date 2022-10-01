import { Timestamp, WithId } from "~/lib/firebase";

type MessageDocumentData = {
  createdAt: Timestamp;
  content: string;
  senderId: string;
  imagePath: string | null;
};

type Message = WithId<MessageDocumentData>;

export type { MessageDocumentData, Message };
