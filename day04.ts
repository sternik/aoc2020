import { readFileSync } from 'fs';

const input = readFileSync('inputs/day04.txt', 'utf-8').trim().split("\n\n");

const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"]

var part1 = 0
var part2 = 0

for (let index = 0; index < input.length; index++) {
    const passport = input[index];

    var valid1 = true
    var el = ""

    for (let index = 0; index < fields.length; index++) {
        const element = fields[index];

        if (!passport.replace('\n', '').includes(element)) {
            el = element
            valid1 = false
            break
        }
    }

    if (!valid1) {
        part1++
        part2++
        continue
    }

    const items = passport.replace(/\n/g, " ").split(" ")
    var valid2 = true
    for (let index = 0; index < items.length; index++) {
        const element = items[index];

        if (element.startsWith('ecl') && !element.match(/ecl:(amb|blu|brn|gry|grn|hzl|oth)/g)) {
            valid2 = false
        }
        else if (element.startsWith('byr')) {
            const byr = Number(element.split(":")[1])
            if (byr < 1920 || byr > 2002) {
                valid2 = false
            }
        }
        else if (element.startsWith('iyr')) {
            const iyr = Number(element.split(":")[1])
            if (iyr < 2010 || iyr > 2020) {
                valid2 = false
            }
        }
        else if (element.startsWith('eyr')) {
            const eyr = Number(element.split(":")[1])
            if (eyr < 2020 || eyr > 2030) {
                valid2 = false
            }
        }
        else if (element.startsWith('hgt')) {
            const hgt = element.split(":")[1]
            if (hgt.includes('cm')) {
                const h = Number(hgt.replace(/cm/, ""))
                if (h < 150 || h > 193) {
                    valid2 = false
                }
            } else if (hgt.includes('in')) {
                const h = Number(hgt.replace(/in/, ""))
                if (h < 59 || h > 76) {
                    valid2 = false
                }
            } else {
                valid2 = false
            }
        }
        else if (element.startsWith('hcl') && !element.match(/hcl:#[0-9a-f]{6}/g)) {
            valid2 = false
        }
        else if (element.startsWith('pid')) {
            const pid = element.split(":")[1]
            if (pid.length !== 9 && pid[0] !== "0") {
                valid2 = false
            }
        }
    }

    if (!valid2) {
        part2++
    }
}

console.log("part1", input.length - part1)
console.log("part2", input.length - part2)