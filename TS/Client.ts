import { Printer } from "./Printer";

// Client
export class Client {
    private printer: Printer;

    constructor(printer: Printer) {
        this.printer = printer;
    }

    doPrint(): void {
        this.printer.print();
    }
}
