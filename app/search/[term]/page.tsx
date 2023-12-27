import { notFound } from "next/navigation";
import React from "react";
type Props = {
  params: {
    term: string;
  };
};

function Search({ params: { term } }: Props) {
  if (!term) notFound();
  const termToUse = decodeURI(term);
  return <div>this is the Search page: {termToUse}</div>;
}

export default Search;
