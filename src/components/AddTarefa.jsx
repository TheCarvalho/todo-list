// import { Plus } from 'lucide-react';
import { useState } from "react";
import { Input } from "./Input";

export const AddTarefa = ({ onAddTaskSubmit }) => {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite a tarefa"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <Input
        placeholder="Digite a descrição"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() => {
          if (!task.trim() || !description.trim()) {
            return alert("Preencha os campos");
          }
          onAddTaskSubmit(task, description);
          setTask("");
          setDescription("");
        }}
        className="bg-slate-500 rounded-md text-white px-4 py-2 font-medium hover:bg-slate-600 active:bg-slate-700"
      >
        Adicionar
      </button>
    </div>
  );
};
