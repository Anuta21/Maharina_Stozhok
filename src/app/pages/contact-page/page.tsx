import { S1 } from "../../common/assets";
import { Footer, NavBar } from "../../components";
import { contactsList } from "./constants";
import {
  ContactHeader,
  InfoContainer,
  InfoText,
  Map,
  MapContainer,
  Wrapper,
} from "./styles";

export const ContactPage: React.FC = () => {
  return (
    <>
      <Wrapper>
        <NavBar />
        <InfoContainer>
          <ContactHeader>Contacts:</ContactHeader>
          {contactsList.map((item, index) => (
            <InfoText key={index}>
              <S1>{item}</S1>
            </InfoText>
          ))}
        </InfoContainer>
        <MapContainer>
          <Map
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.383123416453!2d30.484604576300118!3d50.489826871599675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cdf081c00001%3A0x4d700b00adfe8f0e!2z0JLQuNC00LDQstC90LjRhtGC0LLQviDQodGC0LDRgNC-0LPQviDQm9C10LLQsA!5e0!3m2!1sru!2sua!4v1682254072743!5m2!1sru!2sua"
            loading="lazy"
          ></Map>
        </MapContainer>
      </Wrapper>
      <Footer />
    </>
  );
};
