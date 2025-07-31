const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("test", () => {
  console.log("this is listener 1");
});

// emitter.on("test", () => {
//   console.log("this is listener 2");
// });

console.log("Before emitting");
emitter.emit("test");
console.log("After emitting");
