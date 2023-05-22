const suits = ['C', 'D', 'H', 'S'];
const ranks = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const deck = _.shuffle(createDeck(ranks, suits));

function Player() {
  this.name = 'Player 1';
  this.hand = null;
}

function Card() {
  // eslint-disable-next-line no-unused-expressions
  this.rank = null;
  this.suit = null;
}

const players = [
  _.create(Player.prototype, { name: 'Ron' }),
  _.create(Player.prototype, { name: 'Hermione' }),
  _.create(Player.prototype, { name: 'Harry' }),
  _.create(Player.prototype, { name: 'Cindy' })
];

const [player1, player2, player3, player4] = players;

function createDeck(ranks, suits) {
  const deck = [];
  for (const suitIndex in suits) {
    for (const rankIndex in ranks) {
      const card = _.create(Card.prototype, {
        suit: suits[suitIndex],
        rank: ranks[rankIndex]
      });
      deck.push(card);
    }
  }
  return deck;
}

const deal = (player1, player2, player3, player4) => {
  player1.hand = [deck[0], deck[1]];
  player2.hand = [deck[2], deck[3]];
  player3.hand = [deck[4], deck[5]];
  player4.hand = [deck[6], deck[7]];
};

const determineWinner = (player1, player2, player3, player4) => {
  const players = [player1, player2, player3, player4];

  // Calculate the point value of each player's hand
  for (const player of players) {
    player.handValue = player.hand.reduce((total, card) => {
      // Assign point values to each card rank
      const rankValue = {
        A: 11,
        K: 10,
        Q: 10,
        J: 10
      }[card.rank] || Number(card.rank);

      return total + rankValue;
    }, 0);
  }

  // Find the player with the highest hand value
  const winner = players.reduce((winner, player) => {
    if (!winner || player.handValue > winner.handValue) {
      return player;
    }
    return winner;
  }, null);
  // Log winner with value
  console.log(`${winner.name} wins with a hand value of ${winner.handValue}!`);
};

deal(player1, player2, player3, player4);
determineWinner(player1, player2, player3, player4);
