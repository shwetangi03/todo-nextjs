import Image from "next/image";
import AddTodo from "./components/AddTodo";
import ShowTodos from "./components/ShowTodos";

export default function Home() {
  return (
    <div>
      <AddTodo />
      <ShowTodos />
    </div>
  );
}