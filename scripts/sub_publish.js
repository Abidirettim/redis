import redis from "./connect.js";

redis.redis.subscribe("kanal1", (err, count) => {
  if (err) {
    console.error("hata: %s", err.message)
  } else {
    console.log(
      `Buna baglandim agam: ${count}`
    )
    redis.redis.on("message", (channel, message) => {
      let json_message = JSON.parse(message).message
      console.log(`verimiz: ${json_message}, geldigi yer: ${channel}`);
    })
  }
});

setInterval(() => {
  redis.redis2.publish("kanal1", JSON.stringify({
    message: "sa as"
  }));
}, 2000)

export default "as"