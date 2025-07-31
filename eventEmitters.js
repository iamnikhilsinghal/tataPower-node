const EventEmitter = require("events");
const emitter = new EventEmitter();

// on function is used to create event listerers
emitter.on("userAdded", (user) => {
  console.log(`user with name ${user.fname} has been created`);
});

module.exports = emitter;
