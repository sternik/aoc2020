import collections
import math
import re
import sys

with open('inputs/day11.txt', 'r') as f:
    lines = [l.rstrip('\n') for l in f.readlines()]


def step(grid):
    newgrid = []
    for row in range(len(grid)):
        newrow = ''
        for col in range(len(grid[0])):
            adj = []
            for x in (-1, 0, 1):
                for y in (-1, 0, 1):
                    if x == y == 0:
                        continue
                    if 0 <= row+x < len(grid) and 0 <= col+y < len(grid[0]):
                        adj.append(grid[row+x][col+y])
            if grid[row][col] == 'L' and '#' not in adj:
                newrow += '#'
            elif grid[row][col] == '#' and adj.count('#') >= 4:
                newrow += 'L'
            else:
                newrow += grid[row][col]
        newgrid.append(newrow)
    return newgrid


part1 = 0
grid = lines
while True:
    after = step(grid)
    if after == grid:
        part1 = ''.join(grid).count('#')
        break
    grid = after

print('part1:', part1)
