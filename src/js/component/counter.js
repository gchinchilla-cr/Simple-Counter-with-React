import React from "react";
import PropTypes from "prop-types";

export function SimpleCounter(props) {
	return (
		<div className="principal">
			<div className="icono">
				<i className="far fa-clock"></i>
			</div>
			<div className="Dig04">{props.digit04 % 10}</div>
			<div className="Dig03">{props.digit03 % 10}</div>
			<div className="Dig02">{props.digit02 % 10}</div>
			<div className="Dig01">{props.digit01 % 10}</div>
		</div> //cierra principal
	);
}

SimpleCounter.propTypes = {
	digit01: PropTypes.number,
	digit02: PropTypes.number,
	digit03: PropTypes.number,
	digit04: PropTypes.number
};
