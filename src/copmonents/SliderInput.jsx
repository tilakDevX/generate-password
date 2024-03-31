import { Row, Col, Slider, InputNumber, Typography } from "antd";

function SliderInput({ inputValue, setInputValue }) {
  const onChange = (value) => {
    setInputValue(value);
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={16}>
        <Slider min={4} max={20} onChange={onChange} value={inputValue} />
      </Col>
      <Col span={24}>
        <Typography.Text>Increase Length Of Character</Typography.Text>
      </Col>
      <Col span={8}>
        <InputNumber min={4} max={20} style={{ width: "50%" }} value={inputValue} onChange={onChange} />
      </Col>
    </Row>
  );
}

export default SliderInput;
