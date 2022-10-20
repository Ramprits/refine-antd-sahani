import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ErrorComponent
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import Main from "./components/layout/Main";
import { SignIn, Home, Tables, Profile } from './pages'
import "antd/dist/antd.min.css";
import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

function App() {
  return (
    <Refine
      routerProvider={routerProvider}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      Layout={Main}
      notificationProvider={notificationProvider}
      catchAll={<ErrorComponent />}
      loginPage={SignIn}
      resources={[
        {
          name: "dashboard",
          list: Home
        },
        {
          name: "tables",
          list: Tables
        },
        {
          name: "profile",
          list: Profile
        },
        {
          name: "sign-in",
          list: SignIn
        }
      ]}
    />
  );
}

export default App;
