import { NextResponse } from "next/server";
import { FieldValue } from "firebase-admin/firestore";
import { getAdminDb } from "@/lib/firebaseAdmin";

type TripInquiryPayload = {
  name?: string;
  contact?: string;
  destination?: string;
  travelMonth?: string;
  message?: string;
};

const destinations = ["Hunza", "Skardu", "Naran & Kaghan", "Fairy Meadows"];
const travelMonths = ["March-May", "June-August", "September-November", "Flexible"];
const contactPattern =
  /^([^\s@]+@[^\s@]+\.[^\s@]+|(\+92|0)?3[0-9]{9})$/;

function validateInquiry(payload: TripInquiryPayload) {
  const name = payload.name?.trim() ?? "";
  const contact = payload.contact?.trim() ?? "";
  const destination = payload.destination?.trim() ?? "";
  const travelMonth = payload.travelMonth?.trim() ?? "";
  const message = payload.message?.trim() ?? "";

  if (name.length < 3 || name.length > 60) {
    return { error: "Name must be between 3 and 60 characters" };
  }

  if (!contactPattern.test(contact)) {
    return { error: "Enter a valid email or Pakistani mobile number" };
  }

  if (!destinations.includes(destination)) {
    return { error: "Choose a valid destination" };
  }

  if (!travelMonths.includes(travelMonth)) {
    return { error: "Choose a valid travel month" };
  }

  if (message.length > 500) {
    return { error: "Trip details must be 500 characters or less" };
  }

  return {
    data: {
      name,
      contact,
      destination,
      travelMonth,
      message,
    },
  };
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as TripInquiryPayload;
    const result = validateInquiry(payload);

    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 400 });
    }

    await getAdminDb().collection("tripInquiries").add({
      ...result.data,
      source: "safarnama-landing-page",
      createdAt: FieldValue.serverTimestamp(),
    });

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch (error) {
    console.error("Inquiry save failed", error);

    return NextResponse.json(
      {
        error:
          process.env.NODE_ENV === "development" && error instanceof Error
            ? error.message
            : "Could not save inquiry",
      },
      { status: 500 }
    );
  }
}
