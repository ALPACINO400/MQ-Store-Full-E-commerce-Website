import React from "react";

const PaginationComponent = () => {
  const { pageNumber, setPageNumber, pageSize, totalPages } =
    useContext(ProductContext);

  console.log(pageNumber);

  const handlePageChange = (event, value) => {
    setPageNumber(value);
  };

  return (
    <Pagination
      count={totalPages}
      page={pageNumber}
      onChange={handlePageChange}
      variant="outlined"
      shape="rounded"
      sx={{ marginTop: 3 }}
    />
  );
};

export default PaginationComponent;
