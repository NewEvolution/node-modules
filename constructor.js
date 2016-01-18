// Exports a usable constructor that can make new objects
function Being() {}

Being.prototype.alive = function() {
  console.log("💀");
};

module.exports = Being;
