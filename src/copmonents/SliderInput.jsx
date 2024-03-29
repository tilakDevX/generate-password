import React, { useState } from "react";
import { Col, InputNumber, Row, Slider, Space } from "antd";
const SliderInput = ({ inputValue, setInputValue }) => {
  const onChange = (newValue) => {
    console.log(newValue, "newValue")
    setInputValue(newValue);
  };
  return (
    <Row>
      <Col span={12}>
        <Slider
          min={1}
          max={20}
          onChange={onChange}
          value={typeof inputValue === "number" ? inputValue : 0}
        />
      </Col>
      <Col span={4}>
        <InputNumber
          min={4}
          max={20}
          style={{
            margin: "0 16px",
          }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
    </Row>
  );
};

export default SliderInput;
