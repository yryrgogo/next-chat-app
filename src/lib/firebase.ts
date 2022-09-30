import { initializeApp } from "firebase/app";
import {
  Timestamp,
  DocumentData,
  QueryDocumentSnapshot,
  SnapshotOptions,
  FirestoreDataConverter,
  PartialWithFieldValue,
} from "firebase/firestore";
import { omit } from "lodash-es";

type WithId<T> = T & { id: string };

const getConverter = <T>(): FirestoreDataConverter<WithId<T>> => ({
  toFirestore: (data: PartialWithFieldValue<WithId<T>>): DocumentData => {
    return omit(data, ["id"]);
  },
  // FIXME: WithId がないと型エラーになるが、これではおかしい
  fromFirestore: (
    snapshot: QueryDocumentSnapshot<WithId<T>>,
    options: SnapshotOptions
  ): WithId<T> => {
    return { ...snapshot.data(options), id: snapshot.id };
  },
});

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
initializeApp(firebaseConfig);

export type { Timestamp, WithId };
export { getConverter };
