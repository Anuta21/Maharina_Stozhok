import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { S1, Color, Images } from "../../common/assets";
import { NavBar } from "../../components";
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
} from "./styles";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/");
  }
  return (
    <Wrapper>
      <NavBar />
      <CenterContainer>
        <Header>Log In</Header>
        <Form onSubmit={handleSubmit}>
          <InputFieldWrapper>
            <S1>Email</S1>
            <InputField placeholder="example@gmail.com" type="email" required />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <S1>Password</S1>
            <InputField
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              required
            />
            <Eye
              src={showPassword ? Images.eyeOpen : Images.eyeClosed}
              onClick={() => setShowPassword(!showPassword)}
            />
          </InputFieldWrapper>
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
