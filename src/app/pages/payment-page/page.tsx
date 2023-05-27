import { S1 } from "../../common/assets";
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
import { useEffect, useState } from "react";
import { Client } from "../../services";
import { IRightPartPriceComponent } from "./models";

export const PaymentPage: React.FC = () => {
  const { books } = useAppSelector((state) => state.persistedReducer.basket);
  const { token, id } = useAppSelector((state) => state.persistedReducer.user);
  const [activeConfirmButton, setActiveConfirmButton] = useState(true);

  useEffect(() => {
    setActiveConfirmButton(Object.values(books).length > 0);
  }, [books]);

  const navigate = useNavigate();
  const client = new Client();

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

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (activeConfirmButton) {
      const orderId = (
        await client.orders.putOrder({ userId: id, sum: price + 50 }, token)
      ).data._id;
      navigate("/thanks", { state: { orderId } });
    }
  }

  return (
    <Wrapper>
      <NavBar />
      <MainContainer>
        <LeftPart>
          <LeftHeader>Payment</LeftHeader>
          <S1>All transactions are secure and encrypted</S1>
          <form onSubmit={handleSubmit}>
            <PaymentCardComponent />
            <ConfirmButton type="submit" active={activeConfirmButton}>
              <TextButton>CONFIRM DELIVERY</TextButton>
            </ConfirmButton>
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
          <RightPartPriceComponent price={price} />
        </RightPart>
      </MainContainer>
    </Wrapper>
  );
};

const RightPartPriceComponent: React.FC<IRightPartPriceComponent> = ({
  price,
}) => {
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

const PaymentCardComponent: React.FC = () => {
  return (
    <CardFrame>
      <CardImagesContainer>
        <VisaMasterCardImage src={logo} />
      </CardImagesContainer>

      <LongInputContainer>
        <InputHeader>Card Number</InputHeader>
        <LongInputField type="text" pattern="[0-9]{16}" required />
      </LongInputContainer>

      <ShortInputsContainer>
        <div>
          <InputHeader>Date</InputHeader>
          <ShortInputField type="text" required />
        </div>

        <div>
          <InputHeader>CVV</InputHeader>
          <ShortInputField type="text" pattern="[0-9]{3}" required />
        </div>
      </ShortInputsContainer>
    </CardFrame>
  );
};
