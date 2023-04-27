import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { NavBar, Footer } from "../../components";
import { ST1 } from "../../common/assets";
import {
  Wrapper,
  BookCardWrapper,
  BookImage,
  BooksSetWrapper,
  ContentWrapper,
  FilterComp,
  RightPart,
  InputField,
  PaginationWrapper,
} from "./styles";
import { booksData } from "./constants";
import { IBookData } from "./models";

export const CatalogPage: React.FC = () => {
  const navigate = useNavigate();
  const [, setParams] = useSearchParams();

  const [page, setPage] = useState(0);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value - 1);
    setParams({ page: `${value - 1}` });
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);
  return (
    <>
      <NavBar />
      <Wrapper>
        <ContentWrapper>
          <FilterComp>Filter</FilterComp>
          <RightPart>
            <InputField placeholder="Search" />
            <BooksSetWrapper>
              {booksData.slice(page * 30, page * 30 + 30).map((book, index) => (
                <BookCard
                  key={index}
                  image={book.image}
                  name={book.name}
                  price={book.price}
                  handleCardClick={() => navigate(`/book/${index}`)}
                />
              ))}
            </BooksSetWrapper>
            <PaginationWrapper>
              <Pagination
                page={page + 1}
                count={Math.ceil(booksData.length / 30)}
                onChange={handlePageChange}
                shape="rounded"
              />
            </PaginationWrapper>
          </RightPart>
        </ContentWrapper>
      </Wrapper>
      <Footer />
    </>
  );
};

const BookCard: React.FC<IBookData> = ({
  image,
  name,
  price,
  handleCardClick,
}) => {
  return (
    <BookCardWrapper onClick={handleCardClick}>
      <BookImage src={image} />
      <ST1>
        {name} <br />
        {price} UAH
      </ST1>
    </BookCardWrapper>
  );
};
