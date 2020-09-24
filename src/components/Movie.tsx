import { Box, Text } from "@chakra-ui/core";
import React from "react";
import { Movie as MovieType } from "../types";

export interface MovieProps {
  movie: MovieType;
}
export const Movie: React.FC<MovieProps> = ({ movie }) => {
  return (
    <Box width={300} p={4} data-testid="movie">
      <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} />
      <Text my={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {movie.original_title}
      </Text>
      <Text lineHeight="short">{movie.overview}</Text>
    </Box>
  );
};
