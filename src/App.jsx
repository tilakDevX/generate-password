import { useState } from "react";
import { Button, Card, Image, Typography } from "antd";
import SliderInput from "./copmonents/SliderInput";
import CheckBoxs from "./copmonents/CheckBoxs";
import img from "../src/assets/generate-pass.jpg";

function App() {
  const [inputValue, setInputValue] = useState(4);
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
        <Card style={{ width: "50%" }}>
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
          <Card>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>pad2ere3</Typography>
              <Button>Copy</Button>
            </div>
          </Card>
          <Card>
            <SliderInput
              setInputValue={setInputValue}
              inputValue={inputValue}
            />
          </Card>
          <Card>
            <CheckBoxs />
          </Card>

          <Typography>Stregnth: {"Poor"}</Typography>

          <Card>
            <Button>Generate Password</Button>
          </Card>
        </Card>
      </div>
    </>
  );
}

export default App;
