import { useParams } from "react-router-dom";

/**
 * Get a specific query parameter value from the URL.
 * @param {string} paramName - The name of the query parameter.
 * @returns {string | null} - The value of the query parameter or null if not found.
 */
export function getQueryParam(paramName: string): string | null {
  const params = new URLSearchParams(window.location.search);
  return params.get(paramName);
}

/**
 * Set (or add if it doesn't exist) a query parameter in the URL.
 * Does not cause a navigation, but will add an entry in the browser's history.
 * @param {string} paramName - The name of the query parameter.
 * @param {string} value - The value for the query parameter.
 */
export function setQueryParam(paramName: string, value: string): void {
  const url = new URL(window.location.href);
  url.searchParams.set(paramName, value);
  window.history.pushState({}, '', url.toString());
}

/**
 * Get all query parameters as an object from the URL.
 * @returns {Record<string, string>} - An object containing all query parameters.
 */
export function getAllQueryParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  let queryParams: Record<string, string> = {};
  
  for (let [key, value] of params.entries()) {
    queryParams[key] = value;
  }

  return queryParams;
}


export function usePathParams<T extends { [K in keyof T]?: string }>() {
  return useParams<T>();
}
