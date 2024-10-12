import { Container } from "inversify";
import { TYPES } from "./types";
import { InvoiceService } from "./invoice.service";
import { OrderService } from "./order.service";
import { PaymentService } from "./payment.service";

const container = new Container();
container.bind<InvoiceService>(TYPES.InvoiceService).to(InvoiceService);
container.bind<OrderService>(TYPES.OrderService).to(OrderService);
container.bind<PaymentService>(TYPES.PaymentService).to(PaymentService);

export { container };
