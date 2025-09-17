import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Download } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const { clearCart } = useCart();
  const [orderNumber] = useState(`ORD-${Date.now()}`);

  useEffect(() => {
    if (sessionId) {
      // Clear the cart after successful payment
      clearCart();
    }
  }, [sessionId, clearCart]);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4">
        <Card className="bg-white shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-16 w-16 text-green-500" />
            </div>
            <CardTitle className="text-2xl text-green-600">
              Payment Successful!
            </CardTitle>
            <p className="text-gray-600 mt-2">
              Thank you for your purchase. Your order has been confirmed.
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold text-green-800 mb-2">
                Order Details
              </h3>
              <p className="text-sm text-green-700">
                <strong>Order Number:</strong> {orderNumber}
              </p>
              <p className="text-sm text-green-700">
                <strong>Payment ID:</strong> {sessionId}
              </p>
              <p className="text-sm text-green-700">
                <strong>Date:</strong> {new Date().toLocaleDateString("en-GB")}
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">What's Next?</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• You will receive a confirmation email shortly</li>
                <li>• Our team will contact you within 24 hours</li>
                <li>• Service processing will begin immediately</li>
                <li>• Track your order status in your account</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-2">
                For any queries regarding your order, please contact us:
              </p>
              <p className="text-sm text-gray-600">
                Email: billing@United Fillings.com | Phone: +91 8068301312
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Link to="/" className="flex-1">
                <Button variant="outline" className="w-full">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Continue Shopping
                </Button>
              </Link>
              <Button className="flex-1" onClick={() => window.print()}>
                <Download className="h-4 w-4 mr-2" />
                Download Receipt
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PaymentSuccess;
