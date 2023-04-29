import { useNavigate } from "react-router-dom";
import { Images, T2 } from "../../common/assets";
import {
  books,
  maxBooksCountWithoutScroll,
  navigationTitles,
} from "./constants";
import {
  CenterItems,
  NavigationItem,
  NavigationWrapper,
  BookIcon,
  RightNavigationPart,
  UserIcon,
  BasketIcon,
  Basket,
  Wrapper,
  BasketBar,
  BooksList,
  ButtonContainer,
  BuyButton,
  BuyButtonText,
  Cross,
} from "./styles";
import { ShoppingBagOutlined, ClearOutlined } from "@mui/icons-material";
import { useState } from "react";
import { IBasketComponentProps } from "./models";
import { BookItemComponent } from "../book-item-short-info";

export const NavBar: React.FC = () => {
  const [showBasket, setShowBasket] = useState(false);
  const navigate = useNavigate();
  const navBarClick = (item: string) => {
    switch (item) {
      case navigationTitles[0]:
        navigate("/catalog");
        break;
      case navigationTitles[1]:
        navigate("/about-us");
        break;
      case navigationTitles[2]:
        navigate("/contact");
        break;
    }
  };

  return (
    <Wrapper>
      <BasketComponent
        show={showBasket}
        setShow={setShowBasket}
      ></BasketComponent>
      <NavigationWrapper>
        <BookIcon
          src={Images.bookIcon}
          alt="bookIcon"
          onClick={() => navigate("/")}
        />
        <CenterItems>
          {navigationTitles.map((item, index) => (
            <NavigationItem key={index} onClick={() => navBarClick(item)}>
              {item}
            </NavigationItem>
          ))}
        </CenterItems>
        <RightNavigationPart>
          <UserIcon src={Images.userIcon} alt="userIcon" />
          <BasketIcon
            src={Images.basket}
            alt="basket"
            onClick={() => setShowBasket(true)}
          />
        </RightNavigationPart>
      </NavigationWrapper>
    </Wrapper>
  );
};

export const BasketComponent: React.FC<IBasketComponentProps> = ({
  show,
  setShow,
}) => {
  return (
    <Basket show={show} setShow={setShow}>
      <BasketBar>
        <Cross onClick={() => setShow?.(false)}>
          <ClearOutlined />
        </Cross>
        <T2>Your basket</T2>
        <ShoppingBagOutlined />
      </BasketBar>

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

      <ButtonContainer>
        <BuyButton>
          <BuyButtonText>BUY</BuyButtonText>
        </BuyButton>
      </ButtonContainer>
    </Basket>
  );
};
