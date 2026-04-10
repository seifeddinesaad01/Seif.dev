import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/sendEmail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { recipientEmail, details } = body ?? {};

    if (!recipientEmail) {
      return NextResponse.json(
        { error: "Recipient email is required" },
        { status: 400 }
      );
    }

    const emailResult = await sendEmail(recipientEmail, details);

    if (!emailResult.success) {
      return NextResponse.json(
        { error: emailResult.error || "Failed to send the email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Server error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}