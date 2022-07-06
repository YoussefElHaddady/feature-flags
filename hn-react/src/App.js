import React, { Component } from "react";
import { Flags } from "react-feature-flags";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1>Feature flags with react-feature-flags</h1>
        </header>
        <Flags
          authorizedFlags={["vipOnly"]}
          renderOn={(flag) => {
            console.log(flag);
            return <h1>VIP (flag: {flag.map((f) => f.name).join(", ")})</h1>;
          }}
          renderOff={() => <h1>NO VIP</h1>}
        />
        <Flags authorizedFlags={["vipOnly"]}>
          <h1>VIP (children props)</h1>
        </Flags>
        <Flags authorizedFlags={["adminOnly", "vipOnly"]} exactFlags renderOn={(flag) => <h1>Admin and VIP (flag: {flag.map((f) => f.name).join(", ")})</h1>} />
        <footer>End</footer>
      </div>
    );
  }
}
