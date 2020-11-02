import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import api from "../../services/api";

interface InterfaceFilme {
  id: number;
  nome: string;
  sinopse: string;
  foto: string;
}
interface FilmParams {
  id: string;
}

function Filme() {
  const params = useParams<FilmParams>();
  const [interfaceFilme, setInterfaceFilme] = useState<InterfaceFilme>();

  useEffect(() => {
    api.get(`r-api/?api=filmes/${params.id}`).then((response) => {
      console.log(response.data);
      setInterfaceFilme(response.data);
    });
  }, [params.id]);
  return (
    <div>
      <div>
        <strong>{interfaceFilme?.nome}</strong>
        <img src={interfaceFilme?.foto} alt="imagem filme" />
        <p>{interfaceFilme?.sinopse}</p>
        <Link to="/">Home Filmes</Link>
      </div>
    </div>
  );
}
export default Filme;
