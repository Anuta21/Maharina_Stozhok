import styled from "styled-components";
import {
  Color,
  ST2,
  T2,
  S2,
  ST1,
  T3,
  S1,
  ST3,
} from "../../common/assets/style";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

export const BookCard = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 150px;

  display: flex;
  justify-content: space-evenly;

  @media (max-width: 768px) {
    height: 90vh;
    flex-direction: column;
    align-items: center;
    margin-bottom: 90px;
  }
`;

export const ImageWrapper = styled.img`
  width: 400px;
  height: 500px;

  @media (max-width: 1024px) {
    width: 350px;
    height: 440px;
  }

  @media (max-width: 768px) {
    width: 300px;
    height: 375px;
  }
`;

export const InfoWrapper = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    margin-top: 20px;
    width: 90%;
    height: 200%;
  }
`;

export const BookTitle = styled(T3)`
  margin-bottom: 15px;
`;

export const AuthorName = styled(S1)`
  margin-bottom: 25px;
`;

export const RatingWrapper = styled.div`
  margin-bottom: 30px;
`;

export const Info = styled(ST1)`
  margin-bottom: 30px;
`;

export const Price = styled(T2)`
  margin-bottom: 30px;
`;

export const AddButton = styled.button`
  width: 45%;
  height: 50px;

  color: ${Color.White};
  background-color: ${Color.Black};

  cursor: pointer;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const AddButtonText = styled(ST3)`
  color: ${Color.White};
`;

export const BottomContainer = styled.div`
  width: 80%;
  position: absolute;
  bottom: 0;

  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const ShareOpinionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 150px;
  text-align: center;
`;

export const Title = styled(S2)`
  margin-bottom: 15px;
`;

export const Subtitle = styled(ST2)`
  margin-bottom: 20px;
`;

export const RatingWrapper2 = styled.div`
  margin-bottom: 10px;
`;

export const InputField = styled.input`
  width: 300px;
  margin-bottom: 20px;

  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 2px solid black;
`;

export const PublishButton = styled.button`
  width: 150px;
  height: 30px;

  background-color: ${Color.Black};
  cursor: pointer;
`;

export const PublishButtonText = styled(ST1)`
  color: ${Color.White};
`;

export const CommentWrapper = styled.div`
  margin-bottom: 40px;
`;

export const CommentsContainer = styled.div`
  margin: auto;
  width: 80%;
`;

export const CommentText = styled(ST2)`
  width: 50%;
`;

export const Line = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid ${Color.DarkGrey};
  margin: 1em 0;
  padding: 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
