import React, { Suspense, useEffect, useState } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import "./App.css";
import { onAuthStateChanged } from "firebase/auth";
import { AuthProvider } from "./auth/AuthContext";
import Register from "./auth/Register";
import PrivateRoute from "./auth/PrivateRoute";
import VerifyEmail from "./auth/VerifyEmail";
import Login from "./auth/Login";
import { auth } from "./auth/firebase";
import DefaultLayout from "./layout/DefaultLayout";
import LoginSignUp from "./components/user/LoginSignUp";
import Home from "./components/layout/Home";
import Products from "./components/layout/Products";
import Loader from "./components/layout/Loader/Loader";
import ProductDetails from "./components/layout/ProductDetails";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App=()=> {
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

    return (
      <HashRouter>
        <Suspense fallback={loading}>
        <AuthProvider value={{ currentUser, timeActive, setTimeActive }}>
          <Routes>
            <Route exact path="/login-signup" name="Login Page" element={<LoginSignUp />} />
            <Route exact path="/home" name="home" element={<Home />} />
            <Route exact path="/product/:id" name="ProducttDetails" element={<ProductDetails />} />
            <Route exact path="/products" name="Products" element={<Products />} />

            <Route
              exact
              path="/register"
              name="Register Page"
              element={<Register />}
            />
            {/* <Route exact path="/404" name="Page 404" element={<Page404 />} />
            <Route exact path="/500" name="Page 500" element={<Page500 />} /> */}
            <Route path="*" name="Home" element={<PrivateRoute>
                <DefaultLayout />
              </PrivateRoute>} />

            <Route
            path="/login"
            element={
              !currentUser?.emailVerified ? (
                <Login/>
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route
            path="/register"
            element={
              !currentUser?.emailVerified ? (
                <Register />
              ) : (
                <Navigate to="/" replace />
              )
            }
          />
          <Route path="/verify-email" element={<VerifyEmail />} />
          </Routes>
          </AuthProvider>
        </Suspense>
      </HashRouter>
    );
  }
// }

export default App;
