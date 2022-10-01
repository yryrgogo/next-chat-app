import {
  initializeTestEnvironment as _initializeTestEnvironment,
  RulesTestEnvironment,
} from "@firebase/rules-unit-testing";
import { readFileSync } from "fs";
import firebase from "firebase/compat/app";
import { getConverter, WithId } from "~/lib/firebase";

let testEnv: RulesTestEnvironment;

const initializeTestEnvironment = async () => {
  testEnv = await _initializeTestEnvironment({
    projectId: process.env.FIREBASE_PROJECT_ID,
    firestore: {
      rules: readFileSync("firestore.rules", "utf8"),
    },
  });
};

const getTestEnv = () => testEnv;

const setCollection = <T>(
  ref: firebase.firestore.CollectionReference,
  instances: WithId<T>[]
) =>
  Promise.all(
    instances.map((_) => ref.doc(_.id).set(getConverter<T>().toFirestore(_)))
  );

export { initializeTestEnvironment, getTestEnv, setCollection };
