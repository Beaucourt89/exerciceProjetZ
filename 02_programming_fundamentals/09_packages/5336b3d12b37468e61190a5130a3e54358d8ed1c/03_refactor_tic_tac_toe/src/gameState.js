const state = {
  a: Array(3).fill(null),
  b: Array(3).fill(null),
  c: Array(3).fill(null),
};

function updateState(coordinate, player) {
  const line = state[coordinate.letter];

  line[coordinate.digit] = player;
}

module.exports = { state, updateState };
