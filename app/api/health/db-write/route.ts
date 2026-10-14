
import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/mongodb";
import mongoose from "mongoose";

export async function GET() {
  try {
    await connectDB();

    const collection = mongoose.connection.db?.collection(
      "connection_tests"
    );

    if (!collection) {
      throw new Error("MongoDB database is unavailable");
    }

    const result = await collection.insertOne({
      message: "SkillBridge database test",
      createdAt: new Date(),
    });

    const savedDocument = await collection.findOne({
      _id: result.insertedId,
    });

    return NextResponse.json({
      success: true,
      message: "MongoDB read and write successful",
      savedDocument,
    });
  } catch (error) {
    console.error("Database read/write test failed:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Database read/write test failed",
      },
      { status: 500 }
    );
  }
}
