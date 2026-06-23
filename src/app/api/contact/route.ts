import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.format() },
        { status: 400 }
      );
    }

    // In a real application, you would send an email here.
    console.log("Contact form submission received:", result.data);

    return NextResponse.json(
      { message: "Thank you for your message. We will get back to you soon!" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
