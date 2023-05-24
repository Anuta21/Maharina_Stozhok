import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { S1, Color, Images } from "../../common/assets";
import { NavBar } from "../../components";
import { Client, ILoginRequestBody } from "../../services";
import { userSlice, useAppDispatch } from "../../store";
import {
  Wrapper,
  CenterContainer,
  InputField,
  InputFieldWrapper,
  Header,
  Button,
  SighUpButton,
  Eye,
  Form,
  ErrorText,
} from "./styles";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();

  const [loginData, setLoginData] = useState({} as ILoginRequestBody);
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  const client = new Client();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const responseData = (await client.auth.login(loginData)).data;
      dispatch(
        setUser({
          id: responseData._id,
          email: loginData.email,
          name: responseData.name,
          token: responseData.token,
        })
      );
      navigate("/");
    } catch (error) {
      setShowError(true);
      console.error(error);
    }
  }
  return (
    <Wrapper>
      <NavBar />
      <CenterContainer>
        <Header>Log In</Header>
        <Form onSubmit={handleSubmit}>
          <InputFieldWrapper>
            <S1>Email</S1>
            <InputField
              placeholder="example@gmail.com"
              type="email"
              required
              onChange={(e) => {
                setShowError(false);
                setLoginData((state) => ({ ...state, email: e.target.value }));
              }}
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <S1>Password</S1>
            <InputField
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              required
              onChange={(e) => {
                setShowError(false);
                setLoginData((state) => ({
                  ...state,
                  password: e.target.value,
                }));
              }}
            />
            <Eye
              src={showPassword ? Images.eyeOpen : Images.eyeClosed}
              onClick={() => setShowPassword(!showPassword)}
            />
          </InputFieldWrapper>
          <ErrorText show={showError}>Incorrect login or password</ErrorText>
          <Button type="submit">
            <S1 style={{ color: Color.White }}>Log In</S1>
          </Button>
        </Form>
        <S1>
          Don`t have an account?
          <SighUpButton onClick={() => navigate("/sigh-up")}>
            &nbsp;Sigh Up
          </SighUpButton>
        </S1>
      </CenterContainer>
    </Wrapper>
  );
};
