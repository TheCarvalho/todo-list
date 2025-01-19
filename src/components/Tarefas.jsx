import { ChevronRight, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { CheckIcon } from "lucide-react";
export const Tarefas = ({ onTaskClick, task, onDeleteTaskClick }) => {
  const navegate = useNavigate();

  function onSeeDetails(tarefa) {
    const query = new URLSearchParams();
    query.set("task", tarefa.title);
    query.set("descricao", tarefa.description);
    navegate(`/tarefa?${query.toString()}`);
  }
  return (
    <ul className="space-y-4 p-6 bg-slate-200 rounded-md shadow">
      {task.map((tarefas) => (
        <li key={tarefas.id} className="flex gap-2">
          <Button onClick={() => onDeleteTaskClick(tarefas.id)}>
            <Trash2 />
          </Button>
          <button
            onClick={() => onTaskClick(tarefas.id)}
            className={`flex items-center gap-3 text-left bg-slate-400 text-white p-2 rounded-md w-full ${
              tarefas.complete && "line-through text-slate-700"
            }`}
          >
            {tarefas.complete && <CheckIcon />}
            {tarefas.title}
          </button>
          <Button onClick={() => onSeeDetails(tarefas)}>
            <ChevronRight />
          </Button>
        </li>
      ))}
    </ul>
  );
};
