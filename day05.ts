import { readFileSync } from 'fs';

const input = readFileSync('inputs/day05.txt', 'utf-8').trim().split("\n");

const range = (n: number) => Array.from({ length: n }, (_, key) => key)

let boardingPasses = new Set([]);
for (let index = 0; index < input.length; index++) {
    let find = function (x: string[], y: string, z: number): number {
        let s = range(z)
        x.forEach(element => {
            const half = Math.ceil(s.length / 2);
            if (element === y) {
                s = s.splice(0, half)
            } else {
                s = s.splice(-half)
            }
        });
        return s[0]
    };

    const bp = input[index].split("");
    boardingPasses.add(find(bp.slice(0, 7), "F", 128) * 8 + find(bp.slice(7, 10), "L", 8));
}

let part2 = 0;
boardingPasses.forEach(seatId => {
    if (!boardingPasses.has(seatId - 1) && boardingPasses.has(seatId - 2)) {
        part2 = seatId - 1;
    }
});

console.log("part1", Math.max(...Array.from(boardingPasses.values())));
console.log("part2", part2);
