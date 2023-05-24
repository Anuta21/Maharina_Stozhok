import { IBookItemProps } from "./models";
import { basketSlice, useAppDispatch } from "../../store";
import { S2, B1, ST1 } from "../../common/assets";
import {
  BookItem,
  BookPic,
  BookInfo,
  Name,
  ShortInfo,
  BookInteractButtons,
  DeleteButton,
  CountButton,
  PlusMinus,
  PriceWithNum,
} from "./styles";

export const BookItemComponent: React.FC<IBookItemProps> = ({
  id,
  name,
  info,
  picture,
  price,
  number,
}) => {
  const { addBookNum, removeBookNum, deleteBook } = basketSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <BookItem>
      <BookPic src={picture}></BookPic>

      <BookInfo>
        <Name>{name}</Name>
        <ShortInfo>{`${info.slice(0, 80)}...`}</ShortInfo>

        <BookInteractButtons>
          <CountButton>
            <PlusMinus onClick={() => dispatch(removeBookNum(id))}>
              <S2>−</S2>
            </PlusMinus>

            <ST1>{number}</ST1>

            <PlusMinus onClick={() => dispatch(addBookNum(id))}>
              <S2>+</S2>
            </PlusMinus>
          </CountButton>

          <DeleteButton onClick={() => dispatch(deleteBook(id))}>
            <B1>DELETE</B1>
          </DeleteButton>
        </BookInteractButtons>
      </BookInfo>

      <PriceWithNum>{`${number} X  ${price} грн`}</PriceWithNum>
    </BookItem>
  );
};
