const Reader = require("./lib/utils/Reader");
const ExplorerService = require("./lib/services/ExplorerService");
const FizzbuzzService = require("./lib/services/FizzbuzzService");

// Part 1 Read json file ===========================
const explorers = Reader.readJsonFile("explorers.json");

// Part 2: Get the quantity of explorers names in node
console.log("Explorers in node: " +  ExplorerService.getAmountOfExplorersByMission(explorers, "node") );

// Part4: Get the explorer's usernames in Node
const usernamesInNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
console.log(usernamesInNode);

// Part 8: Get a list of the explorers in node, if the score is divisible by 5 and 3, set the property
// trick and the value FIZZBUZZ, if is just divisible by 5 set the property trcik and the value BUZZ,
// if is just divisible by 3 set the property trick and the value FIZZ, otherwise set the property
// trick and the score value. TODO
const explorersInNode = ExplorerService.filterByMission(explorers, "node");
explorersInNode.forEach(element => {
    FizzbuzzService.applyValidationInExplorer(element);
});
console.log(explorersInNode);
