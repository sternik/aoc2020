with open('inputs/day22.txt') as f:
    input = f.read().strip().split('\n\n')

player_1_deck = [int(_) for _ in input[0].split('\n')[1:]]
player_2_deck = [int(_) for _ in input[1].split('\n')[1:]]

while player_1_deck and player_2_deck:
    a = player_1_deck.pop(0)
    b = player_2_deck.pop(0)

    if a > b:
        player_1_deck.extend([a, b])
    else:
        player_2_deck.extend([b, a])

deck = player_1_deck + player_2_deck
deck.reverse()

part1 = 0
for i, n in enumerate(deck, 1):
    part1 += i * n

print('part1', part1)
