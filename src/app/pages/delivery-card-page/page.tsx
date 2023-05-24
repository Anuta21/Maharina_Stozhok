import { useNavigate } from "react-router-dom";
import { T2 } from "../../common/assets";
import { BookItemComponent, NavBar } from "../../components";
import {
  books,
  maxBooksCountWithoutScroll,
} from "../../components/navbar/constants";
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

export const DeliveryCardPage: React.FC = () => {
  const navigate = useNavigate();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/payment");
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
            <OrderButton type="submit">
              <TextButton>ORDER</TextButton>
            </OrderButton>
          </form>
        </LeftPart>

        <RightPart>
          <BooksList showScroll={books.length > maxBooksCountWithoutScroll}>
            {books.map((book, index) => (
              <BookItemComponent
                key={index}
                id={"id"}
                picture={book.picture}
                name={book.name}
                info={book.info}
                price={book.price}
                number={book.number}
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
  return (
    <>
      <PriceUnderlinedItem>
        <UnderlinedHeader>Subtotal</UnderlinedHeader>
        <UnderlinedPrice>100 hrn</UnderlinedPrice>
        <Line />
      </PriceUnderlinedItem>
      <PriceUnderlinedItem>
        <UnderlinedHeader>Delivery</UnderlinedHeader>
        <UnderlinedPrice>50 hrn</UnderlinedPrice>
        <Line />
      </PriceUnderlinedItem>
      <PriceUnderlinedItem>
        <UnderlinedHeader>Total</UnderlinedHeader>
        <UnderlinedPrice>150 hrn</UnderlinedPrice>
      </PriceUnderlinedItem>
    </>
  );
};
