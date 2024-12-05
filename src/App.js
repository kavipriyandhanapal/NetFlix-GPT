import Body from "./components/Body";
import Login from "./components/Login";
import { Provider } from "react-redux";
import appstore from "./utils/redux/appstore";
function App() {
  return (
    <Provider store={appstore}>
      <Body />;
    </Provider>
  );
}

export default App;
