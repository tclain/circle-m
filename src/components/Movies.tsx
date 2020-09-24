import { Flex } from "@chakra-ui/core";
import React from "react";
import { Movie as MovieType } from "../types";
import { Movie } from "./Movie";

export interface MoviesProps {
  movies: MovieType[];
}

export const Movies: React.FC<MoviesProps> = ({ movies }) => {
  return (
    <Flex flexWrap="wrap">
      {movies.map((movie) => (
        <Movie movie={movie} key={movie.id} />
      ))}
    </Flex>
  );
};
