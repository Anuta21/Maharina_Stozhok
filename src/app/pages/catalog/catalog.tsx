import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { NavBar, Footer, CheckMark } from "../../components";
import { ST1, ST2, ST4, Color } from "../../common/assets";
import { Client, IBook } from "../../services";
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
  MobileFilterHeader,
  MobileFilterWrapper,
  OrdinaryFilterWrapper,
} from "./styles";
import { sortItems } from "./constants";
import {
  IBookData,
  IFilterItemsShow,
  IFilterOptions,
  IFilterProps,
} from "./models";

export const CatalogPage: React.FC = () => {
  const navigate = useNavigate();
  const [, setParams] = useSearchParams();

  const [page, setPage] = useState(0);
  const [searchValue, setSearchValue] = useState("");
  const [books, setBooks] = useState<Array<IBook>>([]);
  const [booksToShow, setBooksToShow] = useState<Array<IBook>>([]);
  const [filteredBooks, setFilteredBooks] = useState<Array<IBook>>([]);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const [filterOptions, setFilterOptions] = useState({
    sort: "",
    author: [],
    genre: [],
    price: { from: 0, to: 1000 },
  } as IFilterOptions);

  const client = new Client();

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

  useEffect(() => {
    if (searchValue.length >= 3) {
      const newBooks = books.filter((book) =>
        book.title
          .toLocaleLowerCase()
          .includes(searchValue.toLocaleLowerCase().trim())
      );
      setBooksToShow(newBooks);
    } else {
      setBooksToShow(books);
    }
  }, [searchValue]);

  useEffect(() => {
    async function getBooks() {
      try {
        const responseData = (await client.books.getBooks()).data;
        const prices = responseData.map((book) => book.price);
        const minPrice = Math.min(...prices);
        const maxPrice = Math.max(...prices);

        setFilterOptions((state) => ({
          ...state,
          price: { from: minPrice, to: maxPrice },
        }));
        setBooks(responseData);
        setBooksToShow(responseData);
        setFilteredBooks(responseData);
      } catch (error) {
        console.error(error);
      }
    }

    getBooks();
  }, []);

  return (
    <>
      <NavBar />
      <MobileFilterHeader
        onClick={() => setShowMobileFilter(!showMobileFilter)}
      >
        FILTER
      </MobileFilterHeader>
      {showMobileFilter && (
        <MobileFilterWrapper>
          <FilterComp
            isMobile={true}
            books={booksToShow}
            setBooks={setBooks}
            setFilteredBooks={setFilteredBooks}
            filterOptions={filterOptions}
            setFilterOptions={setFilterOptions}
          />
        </MobileFilterWrapper>
      )}
      <Wrapper>
        <ContentWrapper>
          <OrdinaryFilterWrapper>
            <FilterComp
              books={books}
              setBooks={setBooks}
              setFilteredBooks={setFilteredBooks}
              filterOptions={filterOptions}
              setFilterOptions={setFilterOptions}
            />
          </OrdinaryFilterWrapper>
          <RightPart>
            <SearchInputField
              placeholder="Search"
              maxLength={100}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <BooksSetWrapper>
              {books
                .filter(
                  (book) =>
                    booksToShow.includes(book) && filteredBooks.includes(book)
                )
                .slice(page * 15, page * 15 + 15)
                .map((book) => (
                  <BookCard
                    key={book._id}
                    image={book.imageUrl}
                    name={book.title}
                    price={book.price}
                    handleCardClick={() => navigate(`/book/${book._id}`)}
                  />
                ))}
            </BooksSetWrapper>
            <PaginationWrapper>
              <Pagination
                page={page + 1}
                count={Math.ceil(booksToShow.length / 15)}
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

const FilterComp: React.FC<IFilterProps> = ({
  isMobile = false,
  books,
  setBooks,
  setFilteredBooks,
  filterOptions,
  setFilterOptions,
}) => {
  const [showItems, setShowItems] = useState({
    sort: false,
    author: false,
    genre: false,
  } as IFilterItemsShow);

  const [genres, setGenres] = useState([] as Array<string>);
  const [authors, setAuthors] = useState([] as Array<string>);
  const [clickedSortBoxNumber, setClickedSortBoxNumber] = useState(2);

  const [pressedButtons, setPressedButtons] = useState({
    confirm: false,
    cancel: false,
  });

  const handlePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: string
  ) => {
    if (e.target.value.length < 4)
      setFilterOptions((state) => ({
        ...state,
        price: {
          ...state.price,
          [type]: e.target.value as unknown as number,
        },
      }));
  };

  useEffect(() => {
    setGenres(Array.from(new Set(books.map((book) => book.genre) || [])));
    setAuthors(Array.from(new Set(books.map((book) => book.author) || [])));
  }, [books]);

  const sortHandler = (sortItemIndex: number) => {
    if (
      (sortItemIndex === 0 &&
        filterOptions.sort === "From high price to low") ||
      (sortItemIndex === 1 && filterOptions.sort === "From low price to high")
    ) {
      setFilterOptions((state) => ({ ...state, sort: "" }));
      setClickedSortBoxNumber(2);
    } else if (sortItemIndex === 0) {
      setFilterOptions((state) => ({
        ...state,
        sort: "From high price to low",
      }));
      setClickedSortBoxNumber(0);
    } else if (sortItemIndex === 1) {
      setFilterOptions((state) => ({
        ...state,
        sort: "From low price to high",
      }));
      setClickedSortBoxNumber(1);
    }
  };

  const filterAuthors = (index: number) => {
    let currAuthors = filterOptions.author.slice();
    if (filterOptions.author.includes(authors[index])) {
      currAuthors = currAuthors.filter((author) => author !== authors[index]);
    } else {
      currAuthors.push(authors[index]);
    }
    setFilterOptions((state) => ({ ...state, author: currAuthors }));
  };

  const filterGenres = (index: number) => {
    let currGenres = filterOptions.genre.slice();
    if (filterOptions.genre.includes(genres[index])) {
      currGenres = currGenres.filter((genre) => genre !== genres[index]);
    } else {
      currGenres.push(genres[index]);
    }
    setFilterOptions((state) => ({ ...state, genre: currGenres }));
  };

  useEffect(() => {
    if (pressedButtons.confirm) {
      let currBooks = books.slice();

      if (filterOptions.author.length > 0) {
        currBooks = currBooks.filter((book) =>
          filterOptions.author.includes(book.author)
        );
      }

      if (filterOptions.genre.length > 0) {
        currBooks = currBooks.filter((book) =>
          filterOptions.genre.includes(book.genre)
        );
      }

      currBooks = currBooks.filter(
        (book) =>
          book.price <= filterOptions.price.to &&
          book.price >= filterOptions.price.from
      );

      if (filterOptions.sort.length > 0) {
        if (filterOptions.sort === "From high price to low") {
          setBooks(
            books.sort(function (a, b) {
              return b.price - a.price;
            })
          );
        } else if (filterOptions.sort === "From low price to high") {
          setBooks(
            books.sort(function (a, b) {
              return a.price - b.price;
            })
          );
        }
      }

      setFilteredBooks(currBooks);
      setPressedButtons((state) => ({ ...state, confirm: false }));
    } else if (pressedButtons.cancel) {
      const prices = books.map((book) => book.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      setFilterOptions({
        sort: "",
        author: [],
        genre: [],
        price: { from: minPrice, to: maxPrice },
      });
      setClickedSortBoxNumber(2);
      setFilteredBooks(books);
      setPressedButtons((state) => ({ ...state, cancel: false }));
    }
  }, [pressedButtons]);

  return (
    <FilterWrapper>
      {!isMobile && (
        <FilterHeader>
          <ST2> REFINE THE SELECTION</ST2>
        </FilterHeader>
      )}

      <FilterItem isMobile={isMobile}>
        <FilterShowedItem>
          <ST1>SORT</ST1>
          <PlusMinusButton
            onClick={() => {
              setShowItems((state) => ({ ...state, sort: !state.sort }));
              setFilterOptions((state) => ({ ...state, sort: "" }));
              setClickedSortBoxNumber(2);
            }}
          >
            {showItems.sort ? "–" : "+"}
          </PlusMinusButton>
        </FilterShowedItem>
        {showItems.sort && (
          <List>
            {sortItems.map((item, index) => (
              <ListItem key={index}>
                <CheckMark
                  updateChosencheckMarks={sortHandler}
                  checkMarkIndex={index}
                  hideChecking={
                    clickedSortBoxNumber !== index || pressedButtons.cancel
                  }
                />{" "}
                {item}
              </ListItem>
            ))}
          </List>
        )}
      </FilterItem>

      <FilterItem isMobile={isMobile}>
        <FilterShowedItem>
          <ST1>AUTHOR</ST1>
          <PlusMinusButton
            onClick={() => {
              setShowItems((state) => ({ ...state, author: !state.author }));
              setFilterOptions((state) => ({ ...state, author: [] }));
              if (showItems.author)
                setPressedButtons((state) => ({ ...state, confirm: true }));
            }}
          >
            {showItems.author ? "–" : "+"}
          </PlusMinusButton>
        </FilterShowedItem>
        {showItems.author && (
          <List>
            {authors.map((item, index) => (
              <ListItem key={index}>
                <CheckMark
                  updateChosencheckMarks={filterAuthors}
                  checkMarkIndex={index}
                  hideChecking={pressedButtons.cancel}
                />{" "}
                {item}
              </ListItem>
            ))}
          </List>
        )}
      </FilterItem>

      <FilterItem isMobile={isMobile}>
        <FilterShowedItem>
          <ST1>GENRE</ST1>
          <PlusMinusButton
            onClick={() => {
              setShowItems((state) => ({ ...state, genre: !state.genre }));
              setFilterOptions((state) => ({ ...state, genre: [] }));
              if (showItems.genre)
                setPressedButtons((state) => ({ ...state, confirm: true }));
            }}
          >
            {showItems.genre ? "–" : "+"}
          </PlusMinusButton>
        </FilterShowedItem>
        {showItems.genre && (
          <List>
            {genres.map((item, index) => (
              <ListItem key={index}>
                <CheckMark
                  updateChosencheckMarks={filterGenres}
                  checkMarkIndex={index}
                  hideChecking={pressedButtons.cancel}
                />{" "}
                {item}
              </ListItem>
            ))}
          </List>
        )}
      </FilterItem>

      <PriceFilterItem isMobile={isMobile}>
        <ST1 style={{ left: "0px" }}>PRICE</ST1>
        <PriceWrapper>
          <PriceInputFieldWrapper>
            <PriceInputField
              placeholder="from"
              type="number"
              value={filterOptions.price.from}
              onChange={(e) => handlePriceChange(e, "from")}
            />
            <UAHText>UAH</UAHText>
          </PriceInputFieldWrapper>
          <PriceInputFieldWrapper>
            <PriceInputField
              placeholder="to"
              type="number"
              value={filterOptions.price.to}
              onChange={(e) => handlePriceChange(e, "to")}
            />
            <UAHText>UAH</UAHText>
          </PriceInputFieldWrapper>
        </PriceWrapper>
      </PriceFilterItem>
      <Button
        isDark={true}
        onClick={() =>
          setPressedButtons((state) => ({ ...state, confirm: true }))
        }
      >
        <ST4 style={{ color: Color.White }}>CONFIRM</ST4>
      </Button>
      <Button
        isDark={false}
        onClick={() =>
          setPressedButtons((state) => ({ ...state, cancel: true }))
        }
      >
        <ST4>CANCEL</ST4>
      </Button>
    </FilterWrapper>
  );
};
