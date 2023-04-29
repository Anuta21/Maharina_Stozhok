import { useNavigate } from "react-router-dom";
import { ST1, Color } from "../../common/assets";
import {
  helpConstants,
  infoConstants,
  sectionsConstants,
  networkConstants,
} from "./constants";
import {
  FooterWrapper,
  TopFooterWrapper,
  BottomFooterWrapper,
  TopItem,
  BottomItem,
  Header,
  List,
  ListItem,
} from "./styles";

export const Footer: React.FC = () => {
  const navigate = useNavigate();

  const sectionClick = (item: string) => {
    switch (item) {
      case sectionsConstants[0]:
        navigate("/catalog");
        break;
      case sectionsConstants[1]:
        navigate("/about-us");
        break;
      case sectionsConstants[2]:
        navigate("/contact");
        break;
    }
  };
  return (
    <FooterWrapper>
      <TopFooterWrapper>
        <TopItem>
          <Header>FREE DELIVERY</Header>
          <ST1> Delivery within 48 hours, free from 1000 UAH purchase.</ST1>
        </TopItem>
        <TopItem>
          <Header>CONTUCT US</Header>
          <ST1>
            book.store@gmail.com <br /> +38 067 566 23 23
          </ST1>
        </TopItem>
        <TopItem>
          <Header>OUR GIFT</Header>
          <ST1>Free book available for all order over 2000 UAH.</ST1>
        </TopItem>
      </TopFooterWrapper>
      <BottomFooterWrapper>
        <BottomItem>
          <Header style={{ color: Color.White }}>HELP</Header>
          <List>
            {helpConstants.map((item, index) => (
              <li key={index}>
                <ListItem onClick={() => navigate("/about-us")}>
                  {item}
                </ListItem>
              </li>
            ))}
          </List>
        </BottomItem>
        <BottomItem>
          <Header style={{ color: Color.White }}>INFORMATION</Header>
          <List>
            {infoConstants.map((item, index) => (
              <li key={index}>
                <ListItem onClick={() => navigate("/about-us")}>
                  {item}
                </ListItem>
              </li>
            ))}
          </List>
        </BottomItem>
        <BottomItem>
          <Header style={{ color: Color.White }}>SECTIONS</Header>
          <List>
            {sectionsConstants.map((item, index) => (
              <li key={index}>
                <ListItem onClick={() => sectionClick(item)}>{item}</ListItem>
              </li>
            ))}
          </List>
        </BottomItem>
        <BottomItem>
          <Header style={{ color: Color.White }}>SOCIAL NETWORK</Header>
          <List>
            {networkConstants.map((item, index) => (
              <li key={index}>
                <a href={item.link}>
                  <ListItem>{item.name}</ListItem>
                </a>
              </li>
            ))}
          </List>
        </BottomItem>
      </BottomFooterWrapper>
    </FooterWrapper>
  );
};
