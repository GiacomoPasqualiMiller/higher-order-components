import { printProps } from "./PrintProps";
import { UserInfo } from "./UserInfo";
import { withUser } from "./withUser";
import { UserInfoForm } from "./UserInfoForm";
//const UserInfoWrapped = printProps(UserInfo);
const UserInfoWithLoader = withUser(UserInfo, "234");

function App() {
  return (
    <>
      {/* <UserInfoWrapped a={1} b="Jack" c={{ name: "Name", age: 12 }} /> */}
      {/* <UserInfoWithLoader /> */}
      <UserInfoForm />
    </>
  );
}

export default App;
