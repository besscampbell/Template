import {Player} from './../src/pigdice.js';

describe ('Player', () => {

  test('should correctly create a player object with user,turn, roundScore & totalScore', () => {
    const player = new Player('player1', true, [2, 3, 4], 0);
    expect(player.user).toMatch("player1");
    expect(player.turn).toBeTruthy();
    expect(player.roundScore).toEqual([2, 3, 4]);
    expect(player.totalScore).toEqual(0);
  });
});