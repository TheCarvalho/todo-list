import { useState } from "react";
import { AddTarefa } from "./components/AddTarefa";
import { Tarefas } from "./components/Tarefas";
import { v4 } from "uuid";
import { useEffect } from "react";
import { Titulo } from "./components/Titulo";

function App() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("tarefas")) || []
  );

  function onTaskClick(tarefaID) {
    const novasTarefas = task.map((tarefas) => {
      if (tarefas.id === tarefaID) {
        return { ...tarefas, complete: !tarefas.complete };
      }
      return tarefas;
    });
    setTask(novasTarefas);
  }

  function onDeleteTaskClick(tarefaID) {
    const novasTarefas = task.filter((tarefas) => tarefas.id !== tarefaID);
    setTask(novasTarefas);
  }

  function onAddTaskSubmit(title, description) {
    const novaTarefa = {
      id: v4(),
      title,
      description,
      complete: false,
    };
    setTask([...task, novaTarefa]);
  }

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(task));
  }, [task]);

  // useEffect(() => {
  //   async function fetchTask() {
  //     // Chamar API
  //     const response = await fetch(
  //       "https://jsonplaceholder.typicode.com/todos?_limit=10",
  //       { method: "GET" }
  //     );

  //     // Pegar os dados que ela retorna
  //     const data = await response.json();
  //     console.log(data);

  //     // Persistir no State
  //     setTask(data)

  //   }
  //   fetchTask();
  // }, []);

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center">
      <div className="w-[500px] space-y-4">
        <Titulo>
          Gerenciador de tarefas
        </Titulo>

        <AddTarefa onAddTaskSubmit={onAddTaskSubmit} />
        <Tarefas
          task={task}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
