import { from, EMPTY } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "./api";

const items = () => {
  return from(api.get("items")).pipe(
    map((response) => response.data),
    catchError((error) => errorHandle(error))
  );
};

const errorHandle = (error: any) => {
  toast.error("Ocorreu um erro ao listar items de coleta", {
    position: "top-right",
  });
  return EMPTY;
};

export default items;
