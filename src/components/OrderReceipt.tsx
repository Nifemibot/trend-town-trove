
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Download, Printer, Share } from "lucide-react";

interface OrderReceiptProps {
  orderData: any;
  onClose: () => void;
  onNewOrder: () => void;
}

const OrderReceipt = ({ orderData, onClose, onNewOrder }: OrderReceiptProps) => {
  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // In a real app, this would generate a PDF
    const receiptContent = `
°Ñëwbot°Hub - Order Receipt

Order ID: ${orderData.orderId}
Date: ${new Date(orderData.orderDate).toLocaleDateString()}

Customer Information:
${orderData.fullName}
${orderData.email}
${orderData.phone}

Delivery Address:
${orderData.address}
${orderData.city}, ${orderData.state} ${orderData.zipCode}
${orderData.country}

Items Ordered:
${orderData.items.map((item: any) => `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}

Order Summary:
Subtotal: $${orderData.subtotal.toFixed(2)}
Delivery: $${orderData.deliveryPrice.toFixed(2)}
Tax: $${orderData.tax.toFixed(2)}
Total: $${orderData.finalTotal.toFixed(2)}

Payment Method: ${orderData.paymentMethod}
Delivery Option: ${orderData.deliveryOption}

Thank you for shopping with °Ñëwbot°Hub!
    `;

    const blob = new Blob([receiptContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `receipt-${orderData.orderId}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Success Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-green-600">Order Confirmed!</h1>
          <p className="text-muted-foreground">
            Thank you for your purchase. Your order has been received and is being processed.
          </p>
        </div>
      </div>

      {/* Order Details */}
      <Card>
        <CardHeader>
          <CardTitle>Order Receipt</CardTitle>
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Order ID: {orderData.orderId}</span>
            <span>Date: {new Date(orderData.orderDate).toLocaleDateString()}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Customer Info */}
          <div>
            <h4 className="font-medium mb-2">Customer Information</h4>
            <div className="text-sm space-y-1">
              <p>{orderData.fullName}</p>
              <p>{orderData.email}</p>
              <p>{orderData.phone}</p>
            </div>
          </div>

          <Separator />

          {/* Delivery Address */}
          <div>
            <h4 className="font-medium mb-2">Delivery Address</h4>
            <div className="text-sm text-muted-foreground">
              <p>{orderData.address}</p>
              <p>{orderData.city}, {orderData.state} {orderData.zipCode}</p>
              <p>{orderData.country}</p>
            </div>
          </div>

          <Separator />

          {/* Items */}
          <div>
            <h4 className="font-medium mb-3">Items Ordered</h4>
            <div className="space-y-3">
              {orderData.items.map((item: any) => (
                <div key={item.id} className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Quantity: {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Separator />

          {/* Order Summary */}
          <div className="space-y-2">
            <h4 className="font-medium mb-3">Order Summary</h4>
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>${orderData.subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Delivery:</span>
              <span>${orderData.deliveryPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax (8%):</span>
              <span>${orderData.tax.toFixed(2)}</span>
            </div>
            <Separator />
            <div className="flex justify-between font-semibold text-lg">
              <span>Total Paid:</span>
              <span>${orderData.finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <Separator />

          {/* Payment & Delivery Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h5 className="font-medium">Payment Method</h5>
              <p className="text-muted-foreground capitalize">{orderData.paymentMethod}</p>
            </div>
            <div>
              <h5 className="font-medium">Delivery Option</h5>
              <p className="text-muted-foreground capitalize">{orderData.deliveryOption}</p>
            </div>
          </div>

          {orderData.instructions && (
            <>
              <Separator />
              <div>
                <h5 className="font-medium">Special Instructions</h5>
                <p className="text-sm text-muted-foreground">{orderData.instructions}</p>
              </div>
            </>
          )}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <Button variant="outline" onClick={handlePrint}>
          <Printer className="h-4 w-4 mr-2" />
          Print Receipt
        </Button>
        <Button variant="outline" onClick={handleDownload}>
          <Download className="h-4 w-4 mr-2" />
          Download Receipt
        </Button>
        <Button onClick={onNewOrder}>
          Continue Shopping
        </Button>
      </div>

      <div className="text-center">
        <Button variant="ghost" onClick={onClose} className="text-muted-foreground">
          Close
        </Button>
      </div>
    </div>
  );
};

export default OrderReceipt;
