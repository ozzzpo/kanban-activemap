import "./App.css";
import service from "./api/auth.service";
import Authorization from "./pages/Authorization/Authorization";

function App() {
  console.log(service.sendLogPass());
  return (
    <>
      <Authorization />
    </>
  );
}

export default App;
