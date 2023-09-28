import players from "./players.json";
import emailDeck from "./EmailManager";
import drawDeck from "./DrawingManager";
import printDeck from "./PrintingManager";
import generateDeck from "./BingoGenerator";

async function ProcessDeck(deck: Map<string, number[]>[]) {
    const OUTPUT_DIRECTORY: string = './output';
    const timeStamp: number = Date.now();
    const fileName: string = `Bingo_${timeStamp}`;
    const filePath: string = `${OUTPUT_DIRECTORY}/${fileName}`;
    
    await drawDeck(deck, OUTPUT_DIRECTORY, fileName);
    emailDeck(players, deck, filePath);
}

const deck: Map<string, number[]>[] = generateDeck(players.length);
printDeck(deck);
ProcessDeck(deck);