import Back from "../../Back";
import useMediaQuery from "./useMediaQuery";

export default function MediaQueryComponent() {
  const isLarge = useMediaQuery("(min-width: 500px)");

  return (
    <div>
      <Back></Back>
      Large: {isLarge.toString()}
    </div>
  );
}
