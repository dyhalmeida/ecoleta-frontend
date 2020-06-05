import { from, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import ICity from "../models/city";

const cities = (uf: string) => {
  const url: string = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;
  return from(axios.get<ICity[]>(url)).pipe(
    map((response) => response.data.map((city) => city.nome)),
    catchError((error) => errorHandle(error))
  );
};

const errorHandle = (error: any) => {
  toast.error("Ocorreu um erro ao listar municípios", {
    position: "top-right",
  });
  return EMPTY;
};

export default cities;
