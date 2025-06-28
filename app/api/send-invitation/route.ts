// app/api/send-invitation/route.ts
import { sendEmail } from "@/utils/sendEmail";
import { createClient } from "@/utils/supabase/client";
import { NextResponse } from "next/server";

// Initialize Supabase client
const supabase = createClient();

export async function POST(request: Request) {
  try {
    const { recipientEmail, details } = await request.json();

    // Validate input
    if (!recipientEmail) {
      return NextResponse.json(
        { error: "Email, invitation link, and subdomain are required" },
        { status: 400 }
      );
    }
    // Send the email invitation only if the user does not exist
    const emailResult = await sendEmail(recipientEmail,details);

    // Check if email was sent successfully
    if (!emailResult.success) {
      return NextResponse.json(
        { error: emailResult.error || "Failed to send the email" },
        { status: 500 }
      );
    }

    // If all operations succeed
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json(
      { error: "Internal server error", details: error.message },
      { status: 500 }
    );
  }
}
