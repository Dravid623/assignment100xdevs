import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const Login = lazy(() => import("./LoginOtp/Login"));
const Otp = lazy(() => import("./LoginOtp/Otp"));
const Complete = lazy(() => import("./LoginOtp/Complete"));

export default function LoginOtp() {
  return (
    <BrowserRouter>
      {/* <Appbar/> */}
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback="Loading...">
              <Login />
            </Suspense>
          }
        ></Route>
        <Route
          path="/Otp"
          element={
            <Suspense fallback="Loading...">
              <Otp />
            </Suspense>
          }
        ></Route>
        <Route
          path="/complete"
          element={
            <Suspense fallback="Loading...">
              <Complete />
            </Suspense>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
