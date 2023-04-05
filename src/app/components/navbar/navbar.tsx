import bookIcon from "../../common/assets/images/book-icon.svg";
import userIcon from "../../common/assets/images/user-icon.svg";
import basket from "../../common/assets/images/basket.svg";
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
  return (
    <NavigationWrapper>
      <BookIcon src={bookIcon} alt="bookIcon" />
      <CenterItems>
        {navigationTitles.map((item, index) => (
          <NavigationItem key={index}>{item}</NavigationItem>
        ))}
      </CenterItems>
      <RightNavigationPart>
        <UserIcon src={userIcon} alt="userIcon" />
        <BasketIcon src={basket} alt="basket" />
      </RightNavigationPart>
    </NavigationWrapper>
  );
};
