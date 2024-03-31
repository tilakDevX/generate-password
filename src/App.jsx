import { useState } from "react";
import { toast } from "react-hot-toast";
import { Alert, Button, Card, Image, Typography, message } from "antd";
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
      // toast.error("Please select at least one option.");
      message.error('Please select at least one option.');
    } else if (inputValue < 4) {
      // toast.error("Password length cannot be less than 4 characters.");
      message.error("Password length cannot be less than 4 characters.");
    } else {
      // Call a separate function to generate the password
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
    // For demonstration purpose, let's just check the length
    if (password.length < 6) {
      setPasswordStrength("Poor");
    } else if (password.length < 10) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Strong");
    }
  };
 
  return (
    <>
      <div style={{ display: "flex", paddingTop: "30px", gap: "25px" }}>
        <div style={{ width: "50%" }}>
          <Image
            src={img}
            alt="generate-pass-img"
            width={"100%"}
            height={"90vh"}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div
          style={{
            width: "50%",
            height: "45vh",
            background: "#EEEEEE",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            padding: "20px",
            borderRadius: "10px",
            margin: "auto",
          }}
        >
          <Typography
            style={{
              textAlign: "center",
              fontWeight: "600",
              fontSize: "25px",
              letterSpacing: "5px",
            }}
          >
            Generate-Password
          </Typography>
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography style={{ fontSize: "20px", fontFamily: "ubuntu" }}>
                {generatedPassword ? generatedPassword : "YourPassword"}
              </Typography>
              <Button
                onClick={() => {
                  navigator.clipboard.writeText(generatedPassword)
                  message.success('Copied!!!😆');

                }}
              >
                Copy
              </Button>
            </div>
          </div>
          <div>
            <SliderInput
              setInputValue={setInputValue}
              inputValue={inputValue}
            />
          </div>
          <div>
            <CheckBoxs
              includeOptions={includeOptions}
              setIncludeOptions={setIncludeOptions}
            />
          </div>

          <div>
            <Typography
              style={{ fontSize: "14px", margin: "10px", marginLeft: "0" }}
            >
              The Strength Of The Password is{" "}
              <Typography.Text
                type={
                  passwordStrength === "Poor"
                    ? "danger"
                    : passwordStrength === "Medium"
                    ? "warning"
                    : passwordStrength === "Strong"
                    ? "success"
                    : ""
                }
              >
                {passwordStrength}.
              </Typography.Text>
            </Typography>
            <Button onClick={generatePassword}>Generate Password</Button>
             
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
