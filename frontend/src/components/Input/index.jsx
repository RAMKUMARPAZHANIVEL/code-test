import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      onChangeHandler,
      validateForm,
      updateInputValue,
      activeInputValue = null,
      value,
      
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className= {`${wrapClassName} ${activeInputValue === name ? "border-gray_501": "border-gray_801"}`} onFocus={() => updateInputValue(name)}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-none`}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={onChangeHandler}
            onBlur={validateForm}
            defaultValue={value}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  updateInputValue: ()=>{},
  value: "",
};

export { Input };
