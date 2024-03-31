import { useState } from "react";
import { Button, Card, Image, Typography } from "antd";
import SliderInput from "./copmonents/SliderInput";
import CheckBoxs from "./copmonents/CheckBoxs";
import img from "../src/assets/generate-pass.jpg";

function App() {
  const [inputValue, setInputValue] = useState(4);

  const textStyling = { fontSize: "20px", fontFamily: "ubuntu" };
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
              <Typography style={textStyling}>pad2ere3</Typography>
              <Button>Copy</Button>
            </div>
          </div>
          <div>
            <SliderInput
              setInputValue={setInputValue}
              inputValue={inputValue}
            />
          </div>
          <div>
            <CheckBoxs />
          </div>

          <div>
            <Typography style={{ fontSize: "14px" , margin:"10px", marginLeft:"0"}}>
              The Stregnth Of The Password is {"Poor"}.
            </Typography>
            <Button>Generate Password</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
