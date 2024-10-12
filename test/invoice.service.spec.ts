import * as assert from "assert";
import { TestBed } from "@suites/unit";
import { InvoiceService } from "../src/invoice.service";
import { TYPES } from "../src/types";
import { PaymentService } from "../src/payment.service";

describe(InvoiceService.constructor.name, () => {
  it("should compile solitary", async () => {
    const { unit: invoiceService, unitRef } =
      await TestBed.solitary(InvoiceService).compile();

    const paymentService = unitRef.get<PaymentService>(TYPES.PaymentService);

    invoiceService.generateInvoice("123", 100);

    assert.ok(paymentService.processPayment.calledWith("123", 100));
  });

  it("should compile sociable", async () => {
    const { unit: invoiceService, unitRef } = await TestBed.sociable(
      InvoiceService,
    )
      .expose(TYPES.PaymentService as never)
      .compile();

    const invoice = invoiceService.generateInvoice("123", 100);

    assert.ok(invoice.includes("123"));
    assert.ok(invoice.includes("100"));
  });
});
