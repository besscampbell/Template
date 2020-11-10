import {Player} from './../src/pigdice.js';

describe ('Player', () => {

  test('should correctly create a player object with user,turn, roundScore & totalScore', () => {
    const player = new Player('player1', true, [0], 0);
    expect(player.user).toMatch("player1");
    expect(player.turn).toBeTruthy();
    expect(player.roundScore).toEqual([0]);
    expect(player.totalScore).toEqual(0);
  });

  test('should correctly assign the roll into the roundScore', () => {
    const playerRoll = new Player('player1', true, [0], 0)
    expect(playerRoll.diceRoll()).toEqual(playerRoll.roundScore);
  });
});