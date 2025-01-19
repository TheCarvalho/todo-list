export const Titulo = (props) => {
  return (
    <h1 className="text-4xl text-slate-100 text-center font-bold py-6">
      {props.children}
    </h1>
  );
};
