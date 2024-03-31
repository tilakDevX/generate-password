import { Checkbox } from "antd";

function CheckBoxs({ includeOptions, setIncludeOptions }) {
  const onChange = (checkedValues) => {
    setIncludeOptions(checkedValues);
  };

  const options = [
    { label: "Include Uppercase Letters", value: "Include Uppercase Letters" },
    { label: "Include Lowercase Letters", value: "Include Lowercase Letters" },
    { label: "Include Numbers", value: "Include Numbers" },
    { label: "Include Symbols", value: "Include Symbols" }
  ];

  return (
    <Checkbox.Group options={options} value={includeOptions} onChange={onChange} style={{ color: "white" }} />
  );
}

export default CheckBoxs;
