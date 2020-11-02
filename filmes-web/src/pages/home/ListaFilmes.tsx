import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

interface Filme{
  id: number;
  nome: string;
  sinopse: string;
  foto: string;
}
function ListaFilmes() {
  const [filmes, setFilmes] = useState<Filme[]>([]);
 
  useEffect(() => {
    async function loadUrl() {
      const response = await api.get("r-api/?api=filmes/");
      const data = response.data;
      setFilmes(data);
  }
    loadUrl();
  }, []);
  
  return (
    <div>
     {filmes.map(filme=>{
       return(
         <article key={filme.id}>
          <strong>{filme.nome}</strong>
          <img src={filme.foto} alt="imagem"/>
          <Link to={`filme/${filme.id}`}>Detalhes</Link>
         </article>
       )
     })}
    </div>
  );
}
export default ListaFilmes;
