
import { useState } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [billingInfo, setBillingInfo] = useState({
    name: "",
    email: "",
    phone: "",
    businessName: "",
    gstin: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setBillingInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handlePayment = () => {
    if (!billingInfo.name || !billingInfo.email) {
      toast.error("Please fill in required fields");
      return;
    }
    
    // Instead of payment processing, show success message and clear cart
    toast.success('Order placed successfully! We will contact you for payment details.');
    clearCart();
    navigate('/');
  };

  const gstAmount = Math.round(totalPrice * 0.18);
  const finalTotal = totalPrice + gstAmount;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardContent className="text-center p-8">
            <h2 className="text-xl font-semibold mb-4">Your cart is empty</h2>
            <Link to="/">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Continue Shopping
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <Card className="bg-white shadow-lg">
          <CardHeader className="bg-blue-600 text-white">
            <div className="flex justify-between items-start">
              <div>
                <div className="flex items-center mb-2">
                  <div className="bg-orange-500 rounded-full px-3 py-1 text-sm font-bold mr-3">
                    United Fillings
                  </div>
                </div>
                <CardTitle className="text-xl">United Fillings Private Limited</CardTitle>
                <p className="text-blue-100 text-sm mt-1">
                  Chennai, Chennai - 600031
                  <br />
                  CIN: U67190TN2014PTC096978
                  <br />
                  GSTIN: 33AADCI0542H1ZX
                </p>
              </div>
              <div className="text-right">
                <div className="bg-blue-500 px-3 py-1 rounded text-sm mb-2">
                  Registrations & Licence
                </div>
                <p className="text-sm">Import Export Code</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Billing Information */}
              <div>
                <h3 className="text-lg font-semibold mb-4">
                  Customer Information
                </h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={billingInfo.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={billingInfo.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      value={billingInfo.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="businessName">Business Name or GSTIN</Label>
                    <Input
                      id="businessName"
                      value={billingInfo.businessName}
                      onChange={(e) =>
                        handleInputChange("businessName", e.target.value)
                      }
                      placeholder="Enter business name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="gstin">GSTIN (for 18% GST Credit)</Label>
                    <Input
                      id="gstin"
                      value={billingInfo.gstin}
                      onChange={(e) =>
                        handleInputChange("gstin", e.target.value)
                      }
                      placeholder="Enter GSTIN"
                    />
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold">Order Summary</h3>
                  <div className="text-right text-sm text-gray-600">
                    <p>Estimate Date:</p>
                    <p>{new Date().toLocaleDateString('en-GB')}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700 border-b pb-2">
                    <div>Description</div>
                    <div className="text-center">Quantity</div>
                    <div className="text-center">Rate</div>
                    <div className="text-right">Amount</div>
                  </div>

                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="grid grid-cols-4 gap-4 text-sm py-2 border-b"
                    >
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-gray-600 text-xs">Professional service registration</p>
                      </div>
                      <div className="text-center">{item.quantity}</div>
                      <div className="text-center">
                        ₹{item.price.toLocaleString()}
                      </div>
                      <div className="text-right">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </div>
                    </div>
                  ))}

                  <div className="space-y-2 pt-4">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal:</span>
                      <span>₹{totalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>GST (18%):</span>
                      <span>₹{gstAmount.toLocaleString()}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total Due:</span>
                      <span>₹{finalTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handlePayment}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 mt-6"
                    size="lg"
                  >
                    PROCEED TO PAYMENT - ₹{finalTotal.toLocaleString()}
                  </Button>
                </div>

                {/* Payment Options */}
                <div className="mt-6 p-4 bg-gray-50 rounded">
                  <h4 className="font-semibold mb-2">Bank Transfer:</h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p>Bank Transfer: ICICI BANK</p>
                    <p>Account Name: INDIAFILINGS PRIVATE LIMITED</p>
                    <p>Account Number: 000905034501</p>
                    <p>IFSC Code: ICIC0006239</p>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-blue-50 rounded">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <Phone className="h-4 w-4 mr-2" />
                    Support:
                  </h4>
                  <div className="text-sm text-gray-700 space-y-1">
                    <p className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      Email: billing@United Fillings.com
                    </p>
                    <p className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      Phone: +91 8068301312
                    </p>
                  </div>
                </div>

                <div className="mt-4 text-xs text-gray-600">
                  <p>
                    <strong>Notes:</strong> Invoices will be issued and service will be initiated on receipt of payment. 
                    Read our terms of service & refund policy online. In case of bank transfer please allow 24 hours for service activation.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Checkout;
