import Dashboard from "./components/layout/Dashboard";
import { FormControl } from "react-bootstrap";
import Setting from "./components/layout/Setting";
import Product from "./components/layout/Product";
import LoginSignUp from "./components/user/LoginSignUp";
import Home from "./components/layout/Home";
import Products from "./components/layout/Products";

const routes = [
  { path: "/", name: "Dashboard", element: Dashboard },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/login-signup", name: "login", element: LoginSignUp, exact: true },
  { path: "/form-control", name: "form-control", element: FormControl, exact: true },
  { path: "/form-control/:id", name: "form-control", element: FormControl, exact: true },
  { path: "/setting", name: "setting", element: Setting, exact: true },
  { path: "/product", name: "Product", element: Product },
  // { path: "/products", name: "Products", element: Products },
  // { path: "/home", name: "Home", element: Home },
];

export default routes;
