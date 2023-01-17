import style from "./button.module.css"
import { useState } from "react";

function Button({ text }) {
	const [counter, setCounter] = useState(0);
	const counterClick = () => {
		setCounter(counter + 1);
	}
	const counterClick1 = (e) => { 
		let a = "10"; 
		console.log(this); //undefined
		console.log(e.target); //요소반환
		e.target.innerText =a ;
		
	}

	return (
		<>
			<div className="count-box">
				<span className="left txt32">{counter}</span>
				<span className="right">{counter + 1}</span>
			</div>
			<button className={style.btn} onClick = {counterClick1}>HEllo {text}</button>
		</>
	)
	
}

export default Button;