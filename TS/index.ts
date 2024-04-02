import { LegacyPrinter } from "./LegacyPrinter";
import { PrinterAdapter } from "./PrinterAdapter";
import { Client } from "./Client";

// Example Usage
const legacyPrinter = new LegacyPrinter();
const printerAdapter = new PrinterAdapter(legacyPrinter);
const client = new Client(printerAdapter);
client.doPrint();
