import mongoose from "mongoose";
import connectionStr from "../database/db";
import Todos from "../database/model/model";
import { NextResponse } from "next/server";

export const GET = async () => {
  await mongoose.connect(connectionStr);
  const data = await Todos.find();
  return NextResponse.json({
    result: data,
    success: true,
  });
};

export const POST = async (req: Request, res: Response) => {
  const payload = await req.json();
  await mongoose.connect(connectionStr);
  const todo = new Todos(payload);
  const result = await todo.save();
  return NextResponse.json({ result, success: true });
};

export const PUT = async (req: Request, res: Response) => {
  const payload = await req.json();
  const { _id, task, completed } = payload;
  console.log(payload);
  await mongoose.connect(connectionStr);
  const data = await Todos.findByIdAndUpdate(
    _id,
    { completed, task },
    { new: true }
  );
  return NextResponse.json({ result: data, success: true });
};

export const DELETE = async (req: Request, res: Response) => {
  const payload = await req.json();
  const { _id } = payload;
  console.log(payload);
  await mongoose.connect(connectionStr);
  const data = await Todos.findByIdAndDelete(_id);
  return NextResponse.json({ result: data, success: true });
};
