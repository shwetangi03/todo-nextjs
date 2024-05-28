import connectionStr from "@/app/database/db";
import Todos from "@/app/database/model/model";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const GET = async () => {
  await mongoose.connect(connectionStr);
  const data = await Todos.find({ completed: true });
  return NextResponse.json({
    result: data,
    success: true,
  });
};
