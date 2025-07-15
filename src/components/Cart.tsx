import { X, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import CheckoutForm from "./CheckoutForm";
import OrderReceipt from "./OrderReceipt";
import { useState } from "react";
import { useUser } from "@/contexts/UserContext";
import { Link } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: number, quantity: number) => void;
  onRemoveItem: (id: number) => void;
  total: number;
}

const Cart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, total }: CartProps) => {
  const [currentView, setCurrentView] = useState<'cart' | 'checkout' | 'receipt'>('cart');
  const [orderData, setOrderData] = useState(null);
  const { isLoggedIn } = useUser();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (!isLoggedIn) {
      // Don't proceed to checkout if user is not logged in
      return;
    }
    setCurrentView('checkout');
  };

  const handleOrderComplete = (data: any) => {
    setOrderData(data);
    setCurrentView('receipt');
  };

  const handleNewOrder = () => {
    setCurrentView('cart');
    setOrderData(null);
    onClose();
  };

  const handleBackToCart = () => {
    setCurrentView('cart');
  };

  const renderCartView = () => (
    <>
      <SheetHeader>
        <SheetTitle className="flex items-center space-x-2">
          <ShoppingBag className="h-5 w-5" />
          <span>Shopping Cart ({itemCount})</span>
        </SheetTitle>
      </SheetHeader>

      <div className="flex flex-col h-full">
        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-gray-500">
            <ShoppingBag className="h-16 w-16 mb-4 opacity-50" />
            <h3 className="text-lg font-medium mb-2">Your cart is empty</h3>
            <p className="text-sm text-center">Add some products to get started!</p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4">
              <div className="space-y-4">
                {items.map((item) => (
                  <Card key={item.id} className="border-0 shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex space-x-4">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium line-clamp-2 mb-2">
                            {item.name}
                          </h4>
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-lg">
                              ${item.price}
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => onRemoveItem(item.id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="flex items-center space-x-3 mt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <Badge variant="secondary" className="px-3">
                              {item.quantity}
                            </Badge>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Cart Footer */}
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="space-y-2">
                {!isLoggedIn ? (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground text-center">
                      You need to sign in to proceed with checkout
                    </p>
                    <div className="flex gap-2">
                      <Link to="/login" className="flex-1" onClick={onClose}>
                        <Button className="w-full bg-black text-white hover:bg-gray-800">
                          Sign In
                        </Button>
                      </Link>
                      <Link to="/signup" className="flex-1" onClick={onClose}>
                        <Button variant="outline" className="w-full">
                          Sign Up
                        </Button>
                      </Link>
                    </div>
                  </div>
                ) : (
                  <Button 
                    className="w-full bg-black text-white hover:bg-gray-800"
                    onClick={handleCheckout}
                  >
                    Proceed to Checkout
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                )}
                <Button variant="outline" className="w-full" onClick={onClose}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );

  const renderCheckoutView = () => (
    <>
      <SheetHeader>
        <SheetTitle>Checkout</SheetTitle>
      </SheetHeader>
      <div className="py-4">
        <CheckoutForm
          items={items}
          total={total}
          onComplete={handleOrderComplete}
          onBack={handleBackToCart}
        />
      </div>
    </>
  );

  const renderReceiptView = () => (
    <>
      <SheetHeader>
        <SheetTitle>Order Complete</SheetTitle>
      </SheetHeader>
      <div className="py-4">
        <OrderReceipt
          orderData={orderData}
          onClose={onClose}
          onNewOrder={handleNewOrder}
        />
      </div>
    </>
  );

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg lg:max-w-2xl overflow-y-auto">
        {currentView === 'cart' && renderCartView()}
        {currentView === 'checkout' && renderCheckoutView()}
        {currentView === 'receipt' && renderReceiptView()}
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
