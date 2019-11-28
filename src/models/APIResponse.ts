export interface APIResponse<Type> {
  page: number;
  total_results: number;
  total_pages: number;
  results: Type[];
}