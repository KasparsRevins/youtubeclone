import { createBrowserRouter } from "react-router-dom";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
import App from "../App";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/SignIn",
        element: <SignIn/>
    },
    {
        path: "/SignUp",
        element: <SignUp/>
    },
])