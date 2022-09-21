import React, { useState } from "react";
import style from "./Lista.module.scss";
import Item from "./Item";

function Lista() {
  let lista = [
    {
      tarefa: "React",
      tempo: "02:00:00",
    },
    {
      tarefa: "JavaScript",
      tempo: "01:00:00",
    },
    {
      tarefa: "TypeScript",
      tempo: "03:00:00",
    },
  ];

  const [tarefas, setTarefas] = useState(lista);

  return (
    <aside className={style.listaTarefas}>
      <h2
        onClick={() => {
          setTarefas([...tarefas, { tarefa: "tedte", tempo: "05:00:00" }]);
        }}
      >
        Estudos do dia
      </h2>
      <ul>
        {tarefas.map((tarefa, index) => {
          return <Item {...tarefa} key={index} />;
        })}
      </ul>
    </aside>
  );
}

export default Lista;
