import Back from "../../Back";
import useOnlineStatus from "./useOnlineStatus";

export default function OnlineStatusComponent() {
  const online = useOnlineStatus();

  return (
    <>
      <Back></Back>
      <div>{online.toString()}</div>
    </>
  );
}
