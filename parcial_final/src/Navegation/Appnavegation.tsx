import Dashboard from "../screens/Dashboard/Dashboard";
import Detail from "../screens/Detail/Detail";
import Intro from "../screens/Intro/Intro";
import { createBrowserRouter } from "react-router-dom";

export const navrouters = createBrowserRouter([
  {
    path: "/",
    element: <Intro onNext={function (): void {} }  />,
  },

  {
    path: "dashboard",
    element: <Dashboard poems={[]} onViewPoem={function (): void {} } />,
  },

  {
    path: "detail",
    element: <Detail poem={undefined} onBack={function (): void {} } />,
  },

  

]);

