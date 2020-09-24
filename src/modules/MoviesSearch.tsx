import React from "react";
import { Box, Flex, Input, Spinner } from "@chakra-ui/core";
import { Movies } from "../components/Movies";
import { useSearchMovies } from "./useSearchMovies";

export const MovieSearch: React.FC = () => {
  const { execute, loading, status, data } = useSearchMovies();
  const handleOnChange = (e) => execute({ query: e.target.value, page: 1 });

  return (
    <Box width={1200} marginLeft="auto" marginRight="auto" my={8}>
      <Flex align="center">
        <Input
          role="input"
          placeholder="Search movies..."
          onChange={handleOnChange}
        />
      </Flex>

      <Flex alignItems="center" direction="column">
        {loading && <Spinner />}
        {status === "success" && data && <Movies movies={data.results} />}
      </Flex>
    </Box>
  );
};
