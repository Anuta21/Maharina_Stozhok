import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { NavBar, Footer } from "../../components";
import { basketSlice, useAppSelector, useAppDispatch } from "../../store";
import { BookPageTempProps, comments } from "./constants";
import { IBookPage, IComment } from "./models";
import {
  AddButton,
  BookCard,
  BookTitle,
  ImageWrapper,
  Info,
  InfoWrapper,
  InputField,
  Price,
  PublishButton,
  RatingWrapper,
  ShareOpinionWrapper,
  Subtitle,
  Title,
  Wrapper,
  BottomContainer,
  CommentWrapper,
  CommentsContainer,
  Line,
  CommentText,
  RatingWrapper2,
  PublishButtonText,
  AuthorName,
  AddButtonText,
  Form,
} from "./styles";

export const BookPage: React.FC<IBookPage> = ({
  authorName = BookPageTempProps.authorName,
  bookName = BookPageTempProps.bookName,
  price = BookPageTempProps.price,
  rating = BookPageTempProps.rating,
  imageUrl = BookPageTempProps.imageUrl,
  info = BookPageTempProps.info,
}) => {
  const { id } = useParams();

  const { books } = useAppSelector((state) => state.persistedReducer.basket);
  const { addNewBook, addBookNum } = basketSlice.actions;
  const dispatch = useAppDispatch();

  const handleOnCartClick = () => {
    if (id && id in books) {
      dispatch(addBookNum(id));
    } else if (id) {
      dispatch(
        addNewBook({
          [id]: {
            name: bookName,
            info: info,
            price: price,
            number: 1,
            link: imageUrl,
          },
        })
      );
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);
  return (
    <>
      <NavBar />
      <Wrapper>
        <BookCard>
          <ImageWrapper src={imageUrl}></ImageWrapper>
          <InfoWrapper>
            <BookTitle>
              {bookName}
              {id}
            </BookTitle>
            <AuthorName>{authorName}</AuthorName>
            <RatingWrapper>
              <Rating
                value={rating}
                precision={0.5}
                sx={{
                  "& .MuiRating-iconFilled": {
                    color: "black",
                  },
                }}
                readOnly
              />
            </RatingWrapper>
            <Info>{info}</Info>
            <BottomContainer>
              <Price>{`${price} UAH`}</Price>
              <AddButton onClick={handleOnCartClick}>
                <AddButtonText>ADD TO CART</AddButtonText>
              </AddButton>
            </BottomContainer>
          </InfoWrapper>
        </BookCard>

        <ShareOpinion />
        <CommentsContainer>
          {comments.map((comment, id) => (
            <Comment key={id} points={comment.points} text={comment.text} />
          ))}
        </CommentsContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

export const ShareOpinion: React.FC = () => {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }
  return (
    <ShareOpinionWrapper>
      <Title>Our customers share their opinion</Title>
      <Subtitle>
        You, too, make sure that your voice is heard. Your opinion is important!
      </Subtitle>
      <RatingWrapper2>
        <Rating
          sx={{
            "& .MuiRating-iconFilled": {
              color: "black",
            },
          }}
        />
      </RatingWrapper2>

      <Form onSubmit={handleSubmit}>
        <InputField placeholder="Give feedback" type="text" required />
        <PublishButton type="submit">
          <PublishButtonText>PUBLISH</PublishButtonText>
        </PublishButton>
      </Form>
    </ShareOpinionWrapper>
  );
};

export const Comment: React.FC<IComment> = ({ points, text }) => {
  return (
    <CommentWrapper>
      <RatingWrapper2>
        <Rating
          value={points}
          sx={{
            "& .MuiRating-iconFilled": {
              color: "black",
            },
          }}
          readOnly
        />
      </RatingWrapper2>
      <CommentText>{text}</CommentText>
      <Line />
    </CommentWrapper>
  );
};
