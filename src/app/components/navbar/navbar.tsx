import { useNavigate } from "react-router-dom";
import { Images, S2, T2, B1, ST1, ST2, ST3 } from "../../common/assets";
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
  BookItem,
  BookPic,
  BookInfo,
  AuthorName,
  ShortInfo,
  BookInteractButtons,
  DeleteButton,
  CountButton,
  PlusMinus,
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
            show={showAccount || showBasket}
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
  return (
    <Basket show={show} setShow={setShow}>
      <Bar>
        <Cross onClick={() => setShow?.(false)}>
          <ClearOutlined />
        </Cross>
        <T2>Your basket</T2>
        <ShoppingBagOutlined />
      </Bar>

      <BooksListComponent />

      <ButtonContainer>
        <BuyButton>
          <BuyButtonText>BUY</BuyButtonText>
        </BuyButton>
      </ButtonContainer>
    </Basket>
  );
};

export const BooksListComponent: React.FC = () => {
  return (
    <BooksList showScroll={books.length > maxBooksCountWithoutScroll}>
      {books.map((book, index) => (
        <BookItem key={index}>
          <BookPic src={book.picture}></BookPic>

          <BookInfo>
            <AuthorName>{book.author}</AuthorName>
            <ShortInfo>{`${book.info.slice(0, 100)}...`}</ShortInfo>

            <BookInteractButtons>
              <CountButton>
                <PlusMinus>
                  <S2>−</S2>
                </PlusMinus>

                <ST1>1</ST1>

                <PlusMinus>
                  <S2>+</S2>
                </PlusMinus>
              </CountButton>

              <DeleteButton>
                <B1>DELETE</B1>
              </DeleteButton>
            </BookInteractButtons>
          </BookInfo>

          <ST2>{`${book.price} ГРН`}</ST2>
        </BookItem>
      ))}
    </BooksList>
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
