import { useNavigate } from "react-router-dom";
import { T2 } from "../../common/assets";
import { BookItemComponent, NavBar } from "../../components";
import { useAppSelector } from "../../store";
import { maxBooksCountWithoutScroll } from "../../components/navbar/constants";
import {
  RightPart,
  Wrapper,
  LeftPart,
  MainContainer,
  BooksList,
  PriceUnderlinedItem,
  UnderlinedHeader,
  UnderlinedPrice,
  Line,
  LeftHeader,
  InputField,
  InputHeader,
  OrderButton,
  TextButton,
} from "./styles";
import { useEffect, useState } from "react";

export const DeliveryCardPage: React.FC = () => {
  const { books } = useAppSelector((state) => state.persistedReducer.basket);
  const [activeOrderButton, setActiveOrderButton] = useState(true);
  const { token } = useAppSelector((state) => state.persistedReducer.user);

  useEffect(() => {
    setActiveOrderButton(Object.values(books).length > 0);
  }, [books]);

  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (activeOrderButton && token !== "" && token) navigate("/payment");
    else if (token === "") navigate("/login");
  }
  return (
    <Wrapper>
      <NavBar />
      <MainContainer>
        <LeftPart>
          <LeftHeader>Delivery Information</LeftHeader>
          <form onSubmit={handleSubmit}>
            <DeliveryForm />
            <T2>Free delivery from 1000 UAH purchase.</T2>
            <T2>Free book available for all order over 2000 UAH.</T2>
            <OrderButton type="submit" active={activeOrderButton}>
              <TextButton>ORDER</TextButton>
            </OrderButton>
          </form>
        </LeftPart>

        <RightPart>
          <BooksList
            showScroll={Object.keys(books).length > maxBooksCountWithoutScroll}
          >
            {Object.keys(books).map((book, index) => (
              <BookItemComponent
                key={index}
                id={book}
                picture={books[book].link}
                name={books[book].name}
                info={books[book].info}
                price={books[book].price}
                number={books[book].number}
              />
            ))}
          </BooksList>
          <RightPartPriceComponent />
        </RightPart>
      </MainContainer>
    </Wrapper>
  );
};

export const DeliveryForm: React.FC = () => {
  return (
    <>
      <InputHeader>Name</InputHeader>
      <InputField type="text" required />

      <InputHeader>Surame</InputHeader>
      <InputField type="text" required />

      <InputHeader>City</InputHeader>
      <InputField type="text" required />

      <InputHeader>Street and number</InputHeader>
      <InputField type="text" required />

      <InputHeader>Phone</InputHeader>
      <InputField type="text" required />
    </>
  );
};

export const RightPartPriceComponent: React.FC = () => {
  const { books } = useAppSelector((state) => state.persistedReducer.basket);

  const [price, setPrice] = useState(0);

  useEffect(() => {
    function countPrice() {
      const prices = Object.values(books).map(
        (book) => book.price * book.number
      );
      const totalPrice = prices.reduce((num1, num2) => num1 + num2, 0);
      setPrice(totalPrice);
    }

    if (Object.values(books) && Object.values(books).length > 0) countPrice();
    else {
      setPrice(0);
    }
  }, [books]);
  return (
    <>
      <PriceUnderlinedItem>
        <UnderlinedHeader>Subtotal</UnderlinedHeader>
        <UnderlinedPrice>{price} hrn</UnderlinedPrice>
        <Line />
      </PriceUnderlinedItem>
      <PriceUnderlinedItem>
        <UnderlinedHeader>Delivery</UnderlinedHeader>
        <UnderlinedPrice>{price === 0 ? 0 : 50} hrn</UnderlinedPrice>
        <Line />
      </PriceUnderlinedItem>
      <PriceUnderlinedItem>
        <UnderlinedHeader>Total</UnderlinedHeader>
        <UnderlinedPrice>{price === 0 ? 0 : price + 50} hrn</UnderlinedPrice>
      </PriceUnderlinedItem>
    </>
  );
};
