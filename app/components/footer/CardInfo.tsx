import { FooterCardInfoInterface } from "@/app/types/footer";
import SquaredIcon from "./SquaredIcon";

function CardInfo({ iconSrc, text }: FooterCardInfoInterface) {
  return (
    <div className="flex items-center gap-2">
      <SquaredIcon iconSrc={iconSrc} />
      <p className="text-grey-15 font-medium">{text}</p>
    </div>
  );
}
export default CardInfo;
