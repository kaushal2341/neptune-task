import { ReactElement } from "react";

const Button = ({
  buttonClassName,
  onClickButton,
  buttonNameContent,
}: {
  buttonClassName: string;
  onClickButton: Function;
  buttonNameContent: ReactElement | string;
}) => {
  return (
    <button className={buttonClassName} onClick={() => onClickButton}>
      {buttonNameContent}
    </button>
  );
};
export default Button;
