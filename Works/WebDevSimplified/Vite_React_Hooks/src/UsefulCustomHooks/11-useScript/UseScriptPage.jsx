import Back from "../../Back";
import useScript from "./useScript";

export default function UseScriptPage() {
  const { loading, error } = useScript(
    "https://code.jquery.com/jquery-3.6.0.min.js"
  );

  if (loading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  return (
    <>
      <Back></Back>
      <div>{window.$(window).width()}</div>
    </>
  );
}
