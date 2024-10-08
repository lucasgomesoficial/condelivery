import { createContext, useMemo, useRef } from "react";

export const DataContext = createContext(null);

export function DataProvider({ children }) {
  const services = useRef({
    ifood: false,
    rappi: false,
    zeDelivery: false,
    foodToSave: false,
  });

  const value = useMemo(() => ({ services }), []);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
