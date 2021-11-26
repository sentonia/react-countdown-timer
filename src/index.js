import React from "react";
import ReactDOM from "react-dom";
import Timer from "./Timer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <>This is something to have for pull request</>
        <Timer endDate={"2021-03-23T22:00:00.000"} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
