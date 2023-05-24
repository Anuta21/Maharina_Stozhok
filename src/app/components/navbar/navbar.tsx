import { useNavigate } from "react-router-dom";
import { Images, T2, ST3 } from "../../common/assets";
import { userSlice, useAppSelector, useAppDispatch } from "../../store";
import { BookItemComponent } from "../book-item-short-info";
import { maxBooksCountWithoutScroll, navigationTitles } from "./constants";
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
  BurgerIcon,
  BurgerMenu,
  BurgerMenuItem,
  BurgerMenuContent,
  LoginButton,
} from "./styles";
import {
  ShoppingBagOutlined,
  ClearOutlined,
  ExitToApp,
} from "@mui/icons-material";
import { useState } from "react";
import {
  IShowComponentProps,
  IAccountComponentProps,
  IBurgerProps,
} from "./models";

export const NavBar: React.FC = () => {
  const [showBasket, setShowBasket] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

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

  const accountClick = () => {
    setShowBurgerMenu(false);
    setShowAccount(true);
  };

  const basketClick = () => {
    setShowBurgerMenu(false);
    setShowBasket(true);
  };

  return (
    <Wrapper>
      {showAccount && <AccountComponent setShow={setShowAccount} />}
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
      <BurgerIcon
        onClick={() => setShowBurgerMenu(!showBurgerMenu)}
        src={showBurgerMenu ? Images.cross : Images.burger}
        alt="burger"
      />
      {showBurgerMenu && (
        <Burger
          accountClick={accountClick}
          basketClick={basketClick}
          navBarClick={navBarClick}
        />
      )}
    </Wrapper>
  );
};

export const BasketComponent: React.FC<IShowComponentProps> = ({
  show,
  setShow,
}) => {
  const navigate = useNavigate();

  const { books } = useAppSelector((state) => state.persistedReducer.basket);

  return (
    <Basket show={show} setShow={setShow}>
      <Bar>
        <Cross onClick={() => setShow?.(false)}>
          <ClearOutlined />
        </Cross>
        <T2>Your basket</T2>
        <ShoppingBagOutlined />
      </Bar>

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
}) => {
  const { name, email, token } = useAppSelector(
    (state) => state.persistedReducer.user
  );
  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  return (
    <Account>
      <Bar>
        <Cross onClick={() => setShow(false)}>
          <ClearOutlined />
        </Cross>
        <T2>Account</T2>

        <Exit
          show={token.length > 0}
          onClick={() => {
            if (token.length > 0) {
              dispatch(setUser({ id: "", name: "", email: "", token: "" }));
              navigate("/login");
            }
          }}
        >
          <ExitToApp />
        </Exit>
      </Bar>
      <InnerPartAccount>
        {token ? (
          <ST3>
            Hi, {name}!<br /> Your email: {email}
          </ST3>
        ) : (
          <ST3>
            Please
            <LoginButton onClick={() => navigate("/login")}>
              &nbsp;Login
            </LoginButton>
            .
          </ST3>
        )}
      </InnerPartAccount>
    </Account>
  );
};

export const Burger: React.FC<IBurgerProps> = ({
  accountClick,
  basketClick,
  navBarClick,
}) => {
  return (
    <BurgerMenu>
      <BurgerMenuContent style={{ listStyleType: "none" }}>
        {navigationTitles.map((item, index) => (
          <BurgerMenuItem onClick={() => navBarClick(item)} key={index}>
            {item}
          </BurgerMenuItem>
        ))}
        <BurgerMenuItem onClick={accountClick}>ACCOUNT</BurgerMenuItem>
        <BurgerMenuItem onClick={basketClick}>BASKET</BurgerMenuItem>
      </BurgerMenuContent>
    </BurgerMenu>
  );
};
