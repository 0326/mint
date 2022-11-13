import { Command } from "commander";
import { isOdd } from "../src";

const program = new Command();

program.option("-n, --number <number>", "input number");

program.parse(process.argv);

const options = program.opts();

console.log("options", options);
console.log("process.argv", program);

console.log("Is odd?", isOdd(Number(options.number)));
