import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { ErrorMessage } from "../ErrorMessage";

const selectOptions = [
  { value: "option1", label: "Option1" },
  { value: "option2", label: "Option2" },
  { value: "option3", label: "Option3" },
];

const SelectBox = React.forwardRef(
  (
    {
      children,
      placeholder = "Select option",
      className = "",
      options,
      isSearchable = false,
      placeholderClassName = "",
      isMulti = false,
      onChange,
      value = "",
      errors = [],
      indicator,
      updateInputValue,
      activeInputValue,
      name,

      ...restProps
    },
    ref
  ) => {
    const [selectedVal, setSelectedVal] = React.useState(value);
      const handleChange = (data) => {
      setSelectedVal(data);
      if (isMulti) {
        onChange?.(data?.map((d) => d.value) || []);
      } else {
        onChange?.(name,data);
      }
    };

    return (
      <>
        <Select
          ref={ref}
          options={options}
          className={`${className} "border-gray_501" ${activeInputValue === name ? "border-gray_501": "border-gray_801"}`}
          onFocus={() => {updateInputValue(name)}}
          placeholder={
            <div className={`font-normal not-italic p-[0] text-[12px] !text-gray_801 text-left ${placeholderClassName}`}>{placeholder}</div>
          }
          isSearchable={isSearchable}
          isMulti={isMulti}
          components={{
            IndicatorSeparator: () => null,
            ...(indicator && { DropdownIndicator: () => indicator }),
          }}
          value={selectedVal}
          onChange={handleChange}
          styles={{
            container: (provided) => ({
              ...provided,
              zIndex: 0,
            }),
            control: (provided) => ({
              ...provided,
              backgroundColor: "transparent",
              border: "0 !important",
              boxShadow: "0 !important",
              minHeight: "auto",
              "&:hover": {
                border: "0 !important",
              },
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected && "#fafafa",
              // backgroundColor : "black !important",
              color : "black",
              // backgroundColor: state.isSelected && "#075537",
              "&:hover": { backgroundColor: "#075537", color: "#191919" },
              className : "bg-gray_900 border-[1px] border-gray_501 border-solid flex items-start justify-start px-[12px] py-[8px] rounded-[4px] sm:w-[100%] w-[455px] focus:border-gray_501"
            }),
            singleValue: (provided) => ({
              ...provided,
              color: "inherit",
            }),
            input: (provided) => ({
              ...provided,
              color: "inherit",
              margin: "0",
              padding: "0",
              // height: "0",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: "0",
            }),
            dropdownIndicator: (provided) => ({
              ...provided,
              paddingTop: "0px",
              paddingBottom: "0px",
              border:"2px solid red"
            }),
            clearIndicator: (provided) => ({
              ...provided,
              padding: "0",
            }),
            multiValueLabel: (provided) => ({
              ...provided,
              padding: "0",
            }),
            menuPortal: (base) => ({ ...base, zIndex: 999999}),
            placeholder: (base) => ({
              ...base,
              margin: 0,
              
            }),
          }}
          menuPortalTarget={document.body}
          closeMenuOnScroll={(event) => {
            return event.target.id === "scrollContainer";
          }}
          {...restProps}
        />
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);

SelectBox.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  isSearchable: PropTypes.bool,
  placeholderClassName: PropTypes.string,
  isMulti: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

SelectBox.defaultProps = {
  placeholder: "Select",
  className: "",
  isSearchable: false,
  placeholderClassName: "",
  isMulti: false,
  value: "",
  options: [],
  name: "",
  onChange: () => {},
  updateInputValue: () => {},
};
export { SelectBox };
