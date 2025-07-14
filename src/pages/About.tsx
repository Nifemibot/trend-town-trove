
import { ShoppingBag, Award, Users, Truck, Shield } from "lucide-react";
import Navigation from "@/components/Navigation";
import Cart from "@/components/Cart";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

const About = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { cartItems, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const features = [
    {
      icon: Award,
      title: "Premium Quality",
      description: "We carefully curate our products to ensure the highest quality standards for our customers."
    },
    {
      icon: Users,
      title: "Customer First",
      description: "Our dedicated customer service team is here to help you with any questions or concerns."
    },
    {
      icon: Truck,
      title: "Fast Shipping",
      description: "Quick and reliable delivery to get your products to you as soon as possible."
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description: "Your privacy and security are our top priorities with encrypted transactions."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation 
        cartItemsCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6">About ShopHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Welcome to ShopHub, your premier destination for discovering amazing products. 
            We're passionate about bringing you the latest trends and highest quality items 
            from around the world.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2024, ShopHub began with a simple mission: to make online shopping 
                more enjoyable and accessible for everyone. We believe that everyone deserves 
                access to quality products at fair prices.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small team with big dreams has grown into a trusted platform 
                serving customers worldwide. We're committed to continuously improving our 
                service and expanding our product range.
              </p>
              <p className="text-gray-600">
                Today, we're proud to offer thousands of products across multiple categories, 
                all carefully selected to meet our high standards of quality and value.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
                alt="Our team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose ShopHub?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-white shadow-sm border">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center bg-blue-50 rounded-lg p-12">
          <ShoppingBag className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To provide an exceptional online shopping experience by offering quality products, 
            outstanding customer service, and innovative solutions that make shopping easier 
            and more enjoyable for everyone.
          </p>
        </div>
      </div>

      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        total={getCartTotal()}
      />
    </div>
  );
};

export default About;
