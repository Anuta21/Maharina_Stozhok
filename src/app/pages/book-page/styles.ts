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
  margin-top: 100px;
`;

export const BookCard = styled.div`
  width: 100%;
  margin-bottom: 150px;

  display: inline-grid;
  grid-template-columns: [start] 10% [left-border] 35% [center] 50% [right-border] 5% [end];
`;

export const ImageWrapper = styled.img`
  grid-column-start: 2;
  grid-column-end: 3;

  max-width: 400px;
  max-height: 500px;
`;

export const InfoWrapper = styled.div`
  position: relative;
  grid-column-start: 3;
  grid-column-end: 4;
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
  width: 100%;
  height: 50px;

  color: ${Color.White};
  background-color: ${Color.Black};

  cursor: pointer;
`;

export const AddButtonText = styled(ST3)`
  color: ${Color.White};
`;

export const BottomContainer = styled.div`
  width: 80%;
  position: absolute;
  bottom: 0px;
`;

export const ShareOpinionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 150px;
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
  margin-left: 150px;
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
