import { useContext } from "react";
import { DataContext } from "../context/dataProvider";

export function useData() {
  return useContext(DataContext);
}
