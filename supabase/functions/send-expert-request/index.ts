import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ExpertRequestData {
  name: string;
  email: string;
  phone: string;
  city: string;
  service: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, city, service, message }: ExpertRequestData = await req.json();

    // Send email to the business
    const emailResponse = await resend.emails.send({
      from: "Expert Request <onboarding@resend.dev>",
      to: ["varshaaravi24@gmail.com"],
      subject: `New Expert Assistance Request - ${service}`,
      html: `
        <h1>New Expert Assistance Request</h1>
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Customer Details:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>City:</strong> ${city}</p>
          <p><strong>Service Requested:</strong> ${service}</p>
          
          <h2>Message:</h2>
          <p style="background: #f5f5f5; padding: 15px; border-left: 4px solid #007cba;">
            ${message || 'No additional message provided'}
          </p>
          
          <hr style="margin: 20px 0;">
          <p style="color: #666; font-size: 12px;">
            This request was submitted through the Talk to Expert form on your website.
          </p>
        </div>
      `,
    });

    // Send confirmation email to the customer
    await resend.emails.send({
      from: "United Fillings <onboarding@resend.dev>",
      to: [email],
      subject: "We received your expert assistance request!",
      html: `
        <h1>Thank you for contacting us, ${name}!</h1>
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>We have received your request for expert assistance with <strong>${service}</strong>.</p>
          
          <p>Our team will review your request and get back to you within 24 hours at the contact information you provided:</p>
          <ul>
            <li>Email: ${email}</li>
            <li>Phone: ${phone}</li>
          </ul>
          
          <p>If you have any urgent questions, please feel free to call us directly at +91-8048-175-725.</p>
          
          <p>Best regards,<br>United Fillings Team</p>
        </div>
      `,
    });

    console.log("Expert request email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, message: "Request sent successfully" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-expert-request function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);