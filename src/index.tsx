import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "../src/component/App";
import registerServiceWorker from "./registerServiceWorker";
import "lib-flexible";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
registerServiceWorker();
