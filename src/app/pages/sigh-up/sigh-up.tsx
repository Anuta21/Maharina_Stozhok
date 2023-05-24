import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { S1, Color, Images } from "../../common/assets";
import { NavBar } from "../../components";
import { Client } from "../../services";
import { userSlice, useAppDispatch } from "../../store";
import { IFormData } from "./models";
import { passwordRegExp } from "./constants";
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
  PasswordText,
} from "./styles";

export const SighUpPage: React.FC = () => {
  const navigate = useNavigate();

  const { setUser } = userSlice.actions;
  const dispatch = useAppDispatch();

  const [sighUpData, setSighUpData] = useState({} as IFormData);
  const [showPassword, setShowPassword] = useState(false);

  const client = new Client();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      sighUpData.password.length >= 8 &&
      passwordRegExp.test(sighUpData.password) &&
      sighUpData.password === sighUpData.confirmPassword
    ) {
      try {
        const responseData = (
          await client.auth.sighUp({
            email: sighUpData.email,
            name: sighUpData.name,
            password: sighUpData.password,
          })
        ).data;
        dispatch(
          setUser({
            id: responseData._id,
            email: sighUpData.email,
            name: responseData.name,
            token: responseData.token,
          })
        );
      } catch (error) {
        console.error(error);
      }
      navigate("/");
    }
  }
  return (
    <Wrapper>
      <NavBar />
      <CenterContainer>
        <Header>Sigh Up</Header>
        <Form onSubmit={handleSubmit}>
          <InputFieldWrapper>
            <S1>Email</S1>
            <InputField
              placeholder="example@gmail.com"
              type="email"
              required
              onChange={(e) =>
                setSighUpData((state) => ({ ...state, email: e.target.value }))
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <S1>Name</S1>
            <InputField
              placeholder="Name"
              type="name"
              required
              onChange={(e) =>
                setSighUpData((state) => ({ ...state, name: e.target.value }))
              }
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <S1>Password</S1>
            <InputField
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              required
              onChange={(e) =>
                setSighUpData((state) => ({
                  ...state,
                  password: e.target.value,
                }))
              }
            />
            <Eye
              src={showPassword ? Images.eyeOpen : Images.eyeClosed}
              onClick={() => setShowPassword(!showPassword)}
            />
          </InputFieldWrapper>
          <InputFieldWrapper>
            <S1>Confirm Password</S1>
            <InputField
              placeholder="Password"
              type="password"
              required
              onChange={(e) =>
                setSighUpData((state) => ({
                  ...state,
                  confirmPassword: e.target.value,
                }))
              }
            />
          </InputFieldWrapper>
          <PasswordText>
            <S1>
              Password should contain at least 1 number, special character * . (
              ) ? - ! @ # _, uppercase and lowercase letter. Password length is
              8.
            </S1>
          </PasswordText>
          <Button type="submit">
            <S1 style={{ color: Color.White }}>Sigh Up</S1>
          </Button>
        </Form>
        <S1>
          Already have an account?
          <SighUpButton onClick={() => navigate("/login")}>
            &nbsp;Log In
          </SighUpButton>
        </S1>
      </CenterContainer>
    </Wrapper>
  );
};
