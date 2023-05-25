import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Rating } from "@mui/material";
import { NavBar, Footer } from "../../components";
import { IComment } from "./models";
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
import { Client, IBook, IFeedback } from "../../services";
import { useAppSelector } from "../../store";

export const BookPage: React.FC = () => {
  const { id } = useParams();
  const [book, setBook] = useState({} as IBook);
  const [estimate, setEstimate] = useState(0);

  const client = new Client();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    async function getBook() {
      try {
        const responseData = (await client.books.getBook(id as string)).data;
        setBook(responseData);
      } catch (error) {
        console.error(error);
      }
    }

    getBook();
  }, []);

  useEffect(() => {
    function countEstimate() {
      const estimates = book.feedbacks.map((feedback) => feedback.estimate);
      const averageEstimate =
        estimates.reduce((num1, num2) => num1 + num2, 0) / estimates.length;
      setEstimate(averageEstimate);
    }

    if (book.feedbacks && book.feedbacks.length > 0) countEstimate();
  }, [book]);

  return (
    <>
      {book.title && (
        <>
          <NavBar />
          <Wrapper>
            <BookCard>
              <ImageWrapper src={book.imageUrl}></ImageWrapper>
              <InfoWrapper>
                <BookTitle>{book.title}</BookTitle>
                <AuthorName>{book.author}</AuthorName>
                <RatingWrapper>
                  <Rating
                    value={estimate}
                    precision={0.5}
                    sx={{
                      "& .MuiRating-iconFilled": {
                        color: "black",
                      },
                    }}
                    readOnly
                  />
                </RatingWrapper>
                <Info>{book.info}</Info>
                <BottomContainer>
                  <Price>{`${book.price} UAH`}</Price>
                  <AddButton>
                    <AddButtonText>ADD TO CART</AddButtonText>
                  </AddButton>
                </BottomContainer>
              </InfoWrapper>
            </BookCard>

            <ShareOpinion />
            <CommentsContainer>
              {book.feedbacks.map((feedback) => (
                <Comment
                  key={feedback._id}
                  points={feedback.estimate}
                  text={feedback.feedbackText}
                />
              ))}
            </CommentsContainer>
          </Wrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export const ShareOpinion: React.FC = () => {
  const { id } = useParams();
  const { token } = useAppSelector((state) => state.persistedReducer.user);

  const navigate = useNavigate();
  const client = new Client();
  const [feedback, setFeedback] = useState({ estimate: 0 } as IFeedback);

  function putFeedBack() {
    try {
      client.books.putFeedback(feedback, id as string, token);
    } catch (error) {
      console.error(error);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    if (token === "") navigate("/login");
    else putFeedBack();
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
          value={feedback.estimate}
          onChange={(event, newValue) => {
            setFeedback((state) => ({ ...state, estimate: newValue || 0 }));
          }}
        />
      </RatingWrapper2>

      <Form onSubmit={handleSubmit}>
        <InputField
          placeholder="Give feedback"
          type="text"
          required
          onChange={(e) => {
            setFeedback((state) => ({
              ...state,
              feedbackText: e.target.value,
            }));
          }}
        />
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
