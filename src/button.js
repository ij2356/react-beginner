import style from "./button.module.css"
import { useEffect, useState } from "react";
import React from "react";

function Button({ text }) {
	const [counter, setCounter] = useState(0);
	const [keyword, setKeyword] = useState("");
	const counterClick = () => {
		setCounter((pre) => pre + 1);
	}
	const onchange = (e) => {
		setKeyword(e.target.value);
		
	}
	

	
	useEffect(() => { console.log("dsa") }, []);
	useEffect(() => {
		if(keyword != "" && keyword.length > 5)
		console.log("state change " + keyword)
	}, [keyword]);
	useEffect(() => {
		if(counter > 5)
		console.log("state change " + counter)
	}, [counter]);




	return (
		<>
			<input value={keyword} onChange={onchange} type="text" placeholder="Search here" />
			<div className="count-box">
				
				현잿개수 
				<span className="left txt32">{counter}</span>
				<span className="right">{counter + 1}</span>
			</div>
			<button className={style.btn} onClick = {counterClick}>HEllo {text}</button>
		</>
	)
	
}

export default Button;