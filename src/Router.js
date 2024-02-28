import React from "react";
import Home from "./View/Home";
import NotFound from "./View/NotFound";
import ProtectedRoute from "./ProtectedRoute";
import { Routes, Route } from "react-router-dom";
import {
  AccountSettings,
  ClassSchedule,
  Community,
  Courses,
  Exams,
  GradeBook,
  Messages,
  Dashboard,
  CourseDetails,
} from "./View/index";
import Sign from "./View/SignInFirst";
import SignIn from "./View/SignIn";
import SignUpFirst from "./View/SignUpFirst";
import SignUp from "./View/SignUp";
import ForgotPassword from "./View/ForgotPassword";
import OtpVerification from "./View/OtpVerification";
import ResetPassword from "./View/ResetPassword";
const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute Component={Dashboard} />} />
      <Route path="/home" element={<ProtectedRoute Component={Home} />} />
      <Route
        path="/account-settings"
        element={<ProtectedRoute Component={AccountSettings} />}
      />
      <Route
        path="/class-schedule"
        element={<ProtectedRoute Component={ClassSchedule} />}
      />
      <Route
        path="/community"
        element={<ProtectedRoute Component={Community} />}
      />
      <Route path="/courses" element={<ProtectedRoute Component={Courses} />} />
      <Route path="/exams" element={<ProtectedRoute Component={Exams} />} />
      <Route
        path="/grade-book"
        element={<ProtectedRoute Component={GradeBook} />}
      />
      <Route
        path="/course/:id"
        element={<ProtectedRoute Component={CourseDetails} />}
      />
      <Route
        path="/messages"
        element={<ProtectedRoute Component={Messages} />}
      />
      <Route path="/sign-in-first" element={<Sign />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up-first" element={<SignUpFirst />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/otp-verification" element={<OtpVerification />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRouter;
