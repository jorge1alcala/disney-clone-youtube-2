import React from "react";
type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

const Genre = ({ params: { id }, searchParams: { genre } }: Props) => {
  return (
    <div>
      <h2>
        Welcome to Genre Page: {id} and movies: {genre}{" "}
      </h2>
    </div>
  );
};

export default Genre;
