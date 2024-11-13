import { Box, Pagination } from "@mui/material";

import { ProductContext } from "../Context/ProductContext";
import { useContext } from "react";

const PaginationComp = () => {
  const { pageNumber, setPageNumber, pageSize, totalPages } =
    useContext(ProductContext);

  console.log(pageNumber);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
      <Pagination
        count={totalPages}
        page={pageNumber}
        onChange={handlePageChange}
        variant="outlined"
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "white",
          },
        }}
      />
    </Box>
  );
};

export default PaginationComp;
