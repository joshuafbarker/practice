const controller = (function () {
  // private data
  let x = 0;
  let y = 0;

  // private methods
  function add(a, b) {
    return a + b;
  }

  // public methods
  return {
    updateCoords: function(a, b) {
      x = a;
      y = b;
    },

    displayCoords: function() {
      console.log(`X is ${x} and Y is ${y}`);
    },

    addNumbers: function(a, b) {
      console.log(`${a} + ${b} = ${add(a, b)}`);
    }
  }
})();
