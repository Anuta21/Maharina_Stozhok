import { useNavigate } from "react-router-dom";
import { Images } from "../../common/assets";
import { navigationTitles } from "./constants";
import {
  CenterItems,
  NavigationItem,
  NavigationWrapper,
  BookIcon,
  RightNavigationPart,
  UserIcon,
  BasketIcon,
} from "./styles";

export const NavBar: React.FC = () => {
  const navigate = useNavigate();
  const navBarClick = (item: string) => {
    switch (item) {
      case navigationTitles[0]:
        navigate("/catalog");
        break;
      case navigationTitles[1]:
        // add navigation
        break;
      case navigationTitles[2]:
        // add navigation
        break;
    }
  };
  return (
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
        <BasketIcon src={Images.basket} alt="basket" />
      </RightNavigationPart>
    </NavigationWrapper>
  );
};
