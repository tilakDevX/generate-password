import { useState } from "react";
import { Row, Col, Button, Typography, message } from "antd";
import SliderInput from "./copmonents/SliderInput";
import CheckBoxs from "./copmonents/CheckBoxs";
import img from "../src/assets/generate-pass.jpg";

function App() {
  const [inputValue, setInputValue] = useState(4);
  const [includeOptions, setIncludeOptions] = useState(["Include Uppercase Letters"]);
  const [generatedPassword, setGeneratedPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("Poor");

  const generatePassword = () => {
    // Check if no option is selected
    if (includeOptions.length === 0) {
      message.error('Please select at least one option.');
    } else if (inputValue < 4) {
      message.error("Password length cannot be less than 4 characters.");
    } else {
      generatePasswordLogic();
      message.success('Password Generated Successfully!!!😆');
    }
  };

  const generatePasswordLogic = () => {
    let characters = "";
    if (includeOptions.includes("Include Uppercase Letters")) {
      characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeOptions.includes("Include Lowercase Letters")) {
      characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeOptions.includes("Include Numbers")) {
      characters += "0123456789";
    }
    if (includeOptions.includes("Include Symbols")) {
      characters += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    }

    let password = "";
    for (let i = 0; i < inputValue; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setGeneratedPassword(password);

    // Calculate password strength (you can implement your own algorithm for this)
    if (password.length < 6) {
      setPasswordStrength("Poor");
    } else if (password.length < 10) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Strong");
    }
  };

  return (
    <div style={{ padding: "20px"  }}>
      <Row justify="center" gutter={[16, 16]}  >
        <Col xs={24} sm={12} md={10} lg={8} style={{ }} >
          <img src={img} alt="generate-pass-img" style={{ width: "100%", borderRadius:"10px"}} />
        </Col>
        <Col xs={24} sm={12} md={14} lg={16} style={{ background: "#EEEEEE", alignItems:"center", padding:"20px", maxWidth:"500px",borderRadius:"10px" }}>
          <Typography.Title level={3} style={{ textAlign: "center", marginBottom: "20px" }}>Generate Password</Typography.Title>
          <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>

          <Typography.Text style={{ fontSize: "20px", fontFamily: "ubuntu" }}>
            {generatedPassword ? generatedPassword : "Your Password"}
          </Typography.Text>
          <Button type="primary" onClick={() => {
            navigator.clipboard.writeText(generatedPassword)
            message.success("Copied!!!😺")
          }} style={{ marginLeft: "10px" }}>
            Copy
          </Button>
            </div>
          <SliderInput setInputValue={setInputValue} inputValue={inputValue} />
          <CheckBoxs includeOptions={includeOptions} setIncludeOptions={setIncludeOptions} />
          <br />
          <Typography.Text>
            The Strength Of The Password is{" "}
            <Typography.Text type={passwordStrength === "Poor" ? "danger" : passwordStrength === "Medium" ? "warning" : "success"}>
              {passwordStrength}.
            </Typography.Text>
          </Typography.Text>
          <br />
          <Button type="primary" onClick={generatePassword} style={{ marginTop: "10px" }}>
            Generate Password
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default App;
