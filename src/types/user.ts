import { Timestamp, WithId } from "~/lib/firebase";

type UserDocumentData = {
  createdAt: Timestamp;
  name: string | null;
  photoUrl: string | null;
};

type User = WithId<UserDocumentData>;

export type { User, UserDocumentData };
