import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { NavBar, Footer, CheckMark } from "../../components";
import { ST1, ST2, ST4, Color } from "../../common/assets";
import {
  Wrapper,
  BookCardWrapper,
  BookImage,
  BooksSetWrapper,
  ContentWrapper,
  FilterWrapper,
  FilterHeader,
  FilterItem,
  FilterShowedItem,
  RightPart,
  SearchInputField,
  PaginationWrapper,
  Button,
  PlusMinusButton,
  PriceInputField,
  PriceInputFieldWrapper,
  UAHText,
  PriceWrapper,
  PriceFilterItem,
  List,
  ListItem,
} from "./styles";
import { booksData, sortItems, genres, authors } from "./constants";
import { IBookData, IFilterItemsShow, IFilterPriceProps } from "./models";

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
          <FilterComp />
          <RightPart>
            <SearchInputField placeholder="Search" maxLength={100} />
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

const FilterComp: React.FC = () => {
  const [priceProps, setPriceProps] = useState<IFilterPriceProps>({
    from: "",
    to: "",
  });
  const [showItems, setShowItems] = useState({
    sort: false,
    author: false,
    genre: false,
  } as IFilterItemsShow);

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    if (e.target.value.length < 4)
      setPriceProps((state) => ({
        ...state,
        [type]: e.target.value,
      }));
  };

  return (
    <FilterWrapper>
      <FilterHeader>
        <ST2> REFINE THE SELECTION</ST2>
      </FilterHeader>

      <FilterItem>
        <FilterShowedItem>
          <ST1>SORT</ST1>
          <PlusMinusButton
            onClick={() =>
              setShowItems((state) => ({ ...state, sort: !state.sort }))
            }
          >
            {showItems.sort ? "–" : "+"}
          </PlusMinusButton>
        </FilterShowedItem>
        {showItems.sort && (
          <List>
            {sortItems.map((item, index) => (
              <ListItem key={index}>
                <CheckMark /> {item}
              </ListItem>
            ))}
          </List>
        )}
      </FilterItem>

      <FilterItem>
        <FilterShowedItem>
          <ST1>AUTHOR</ST1>
          <PlusMinusButton
            onClick={() =>
              setShowItems((state) => ({ ...state, author: !state.author }))
            }
          >
            {showItems.author ? "–" : "+"}
          </PlusMinusButton>
        </FilterShowedItem>
        {showItems.author && (
          <List>
            {authors.map((item, index) => (
              <ListItem key={index}>
                <CheckMark /> {item}
              </ListItem>
            ))}
          </List>
        )}
      </FilterItem>

      <FilterItem>
        <FilterShowedItem>
          <ST1>GENRE</ST1>
          <PlusMinusButton
            onClick={() =>
              setShowItems((state) => ({ ...state, genre: !state.genre }))
            }
          >
            {showItems.genre ? "–" : "+"}
          </PlusMinusButton>
        </FilterShowedItem>
        {showItems.genre && (
          <List>
            {genres.map((item, index) => (
              <ListItem key={index}>
                <CheckMark /> {item}
              </ListItem>
            ))}
          </List>
        )}
      </FilterItem>

      <PriceFilterItem>
        <ST1 style={{ left: "0px" }}>PRICE</ST1>
        <PriceWrapper>
          <PriceInputFieldWrapper>
            <PriceInputField
              placeholder="from"
              type="number"
              value={priceProps.from}
              onChange={(e) => handlePriceChange(e, "from")}
            />
            <UAHText>UAH</UAHText>
          </PriceInputFieldWrapper>
          <PriceInputFieldWrapper>
            <PriceInputField
              placeholder="to"
              type="number"
              value={priceProps.to}
              onChange={(e) => handlePriceChange(e, "to")}
            />
            <UAHText>UAH</UAHText>
          </PriceInputFieldWrapper>
        </PriceWrapper>
      </PriceFilterItem>
      <Button isDark={true}>
        <ST4 style={{ color: Color.White }}>CONFIRM</ST4>
      </Button>
      <Button isDark={false}>
        <ST4>CANCEL</ST4>
      </Button>
    </FilterWrapper>
  );
};
