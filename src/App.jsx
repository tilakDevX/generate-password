import { useState } from "react";
import "./App.css";
import { Button, Card, Image, Typography } from "antd";
import SliderInput from "./copmonents/SliderInput";
import CheckBoxs from "./copmonents/CheckBoxs";
import img from "../src/assets/generate-pass.jpg"


function App() {
  const [inputValue, setInputValue] = useState(4);
  return (
    <>
      <Card>
        <Image src= {img} alt="generate-pass-img" />
      </Card>
      <Card style={{ width: "300px" }}>
        <Typography>Generate-Password</Typography>
        <Card>
          <Typography>pad2ere3</Typography>
          <Button>Copy</Button>
        </Card>
        <Card>
          <Typography>Character Lenght: {4}</Typography>
          <SliderInput setInputValue={setInputValue} inputValue={inputValue} />
        </Card>
        <Card>
          <CheckBoxs />
        </Card>

        <Typography>Stregnth: {"Poor"}</Typography>

        <Card>
          <Button>Generate Password</Button>
        </Card>
      </Card>
    </>
  );
}

export default App;
