import React from "react";
import { Button, Input } from "@material-tailwind/react";

const Login = () => {
  return (
    <form className="mt-4 mb-2 w-full">
      <div className="mb-1 flex flex-col gap-6">
        <div>
          <label className="text-sm" htmlFor="login-username">
            نام کاربری
          </label>
          <Input
            id="login-username"
            type="text"
            size="lg"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin=""
          />
        </div>

        <div>
          <label className="text-sm" htmlFor="login-password">
            رمز عبور
          </label>
          <Input
            id="login-password"
            type="password"
            size="lg"
            placeholder="********"
            className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
            crossOrigin=""
          />
        </div>
      </div>
      <Button className="mt-6" fullWidth>
        ورود
      </Button>
    </form>
  );
};

export default Login;
