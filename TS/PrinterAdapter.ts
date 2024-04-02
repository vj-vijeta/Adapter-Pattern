import { Printer } from "./Printer";
import { LegacyPrinter } from "./LegacyPrinter";

// Adapter (PrinterAdapter)
export class PrinterAdapter implements Printer {
    private legacyPrinter: LegacyPrinter;

    constructor(legacyPrinter: LegacyPrinter) {
        this.legacyPrinter = legacyPrinter;
    }

    print(): void {
        this.legacyPrinter.printDocument();
    }
}
