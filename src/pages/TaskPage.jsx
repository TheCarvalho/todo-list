import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { Titulo } from "../components/Titulo";

export const TaskPage = () => {
  const navegate = useNavigate();
  const [searchParams] = useSearchParams();
  const task = searchParams.get("task");
  const description = searchParams.get("descricao");

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative mb-6">
          <button
            onClick={() => navegate(-1)}
            className="absolute left-0 bottom-0 top-0 text-slate-100 "
          >
            <ChevronLeft />
          </button>
          <Titulo>Detalhes da tarefa</Titulo>
        </div>
        <div className="bg-slate-400 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold">{task}</h2>
          {description !== "undefined" && (
            <p className="text-white">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
