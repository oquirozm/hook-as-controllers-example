import { useState } from 'react';

function usePagination() {
  const [page, setPage] = useState(1);

  const nextPage = () => setPage(page + 1);
  const prevPage = () => setPage(page - 1);

  return { page, setters: { prevPage, nextPage } };
}
export default usePagination;
