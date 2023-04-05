import styled from "styled-components";
import { S1 } from "../../common/assets";

export const NavigationWrapper = styled.div`
  width: 100%;
  padding: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CenterItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 28px;
  left: 50%;
  transform: translateX(-50%);
`;

export const NavigationItem = styled(S1)`
  margin: 0 15px 0 15px;
  text-align: center;

  cursor: pointer;
`;

export const BookIcon = styled.img`
  padding-left: 53px;
  margin-left: 8%;

  cursor: pointer;
`;

export const RightNavigationPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding-right: 53px;
  margin-right: 8%;
`;

export const UserIcon = styled.img`
  margin-right: 20px;

  cursor: pointer;
`;

export const BasketIcon = styled.img`
  cursor: pointer;
`;
