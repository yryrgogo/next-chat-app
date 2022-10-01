import { initializeTestEnvironment, getTestEnv } from "../../utils";
import { messagesTest } from "./collections/message";
import { usersTest } from "./collections/user";

process.env.FIRESTORE_EMULATOR_HOST = "localhost:8080";

describe("firestore.rules", () => {
  beforeAll(async () => {
    await initializeTestEnvironment();
  });

  afterAll(async () => {
    await getTestEnv().cleanup();
  });

  afterEach(async () => {
    await getTestEnv().clearFirestore();
  });

  //
  usersTest();
  messagesTest();
});
