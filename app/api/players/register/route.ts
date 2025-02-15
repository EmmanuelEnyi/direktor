import { NextResponse } from "next/server";
import { supabase } from "../../../../lib/supabaseClient";

// Optional GET handler for testing purposes
export async function GET() {
  return NextResponse.json({ message: "This endpoint accepts POST requests for player registration." });
}

export async function POST(req: Request) {
  try {
    const { name, rating } = await req.json();

    if (!name) {
      return NextResponse.json(
        { error: "Missing required field: name" },
        { status: 400 }
      );
    }

    // Insert the new player into the "players" table and return the inserted row(s)
    const { data, error } = await supabase
      .from("players")
      .insert([{ name, rating: rating ? parseInt(rating) : null }])
      .select(); // This ensures the inserted row is returned

    if (error) throw error;

    return NextResponse.json(
      { message: "Player registered successfully!", data },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
