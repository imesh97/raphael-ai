import { SignUp } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  return <SignUp path="/register" signInUrl="/login" />;
};

export default SignUpPage;
