import React from "react";
import { Button, Input, Card, Typography } from "@material-tailwind/react";

const Register = () => {
  return (
    <Card color="transparent" shadow={false}>
      <form className="mt-4 mb-2 w-full">
        <div className="mb-1 flex flex-col gap-6">
          <div>
            <label className="text-sm" htmlFor="register-username">
              نام کاربری
            </label>
            <Input
              id="register-username"
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
            <label className="text-sm" htmlFor="email">
              ایمیل
            </label>
            <Input
              id="email"
              size="lg"
              type="email"
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900 mt-2"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
              crossOrigin=""
            />
          </div>

          <div>
            <label className="text-sm" htmlFor="register-password">
              رمز عبور
            </label>
            <Input
              id="register-password"
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
          ثبت نام
        </Button>
      </form>
    </Card>
  );
};

export default Register;
