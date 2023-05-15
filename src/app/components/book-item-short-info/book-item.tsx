import { IBookItemProps } from "./models";
import { S2, B1, ST1, ST2 } from "../../common/assets";
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
  name,
  info,
  picture,
  price,
  number,
}) => {
  return (
    <BookItem>
      <BookPic src={picture}></BookPic>

      <BookInfo>
        <Name>{name}</Name>
        <ShortInfo>{`${info.slice(0, 80)}...`}</ShortInfo>

        <BookInteractButtons>
          <CountButton>
            <PlusMinus>
              <S2>−</S2>
            </PlusMinus>

            <ST1>{number}</ST1>

            <PlusMinus>
              <S2>+</S2>
            </PlusMinus>
          </CountButton>

          <DeleteButton>
            <B1>DELETE</B1>
          </DeleteButton>
        </BookInteractButtons>
      </BookInfo>

      <PriceWithNum>{`${number} X  ${price} грн`}</PriceWithNum>
    </BookItem>
  );
};
