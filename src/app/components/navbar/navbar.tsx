import { useNavigate } from "react-router-dom";
import { Images, T2, ST3 } from "../../common/assets";
import { BookItemComponent } from "../book-item-short-info";
import {
  books,
  maxBooksCountWithoutScroll,
  navigationTitles,
  user,
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
  Bar,
  BooksList,
  ButtonContainer,
  BuyButton,
  BuyButtonText,
  Cross,
  Account,
  InnerPartAccount,
  Exit,
} from "./styles";
import {
  ShoppingBagOutlined,
  ClearOutlined,
  ExitToApp,
} from "@mui/icons-material";
import { useState } from "react";
import { IShowComponentProps, IAccountComponentProps } from "./models";

export const NavBar: React.FC = () => {
  const [showBasket, setShowBasket] = useState(false);
  const [showAccount, setShowAccount] = useState(false);

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
      {showAccount && <AccountComponent user={user} setShow={setShowAccount} />}
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
          <UserIcon
            src={Images.userIcon}
            alt="userIcon"
            onClick={() => setShowAccount(true)}
            show={showAccount || showBasket}
          />
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

export const BasketComponent: React.FC<IShowComponentProps> = ({
  show,
  setShow,
}) => {
  const navigate = useNavigate();
  return (
    <Basket show={show} setShow={setShow}>
      <Bar>
        <Cross onClick={() => setShow?.(false)}>
          <ClearOutlined />
        </Cross>
        <T2>Your basket</T2>
        <ShoppingBagOutlined />
      </Bar>

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
        <BuyButton onClick={() => navigate("/delivery")}>
          <BuyButtonText>BUY</BuyButtonText>
        </BuyButton>
      </ButtonContainer>
    </Basket>
  );
};

export const AccountComponent: React.FC<IAccountComponentProps> = ({
  setShow,
  user,
}) => {
  const navigate = useNavigate();
  return (
    <Account>
      <Bar>
        <Cross onClick={() => setShow(false)}>
          <ClearOutlined />
        </Cross>
        <T2>Account</T2>
        <Exit onClick={() => navigate("/login")}>
          <ExitToApp />
        </Exit>
      </Bar>
      <InnerPartAccount>
        <ST3>
          Hi, {user.name}!<br /> Your email: {user.email}
        </ST3>
      </InnerPartAccount>
    </Account>
  );
};
