import { readFileSync } from 'fs';

const input = readFileSync('inputs/day07.txt', 'utf-8').trim().split("\n");

let rules1 = {}
let rules2 = {}

input.forEach(element => {
    const a = element.replace(".", "").split(" contain ")
    const cColor = a[0].replace("bags", "").trim()

    a[1].split(", ").forEach(element => {
        if (element !== "no other bags") {
            let color = element.split(" ").slice(1, -1).join(" ")
            let number = Number(element.split(" ")[0])

            if (!(color in rules1)) {
                rules1[color] = new Set([])
            }
            rules1[color].add(cColor)

            if (!(cColor in rules2)) {
                rules2[cColor] = new Set([])
            }
            rules2[cColor].add({ color, number })
        } else {
            rules2[cColor] = new Set([])
        }
    });
});

let part1 = new Set(["shiny gold"])
part1.forEach(color => {
    if (color in rules1) {
        rules1[color].forEach((item: string) => part1.add(item));
    }
});

function addColor(color: string): number {
    let total = 0
    rules2[color].forEach(element => {
        total += element["number"] * (1 + addColor(element["color"]));
    });

    return total;
}
let part2 = addColor("shiny gold")

console.log("part1", part1.size - 1);
console.log("part2", part2);
