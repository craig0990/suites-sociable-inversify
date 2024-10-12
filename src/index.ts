import "reflect-metadata";
import { container } from "./container";
import type { InvoiceService } from "./invoice.service";
import { TYPES } from "./types";

const invoiceService = container.get<InvoiceService>(TYPES.InvoiceService);
const invoice = invoiceService.generateInvoice("123", 100);
console.log(invoice);
