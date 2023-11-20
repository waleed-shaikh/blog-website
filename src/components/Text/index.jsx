import React from "react";

const sizeClasses = {
  txtGilroyMedium40: "font-gilroy font-medium",
  txtGilroyBold18: "font-bold font-gilroy",
  txtGilroyBold18WhiteA700: "font-bold font-gilroy",
  txtOpenSansRomanSemiBold16: "font-opensans font-semibold",
  txtGilroySemiBold20: "font-gilroy font-semibold",
  txtGilroyMedium20Bluegray300: "font-gilroy font-medium",
  txtGilroyMedium20: "font-gilroy font-medium",
  txtGilroyMedium14: "font-gilroy font-medium",
  txtGilroyBold20: "font-bold font-gilroy",
  txtGilroyMedium14WhiteA700: "font-gilroy font-medium",
  txtGilroyMedium18: "font-gilroy font-medium",
  txtGilroyRegular16: "font-gilroy font-normal",
  txtGilroySemiBold16: "font-gilroy font-semibold",
  txtGilroyMedium16: "font-gilroy font-medium",
  txtGilroyRegular14: "font-gilroy font-normal",
  txtGilroySemiBold36: "font-gilroy font-semibold",
  txtGilroyMedium20Gray90001: "font-gilroy font-medium",
  txtGilroyMedium16WhiteA700: "font-gilroy font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
