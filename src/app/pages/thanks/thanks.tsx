import { useLocation, useNavigate } from "react-router-dom";
import { Images } from "../../common/assets";
import { NavBar } from "../../components";
import { Wrapper, CenterContainer, Home, Arrow } from "./styles";
import { ILocationState } from "./models";
import { useEffect } from "react";
import { basketSlice, useAppDispatch } from "../../store";

export const ThanksPage: React.FC = () => {
  const navigate = useNavigate();
  const locationState = useLocation()?.state as ILocationState;

  const { setEmptyBasket } = basketSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setEmptyBasket());
  }, []);

  return (
    <Wrapper>
      <NavBar />
      <CenterContainer>
        <img src={Images.thanks} alt="thanks" />
        {locationState?.orderId}
        <br /> Successful order!
        <br /> Thank you for choosing us! We appreciate it.
        <Arrow src={Images.arrow} alt="arrow" />
        <Home onClick={() => navigate("/")}>Home page</Home>
      </CenterContainer>
    </Wrapper>
  );
};
