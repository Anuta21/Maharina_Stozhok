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
  AddButton,
  TextButton,
} from "./styles";

export const DeliveryCardPage: React.FC = () => {
  return (
    <Wrapper>
      <NavBar />
      <MainContainer>
        <LeftPart>
          <LeftHeader>Delivery Information</LeftHeader>
          <DeliveryForm />
          <T2>Free delivery from 1000 UAH purchase.</T2>
          <T2>Free book available for all order over 2000 UAH.</T2>
        </LeftPart>

        <RightPart>
          <BooksList showScroll={books.length > maxBooksCountWithoutScroll}>
            {books.map((book, index) => (
              <BookItemComponent
                key={index}
                picture={book.picture}
                name={book.name}
                info={book.info}
                price={book.price}
                number={book.number}
              />
            ))}
          </BooksList>
          <RightPartPriceComponent />
          <AddButton>
            <TextButton>ADD TO CART</TextButton>
          </AddButton>
        </RightPart>
      </MainContainer>
    </Wrapper>
  );
};

export const DeliveryForm: React.FC = () => {
  return (
    <form>
      <InputHeader>Name</InputHeader>
      <InputField></InputField>

      <InputHeader>Surame</InputHeader>
      <InputField></InputField>

      <InputHeader>City</InputHeader>
      <InputField></InputField>

      <InputHeader>Street and number</InputHeader>
      <InputField></InputField>

      <InputHeader>Phone</InputHeader>
      <InputField></InputField>
    </form>
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
