import React from "react";
import { Checkbox } from "antd";

const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const options = [
  {
    label: "Include Uppercase Letters",
    value: "Include Uppercase Letters",
  },
  {
    label: "Include Lowercase Letters",
    value: "Include Lowercase Letters",
  },
  {
    label: "Include Numbers",
    value: "Include Numbers",
  },
  {
    label: "Include Symbols",
    value: "Include Symbols",
  },
];

const CheckBoxs = () => (
  <>
    <Checkbox.Group
      options={options}
      defaultValue={["Include Uppercase Letters"]}
      onChange={onChange}
    />
  </>
);
export default CheckBoxs;
