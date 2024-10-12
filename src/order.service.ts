import { injectable } from "inversify";

@injectable()
export class OrderService {
  getOrderDetails(orderId) {
    return `Order #${orderId}`;
  }
}
