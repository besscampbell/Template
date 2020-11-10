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
    expect(playerRoll.diceRoll(4)).toEqual(playerRoll.roundScore);
  });

  test('should change user turn when a 1 is rolled', () => {
    const playerRoll = new Player('player', false, [0], 0)
    expect(playerRoll.diceRoll(1)).toBeFalsy();
  });
  
  test('should correctly return a round score of 0 if a 1 is rolled', () => {
    const playerRoll = new Player('player', true, [], 0)
    expect(playerRoll.diceRoll(1)).toBeUndefined();
  });
});