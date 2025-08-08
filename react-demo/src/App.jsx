import Blog from "./components/Blog";
import DemoContext from "./components/DemoContext/DemoContext";
import DemoCreateContext from "./components/DemoCreateContext";
import FetchDataUseEffect from "./components/FetchDataUseEffect";
import ObjectChangeUseState from "./components/ObjectChangeUseState";
import UpdateArrUseState from "./components/UpdateArrUseState";
import UseEffectDemo from "./components/UseEffectDemo";
import { UserProvider } from "./components/ProfileContext/ProfileContext";
import MyProfile from "./components/MyProfile";
const App = () => {
  return (
    <UserProvider>
      {/* Using the children prop to render content inside the Blog component*/}
      {/* <Blog>
        <h1>Welcome to My Blog</h1>
        <p>This is a simple blog component.</p>
        <p>Feel free to explore and read the articles!</p>
      </Blog> */}
      {/* how to change object field using on onChangeHandler function  */}
      {/* <ObjectChangeUseState /> */}
      {/* how to update array using useState hook */}
      {/* <UpdateArrUseState /> */}
      {/* <UseEffectDemo /> */}
      {/* <FetchDataUseEffect /> */}
      {/* <DemoCreateContext /> */}
      <MyProfile />
    </UserProvider>
  );
};

export default App;
