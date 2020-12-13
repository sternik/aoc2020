import { readFileSync } from 'fs';

const input = readFileSync('inputs/day08.txt', 'utf-8').trim().split("\n");


function countAcc(input: string[]) {
    let index = 0
    let acc = 0
    let looped = false

    let visited = []
    while (index !== input.length) {
        visited.push(index)

        let [operation, accumulator] = input[index].split(" ");
        switch (operation) {
            case 'nop':
                index++;
                break;
            case 'jmp':
                index += parseInt(accumulator);
                break;
            case 'acc':
                acc += parseInt(accumulator);
                index++;
                break;
        }

        if (visited.includes(index)) {
            looped = true
            break
        }
    }

    return [acc, looped]
}

console.log("part1", countAcc(input)[0]);

for (let index = 0; index < input.length; index++) {
    let [operation, accumulator] = input[index].split(" ");
    const newInput = Object.assign([], input);

    if (operation === "jmp") {
        newInput[index] = "nop " + accumulator;
    } else if (operation === "nop") {
        newInput[index] = "jmp " + accumulator;
    }

    let res = countAcc(newInput);
    if (!res[1]) {
        console.log("part2", res[0]);
        break;
    }
}