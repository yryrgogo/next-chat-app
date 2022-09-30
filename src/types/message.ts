import { Timestamp, WithId } from "~/lib/firebase";

type MessageDocumentData = {
  createdAt: Timestamp;
  content: string;
  senderId: string;
};

type Message = WithId<MessageDocumentData>;

export type { MessageDocumentData, Message };
