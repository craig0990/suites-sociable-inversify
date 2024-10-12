import { injectable } from "inversify";

@injectable()
export class PaymentService {
  processPayment(orderId: string, amount: number): string {
    return `Processed payment of ${amount} for order ${orderId}`;
  }
}
