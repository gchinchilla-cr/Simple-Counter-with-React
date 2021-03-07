//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import { SimpleCounter } from "./component/counter";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

let counter = 0;
setInterval(function() {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);

	counter++;

	ReactDOM.render(
		<SimpleCounter
			digit01={one}
			digit02={two}
			digit03={three}
			digit04={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
//render your react application
