
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { MapPin, CreditCard, Truck, Receipt } from "lucide-react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CheckoutFormProps {
  items: CartItem[];
  total: number;
  onComplete: (orderData: any) => void;
  onBack: () => void;
}

const CheckoutForm = ({ items, total, onComplete, onBack }: CheckoutFormProps) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Address Information
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    
    // Payment Method
    paymentMethod: "card",
    
    // Delivery Options
    deliveryOption: "standard",
    
    // Special Instructions
    instructions: ""
  });

  const deliveryOptions = {
    pickup: { name: "Pickup", price: 0, time: "Ready in 2-3 hours" },
    standard: { name: "Standard Delivery", price: 5.99, time: "3-5 business days" },
    express: { name: "Express Delivery", price: 12.99, time: "1-2 business days" },
    overnight: { name: "Overnight Delivery", price: 24.99, time: "Next business day" }
  };

  const paymentMethods = {
    card: "Credit/Debit Card",
    paypal: "PayPal",
    cash: "Cash on Delivery",
    transfer: "Bank Transfer"
  };

  const deliveryPrice = deliveryOptions[formData.deliveryOption as keyof typeof deliveryOptions]?.price || 0;
  const tax = total * 0.08; // 8% tax
  const finalTotal = total + deliveryPrice + tax;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const orderData = {
      ...formData,
      items,
      subtotal: total,
      deliveryPrice,
      tax,
      finalTotal,
      orderDate: new Date().toISOString(),
      orderId: `ORD-${Date.now()}`
    };
    onComplete(orderData);
  };

  const renderStep1 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <MapPin className="h-5 w-5" />
          <span>Delivery Address</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="fullName">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
            />
          </div>
        </div>
        
        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>

        <div>
          <Label htmlFor="address">Street Address *</Label>
          <Input
            id="address"
            value={formData.address}
            onChange={(e) => handleInputChange("address", e.target.value)}
            placeholder="Enter your street address"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor="city">City *</Label>
            <Input
              id="city"
              value={formData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
              placeholder="City"
            />
          </div>
          <div>
            <Label htmlFor="state">State *</Label>
            <Input
              id="state"
              value={formData.state}
              onChange={(e) => handleInputChange("state", e.target.value)}
              placeholder="State"
            />
          </div>
          <div>
            <Label htmlFor="zipCode">ZIP Code *</Label>
            <Input
              id="zipCode"
              value={formData.zipCode}
              onChange={(e) => handleInputChange("zipCode", e.target.value)}
              placeholder="ZIP Code"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="country">Country *</Label>
          <Input
            id="country"
            value={formData.country}
            onChange={(e) => handleInputChange("country", e.target.value)}
            placeholder="Country"
          />
        </div>
      </CardContent>
    </Card>
  );

  const renderStep2 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Truck className="h-5 w-5" />
          <span>Delivery Options</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={formData.deliveryOption}
          onValueChange={(value) => handleInputChange("deliveryOption", value)}
          className="space-y-4"
        >
          {Object.entries(deliveryOptions).map(([key, option]) => (
            <div key={key} className="flex items-center space-x-3 p-4 border rounded-lg">
              <RadioGroupItem value={key} id={key} />
              <div className="flex-1">
                <Label htmlFor={key} className="font-medium cursor-pointer">
                  {option.name}
                </Label>
                <p className="text-sm text-muted-foreground">{option.time}</p>
              </div>
              <div className="text-right">
                <span className="font-semibold">
                  {option.price === 0 ? "Free" : `$${option.price.toFixed(2)}`}
                </span>
              </div>
            </div>
          ))}
        </RadioGroup>

        <div className="mt-6">
          <Label htmlFor="instructions">Special Instructions (Optional)</Label>
          <Textarea
            id="instructions"
            value={formData.instructions}
            onChange={(e) => handleInputChange("instructions", e.target.value)}
            placeholder="Any special delivery instructions..."
            className="mt-2"
          />
        </div>
      </CardContent>
    </Card>
  );

  const renderStep3 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <CreditCard className="h-5 w-5" />
          <span>Payment Method</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={formData.paymentMethod}
          onValueChange={(value) => handleInputChange("paymentMethod", value)}
          className="space-y-4"
        >
          {Object.entries(paymentMethods).map(([key, method]) => (
            <div key={key} className="flex items-center space-x-3 p-4 border rounded-lg">
              <RadioGroupItem value={key} id={key} />
              <Label htmlFor={key} className="font-medium cursor-pointer flex-1">
                {method}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {formData.paymentMethod === "card" && (
          <div className="mt-6 space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                className="mt-2"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  className="mt-2"
                />
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  const renderStep4 = () => (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Receipt className="h-5 w-5" />
          <span>Order Summary</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Order Items */}
        <div>
          <h4 className="font-medium mb-3">Items ({items.length})</h4>
          <div className="space-y-2">
            {items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        {/* Address */}
        <div>
          <h4 className="font-medium mb-2">Delivery Address</h4>
          <p className="text-sm text-muted-foreground">
            {formData.fullName}<br />
            {formData.address}<br />
            {formData.city}, {formData.state} {formData.zipCode}<br />
            {formData.country}
          </p>
        </div>

        <Separator />

        {/* Payment & Delivery */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Payment Method:</span>
            <span>{paymentMethods[formData.paymentMethod as keyof typeof paymentMethods]}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Delivery:</span>
            <span>{deliveryOptions[formData.deliveryOption as keyof typeof deliveryOptions]?.name}</span>
          </div>
        </div>

        <Separator />

        {/* Price Breakdown */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Delivery:</span>
            <span>${deliveryPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Tax (8%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <Separator />
          <div className="flex justify-between font-semibold">
            <span>Total:</span>
            <span>${finalTotal.toFixed(2)}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <div className="flex items-center justify-center space-x-4 mb-8">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step >= num
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground"
              }`}
            >
              {num}
            </div>
            {num < 4 && (
              <div
                className={`w-16 h-1 mx-2 ${
                  step > num ? "bg-primary" : "bg-muted"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Content */}
      {step === 1 && renderStep1()}
      {step === 2 && renderStep2()}
      {step === 3 && renderStep3()}
      {step === 4 && renderStep4()}

      {/* Navigation Buttons */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={step === 1 ? onBack : handlePrevious}
        >
          {step === 1 ? "Back to Cart" : "Previous"}
        </Button>
        
        {step < 4 ? (
          <Button
            onClick={handleNext}
            disabled={
              (step === 1 && (!formData.fullName || !formData.email || !formData.address)) ||
              (step === 2 && !formData.deliveryOption) ||
              (step === 3 && !formData.paymentMethod)
            }
          >
            Next
          </Button>
        ) : (
          <Button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700">
            Place Order
          </Button>
        )}
      </div>
    </div>
  );
};

export default CheckoutForm;
