import React from "react";
import { useLocation } from "react-router-dom";

/**
 * Hook para obtener los [query params]
 */
export const useQuery = () => {
  
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}