import { ICkeckMarkProps } from "./models";
import { CheckMarkBTN, Input, Label } from "./styles";

export const CheckMark: React.FC<ICkeckMarkProps> = ({
  checkMarkIndex,
  updateChosencheckMarks,
}) => {
  return (
    <Label>
      <Input
        type="checkbox"
        onClick={() => updateChosencheckMarks?.(checkMarkIndex ?? 0)}
      />
      <CheckMarkBTN />
    </Label>
  );
};
