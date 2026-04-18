import PocketBase from "pocketbase";

const PB_URL =
  process.env.NEXT_PUBLIC_POCKETBASE_URL || "http://127.0.0.1:8090";
const pb = new PocketBase(PB_URL);

// Globally disable auto-cancellation so concurrent server requests don't cancel each other
pb.autoCancellation(false);

export default pb;
