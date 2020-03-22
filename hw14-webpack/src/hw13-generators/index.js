export default function* createIdGenerator() {
  let val = 1;
  while (true) {
    yield val++;
  }
}
