import redis from "./connect.js"

redis.set("key2", "bunu gormemelisin", "EX", 1 /* <<< saniye*/)
redis.set("key3", "bunu gormelisin", "EX", 2 /* <<< saniye*/)
redis.set("key1", "yolla getir key1");

redis.get("key1", (err, result) => {
  if (err) {
    console.error(err);
  } else {
    console.log(result);
  }
});

setTimeout(() => {
  redis.get("key2", (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });
}, 1500);

setTimeout(() => {
  redis.get("key3", (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result);
    }
  });
}, 1500);

export default "sa"