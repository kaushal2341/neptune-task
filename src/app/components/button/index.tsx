import { ReactElement } from "react";

const Button = ({
  buttonClassName,
  onClickButton,
  buttonNameContent,
  animationChildren,
}: {
  buttonClassName: string;
  onClickButton: Function;
  buttonNameContent: ReactElement | string;
  animationChildren?: ReactElement;
}) => {
  return (
    <a className={buttonClassName} onClick={() => onClickButton()}>
      {animationChildren}
      {buttonNameContent}
    </a>
  );
};
export default Button;
