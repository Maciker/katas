# Bowling Game Kata – Problem Statement

Write a program that calculates the score of a bowling game.

## Rules of Bowling
A game consists of 10 frames.

In each frame, the player has two tries to knock down 10 pins.

The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

Spare: If the player knocks down all 10 pins in two tries, they get a bonus of the number of pins knocked down in the next roll.

Strike: If the player knocks down all 10 pins on the first try, they get a bonus of the number of pins knocked down in the next two rolls. The frame ends immediately.

In the 10th frame, a player who rolls a spare or strike is allowed to roll one or two extra balls, respectively, to complete the score. However, no more than three balls can be rolled in the 10th frame.

The maximum score in a game is 300 (12 strikes in a row).

## Requirements
Implement a Game class with two methods:

roll(pins) → Called each time the player rolls a ball, passing the number of pins knocked down.

score() → Returns the total score for the game.

## Write tests to cover:

Gutter game (all zeros)

All ones

One spare

One strike

Perfect game

Mixed rolls