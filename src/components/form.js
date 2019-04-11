import React from "react";

const Form = props => (
	<form onSubmit={props.weatherMethod}>
		{/*<input type="text" name="city" placeholder="Город"/>*/}

		<span className=" input input--haruki">
					<input className=" input__field input__field--haruki" type="text" name="city"/>
					<label className="input__label input__label--haruki" htmlFor="input-1">
						<span className="input__label-content input__label-content--haruki">Введите город</span>
					</label>
		</span>
		<button className="button button--ujarak button--border-thin button--text-thick">Узнать погоду</button>
	</form>
);

export default Form;