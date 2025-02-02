const Yatzy = function(d1, d2, d3, d4, d5) {
    const dice = [d1, d2, d3, d4, d5];

    this.ones = function() {
        return dice.filter(diceRoll => diceRoll === 1)
            .reduce((totalSum, currentValue) => totalSum + currentValue, 0)
    }

    this.twos = function() {
        return dice.filter(diceRoll => diceRoll === 2)
            .reduce((totalSum, currentValue) => totalSum + currentValue, 0)
    }

    this.threes = function(){
        return dice.filter(diceRoll => diceRoll === 3)
            .reduce((totalSum, currentValue) => totalSum + currentValue, 0)
    }

    this.fours = function() {
        return dice.filter(diceRoll => diceRoll === 4)
            .reduce((totalSum, currentValue) => totalSum + currentValue, 0)
    }

    this.fives = function() {
        return dice.filter(diceRoll => diceRoll === 5)
            .reduce((totalSum, currentValue) => totalSum + currentValue, 0)
    }

    this.sixes = function(){
        return dice.filter(diceRoll => diceRoll === 6)
            .reduce((totalSum, currentValue) => totalSum + currentValue, 0)
    }

    this.score_pair = function(d1, d2, d3, d4, d5) {
        let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        counts[d1-1]++;
        counts[d2-1]++;
        counts[d3-1]++;
        counts[d4-1]++;
        counts[d5-1]++;
        for (let i = 0; i != 6; i++)
            if (counts[6-i-1] >= 2)
                return (6-i)*2;
        return 0;
    }
}

Yatzy.chance = function(d1, d2, d3, d4, d5) {
    return d1 + d2 + d3 + d4 + d5;
}

Yatzy.yatzy = function() {
    let counts = [0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i != arguments.length; ++i) {
        let die = arguments[i];
        counts[die-1]++; }
    for (let i = 0; i != 6; i++)
        if (counts[i] == 5)
            return 50;
    return 0;
}

Yatzy.two_pair = function(d1, d2, d3, d4, d5) {
    let counts = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    counts[d1-1]++;
    counts[d2-1]++
    counts[d3-1]++
    counts[d4-1]++;
    counts[d5-1]++;
    let n = 0;
    let score = 0;
    for (let i = 0; i < 6; i += 1)
        if (counts[6-i-1] >= 2) {
            n++;
            score += (6-i);
        }
    if (n == 2)
        return score * 2;
    else
        return 0;
}

Yatzy.four_of_a_kind = function(d1, d2, d3, d4, d5) {
    let tallies = [0, 0, 0, 0, 0, 0, 0, 0]
    tallies[d1-1]++;
    tallies[d2-1]++;
    tallies[d3-1]++;
    tallies[d4-1]++;
    tallies[d5-1]++;
    for (let i = 0; i < 6; i++)
        if (tallies[i] >= 4)
            return (i+1) * 4;
    return 0;
}

Yatzy.three_of_a_kind = function(d1, d2, d3, d4, d5) {
    let t = [0, 0, 0, 0, 0, 0, 0, 0, 0]
    t[d1-1]++;
    t[d2-1]++;
    t[d3-1]++;
    t[d4-1]++;
    t[d5-1]++;
    for (let i = 0; i < 6; i++)
        if (t[i] >= 3)
            return (i+1) * 3;
    return 0;
}

Yatzy.smallStraight = function(d1, d2, d3, d4, d5) {
    let tallies = [0, 0, 0, 0, 0, 0, 0]
    tallies[d1-1] += 1;
    tallies[d2-1] += 1;
    tallies[d3-1] += 1;
    tallies[d4-1] += 1;
    tallies[d5-1] += 1;
    if (tallies[0] == 1 &&
        tallies[1] == 1 &&
        tallies[2] == 1 &&
        tallies[3] == 1 &&
        tallies[4] == 1)
        return 15;
    return 0;
}

Yatzy.largeStraight = function(d1, d2, d3, d4, d5) {
    let tallies = [0, 0, 0, 0,0,0,0,0];
    tallies[d1-1] += 1;
    tallies[d2-1] += 1;
    tallies[d3-1] += 1;
    tallies[d4-1] += 1;
    tallies[d5-1] += 1;
    if (tallies[1] == 1 &&
        tallies[2] == 1 &&
        tallies[3] == 1 &&
        tallies[4] == 1
        && tallies[5] == 1)
        return 20;
    return 0;
}

Yatzy.fullHouse = function(d1, d2, d3, d4, d5) {
    let  _2 = false;
    let i;
    let _2_at = 0;
    let _3 = false;
    let _3_at = 0;

    let tallies = [0, 0, 0, 0, 0, 0, 0, 0];
    tallies[d1-1] += 1;
    tallies[d2-1] += 1;
    tallies[d3-1] += 1;
    tallies[d4-1] += 1;
    tallies[d5-1] += 1;

    for (let i = 0; i != 6; i += 1)
        if (tallies[i] == 2) {
            _2 = true;
            _2_at = i+1;
        }

    for (let i = 0; i != 6; i += 1)
        if (tallies[i] == 3) {
            _3 = true;
            _3_at = i+1;
        }

    if (_2 && _3)
        return _2_at * 2 + _3_at * 3;
    else
        return 0;
}

module.exports = Yatzy;