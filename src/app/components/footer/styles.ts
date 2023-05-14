import styled from "styled-components";
import { S1, ST1, Color } from "../../common/assets";
import { IListProps } from "./models";

export const FooterWrapper = styled.div`
  top: 30px;
  width: 100%;
  height: 300px;

  border-top: 1px solid ${Color.Black};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopFooterWrapper = styled.div`
  width: 100%;
  height: 40%;
  background-color: ${Color.Yellow};

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    height: 75%;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const BottomFooterWrapper = styled.div`
  width: 100%;
  height: 60%;
  background-color: ${Color.Black};
  color: ${Color.White};

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: 768px) {
    height: 90%;
    flex-direction: column;
    justify-content: space-between;
  }

  @media (max-width: 480px) {
    height: 110%;
  }
`;

export const TopItem = styled.div`
  width: 15%;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    border-bottom: 1px solid ${Color.Black};
    padding: 10px 0;
  }
`;

export const BottomItem = styled.div`
  width: 15%;

  @media (max-width: 768px) {
    width: 100%;
    border-bottom: 1px solid ${Color.White};
    padding: 10px 0;
  }
`;

export const Header = styled(S1)`
  margin-bottom: 8px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const List = styled.ul<IListProps>`
  list-style-type: none;
  padding: 0;

  @media (max-width: 768px) {
    margin: 0;
    columns: ${(props) => props.columnNum};
  }
  @media (max-width: 480px) {
    margin: 0;
    columns: 2;
  }
`;

export const ListItem = styled(ST1)`
  color: ${Color.White};
  :hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;
