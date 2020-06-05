import { from, EMPTY } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import api from "./api";

const collect = (data: any) => {
  return from(api.post("points", data)).pipe(
    tap((_) => toast.success("Ponto de coleta registrado")),
    catchError((error) => errorHandle(error))
  );
};

const errorHandle = (error: any) => {
  toast.error("Ocorreu um erro ao registrar um ponto de coleta", {
    position: "top-right",
  });
  return EMPTY;
};

export default collect;
