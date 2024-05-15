import { SignIn } from "@clerk/nextjs";
import React from "react";

const SignInPage = () => {
  return <SignIn path="/login" signUpUrl="/register" />;
};

export default SignInPage;
