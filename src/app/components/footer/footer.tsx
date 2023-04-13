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
            {helpConstants.map((item) => (
              <li>
                <ListItem>{item}</ListItem>
              </li>
            ))}
          </List>
        </BottomItem>
        <BottomItem>
          <Header style={{ color: Color.White }}>INFORMATION</Header>
          <List>
            {infoConstants.map((item) => (
              <li>
                <ListItem>{item}</ListItem>
              </li>
            ))}
          </List>
        </BottomItem>
        <BottomItem>
          <Header style={{ color: Color.White }}>SECTIONS</Header>
          <List>
            {sectionsConstants.map((item) => (
              <li>
                <ListItem>{item}</ListItem>
              </li>
            ))}
          </List>
        </BottomItem>
        <BottomItem>
          <Header style={{ color: Color.White }}>SOCIAL NETWORK</Header>
          <List>
            {networkConstants.map((item) => (
              <li>
                <ListItem>{item}</ListItem>
              </li>
            ))}
          </List>
        </BottomItem>
      </BottomFooterWrapper>
    </FooterWrapper>
  );
};
