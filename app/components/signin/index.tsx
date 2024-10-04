"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from "@material-tailwind/react";
import Login from "./login";
import Register from "./register";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/outline";

const SigninComponent = () => {
  const [activeTab, setActiveTab] = useState("login");
  const tabHeaders = [
    {
      label: "ورود",
      value: "login",
      component: <Login />,
      icon: UserIcon,
    },
    {
      label: "ثبت نام",
      value: "register",
      component: <Register />,
      icon: UserPlusIcon,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <Image src="/images/logo.png" alt="logo" width={120} height={120} priority />
      <Card shadow className="w-full max-w-md">
        <Tabs value={activeTab}>
          <TabsHeader className="mt-4 mx-2">
            {tabHeaders.map(({ label, value, icon }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
              >
                <div className="flex items-center gap-2">
                  {React.createElement(icon, { className: "w-5 h-5" })}
                  {label}
                </div>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody>
            {tabHeaders.map(({ value, component }) => (
              <TabPanel key={value} value={value}>
                {component}
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </Card>
    </div>
  );
};

export default SigninComponent;
