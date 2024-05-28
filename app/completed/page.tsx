import Link from "next/link";
import AddTodo from "../components/AddTodo";
import Task from "../components/Task";

async function CompletedTasks() {
  const getCompletedTask = async () => {
    const response = await fetch("http://localhost:3000/api/completed");
    const data = await response.json();
    return data.result;
  };

  const data: { task: String; completed: false; date: Date; _id: String }[] =
    await getCompletedTask();

  return (
    <div>
      <AddTodo />
      <div>
        <div className="link_container">
          <Link href={"/"} className="all">
            All tasks
          </Link>
          <Link href={"/completed"} className="all comp">
            Completed Tasks
          </Link>
        </div>
        {data.map((ele) => (
          <Task
            task={ele.task}
            completed={ele.completed}
            date={ele.date}
            _id={ele._id}
          ></Task>
        ))}
      </div>
    </div>
  );
}

export default CompletedTasks;
