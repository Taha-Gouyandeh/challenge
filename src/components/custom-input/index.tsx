import React, { useEffect, useState } from "react";
import {
  ConvertNumber,
  ConvertToEnglishNumber,
  DeConvertNumber,
} from "@/utils";
import Image from "next/image";
import eye from "@/assets/images/hidePassword.svg";
import eyeOff from "@/assets/images/eye-off.svg";

export const CustomInput: React.FC<{
  id?: string;
  type: "password" | "number" | "text_number";
  name: string;
  value?: string;
  className: string;
  placeholder?: string;
  disabled?: boolean;
  onChange: Function;
  onClick?: Function;
  validation?: boolean;
  textError?: string;
}> = ({
  id,
  type,
  name,
  value = "",
  onChange,
  className,
  placeholder,
  disabled,
  onClick = () => {},
  validation = true,
  textError = "",
}) => {
  if (type === "password") {
    return (
      <PasswordInput
        id={id}
        className={className}
        placeholder={placeholder ? placeholder : ""}
        name={name}
        value={value}
        onChange={(data: string) => {
          onChange(data);
        }}
        onClick={onClick}
        validation={validation}
        textError={textError}
      />
    );
  }

  if (type === "number") {
    return (
      <NumberInput
        id={id}
        className={className}
        placeholder={placeholder ? placeholder : ""}
        name={name}
        value={value}
        onChange={(data: string) => {
          onChange(data);
        }}
        disabled={disabled}
        onClick={onClick}
        validation={validation}
        textError={textError}
      />
    );
  }

  if (type === "text_number") {
    return (
      <NumberTextInput
        id={id}
        className={className}
        placeholder={placeholder ? placeholder : ""}
        name={name}
        value={value}
        onChange={(data: string) => {
          onChange(data);
        }}
        disabled={disabled}
        onClick={onClick}
        validation={validation}
        textError={textError}
      />
    );
  }

  return <></>;
};

const PasswordInput: React.FC<{
  id?: string;
  placeholder?: string;
  name: string;
  value: string;
  className: string;
  onChange: Function;
  onClick: Function;
  validation: boolean;
  textError: string;
}> = ({
  id,
  placeholder,
  name,
  value,
  onChange,
  className,
  onClick,
  validation,
  textError,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <div className={"flex flex-col gap-1"}>
      <div
        className={`custom-input border flex flex-row items-center ${className} ${value.length === 0 ? "" : validation ? "border-green-500" : "border-red-500"}`}
      >
        <input
          id={id}
          dir={"ltr"}
          className={"custom-input-none w-full"}
          placeholder={placeholder ? placeholder : ""}
          name={name}
          value={value}
          type={showPassword ? "text" : "password"}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          autoComplete={"off"}
          onClick={() => {
            onClick();
          }}
        />
        <span
          className={"cursor-pointer "}
          onClick={() => {
            setShowPassword(!showPassword);
          }}
        >
          {showPassword ? (
            <Image src={eye} alt={"hide password"} height={25} />
          ) : (
            <Image src={eyeOff} alt={"show password"} height={25} />
          )}
        </span>
      </div>
      {value.length !== 0 && !validation && (
        <small className={"text-custom-red1"}>{textError}</small>
      )}
    </div>
  );
};

const NumberInput: React.FC<{
  id?: string;
  placeholder?: string;
  name: string;
  value: string;
  className: string;
  disabled?: boolean;
  onChange: Function;
  onClick: Function;
  validation: boolean;
  textError: string;
}> = ({
  id,
  placeholder,
  name,
  value,
  className,
  disabled,
  onChange,
  onClick,
  validation,
  textError,
}) => {
  const [changeValue, setChangeValue] = useState<string>("");

  useEffect(() => {
    setChangeValue(ConvertNumber(value, "en"));
  }, [value]);

  return (
    <div className={"flex flex-col gap-1"}>
      <input
        id={id}
        className={`border ${className} ${value.length === 0 ? "" : validation ? "border-green-500" : "border-red-500"}`}
        placeholder={placeholder ? placeholder : ""}
        name={name}
        value={changeValue}
        type={"text"}
        onChange={(e) => {
          onChange(DeConvertNumber(e.target.value));
        }}
        disabled={disabled}
        autoComplete={"off"}
        onClick={() => {
          onClick();
        }}
      />
      {value.length !== 0 && !validation && (
        <small className={"text-custom-red1"}>{textError}</small>
      )}
    </div>
  );
};

const NumberTextInput: React.FC<{
  id?: string;
  placeholder?: string;
  name: string;
  value: string;
  className: string;
  disabled?: boolean;
  onChange: Function;
  onClick: Function;
  validation: boolean;
  textError: string;
}> = ({
  id,
  placeholder,
  name,
  value,
  className,
  disabled,
  onChange,
  onClick,
  validation,
  textError,
}) => {
  const [changeValue, setChangeValue] = useState<string>("");

  useEffect(() => {
    if (value != undefined) {
      setChangeValue(ConvertToEnglishNumber(value));
    }
  }, [value]);

  return (
    <div className={"flex flex-col gap-1"}>
      <input
        id={id}
        className={`border ${className} ${value.length === 0 ? "" : validation ? "border-green-500" : "border-red-500"}`}
        placeholder={placeholder ? placeholder : ""}
        name={name}
        value={changeValue}
        type={"text"}
        onChange={(e) => {
          onChange(ConvertToEnglishNumber(e.target.value));
        }}
        disabled={disabled}
        autoComplete={"off"}
        onClick={() => {
          onClick();
        }}
      />
      {value.length !== 0 && !validation && (
        <small className={"text-custom-red1"}>{textError}</small>
      )}
    </div>
  );
};
