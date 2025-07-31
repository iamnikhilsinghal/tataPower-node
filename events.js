const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("test", () => {
  console.log("this is listener 1");
});

// emitter.on("test", () => {
//   console.log("this is listener 2");
// });

// emitter.on("test", async () => {
//   console.log("Listener started");
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   console.log("This is Listener 1 (done)");
// });

// emitter.on("test", () => {
//   setTimeout(() => {
//     console.log("this is settimeout");
//   }, 1000);
// });

emitter.on("test", () => {
  setTimeout(() => {
    console.log("this is settimeout");
  }, 1000);
});

console.log("Before emitting");
emitter.emit("test");
console.log("After emitting");


// tasks-
// order place ecommerce

// add to cart