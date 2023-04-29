import { S1 } from "../../common/assets";
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
  ConfirmButton,
  TextButton,
  CardFrame,
  LongInputField,
  ShortInputField,
  ShortInputsContainer,
  InputHeader,
  LongInputContainer,
  CardImagesContainer,
  VisaMasterCardImage,
} from "./styles";
import logo from "./images/visa-mastercard-logo.png";
import { useNavigate } from "react-router-dom";

export const PaymentPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <NavBar />
      <MainContainer>
        <LeftPart>
          <LeftHeader>Payment</LeftHeader>
          <S1>All transactions are secure and encrypted</S1>
          <PaymentCardComponent />
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
          <ConfirmButton onClick={() => navigate("")}>
            <TextButton>CONFIRM DELIVERY</TextButton>
          </ConfirmButton>
        </RightPart>
      </MainContainer>
    </Wrapper>
  );
};

const RightPartPriceComponent: React.FC = () => {
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

const PaymentCardComponent: React.FC = () => {
  return (
    <CardFrame>
      <CardImagesContainer>
        <VisaMasterCardImage src={logo} />
      </CardImagesContainer>

      <LongInputContainer>
        <InputHeader>Card Number</InputHeader>
        <LongInputField />
      </LongInputContainer>

      <ShortInputsContainer>
        <div>
          <InputHeader>Date</InputHeader>
          <ShortInputField />
        </div>

        <div>
          <InputHeader>CVV</InputHeader>
          <ShortInputField />
        </div>
      </ShortInputsContainer>
    </CardFrame>
  );
};
