import Back from "../../Back";
import { useSessionStorage, useLocalStorage } from "./useStorage";

export default function UseStoragePage() {
  const [name, setName, removeName] = useSessionStorage("name", "Kyle");
  const [age, setAge, removeAge] = useLocalStorage("age", 26);

  return (
    <div>
      <Back></Back>
      <div>
        {name} - {age}
      </div>
      <button onClick={() => setName("John")}>Set Name</button>
      <button onClick={() => setAge(40)}>Set Age</button>
      <button onClick={removeName}>Remove Name</button>
      <button onClick={removeAge}>Remove Age</button>
    </div>
  );
}
