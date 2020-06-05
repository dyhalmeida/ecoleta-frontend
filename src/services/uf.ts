import { from, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import IUf from "../models/uf";

const ufInitials = () => {
  const url: string =
    "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
  return from(axios.get<IUf[]>(url)).pipe(
    map((response) => response.data.map((uf) => uf.sigla)),
    catchError((error) => errorHandle(error))
  );
};

const errorHandle = (error: any) => {
  toast.error("Ocorreu um erro ao listar estados", {
    position: "top-right",
  });
  return EMPTY;
};

export default ufInitials;
