import { useState } from "react";
import { SignUPwithUI } from './Components/SignForm/SignUpForm';
import { WithMaterialUI } from './Components/LofinForm/LoginForm';
import './App.css'

function Tabs() {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div className="container">
			<div className="bloc-tabs">
				<button
					className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(1)}
				>
					Log in
				</button>
				<button
					className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
					onClick={() => toggleTab(2)}
				>
					Sign up
				</button>
			</div>

			<div className="content-tabs">
				<div
					className={toggleState === 1 ? "content  active-content" : "content"}
				>
					<h2>Login on w3iscool</h2>
					<WithMaterialUI />
				</div>

				<div
					className={toggleState === 2 ? "content  active-content" : "content"}
				>
					<h2>Sign up on w3iscool</h2>
					<SignUPwithUI />
				</div>
			</div>
		</div>
	);
}

export default Tabs;