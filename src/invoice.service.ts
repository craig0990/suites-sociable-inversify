import { inject, injectable } from "inversify";
import { TYPES } from "./types";
import type { OrderService } from "./order.service";
import type { PaymentService } from "./payment.service";

@injectable()
export class InvoiceService {
  private orderService: OrderService;
  private paymentService: PaymentService;

  constructor(
    @inject(TYPES.OrderService) orderService: OrderService,
    @inject(TYPES.PaymentService) paymentService: PaymentService,
  ) {
    this.orderService = orderService;
    this.paymentService = paymentService;
  }

  generateInvoice(orderId: string, amount: number): string {
    const orderDetails = this.orderService.getOrderDetails(orderId);
    const paymentStatus = this.paymentService.processPayment(orderId, amount);

    return `${orderDetails}\n${paymentStatus}`;
  }
}
