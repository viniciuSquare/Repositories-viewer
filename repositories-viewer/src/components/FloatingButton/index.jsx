import { GoPlus } from "react-icons/go";
import { FloatingButtonStyled } from "./styled";

export function FloatingButton({onClick}) {

  return(
    <FloatingButtonStyled onClick={onClick}>
      <GoPlus size='48'/>
    </FloatingButtonStyled>
  )
}