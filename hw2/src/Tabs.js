import { useState } from "react";
import { SignUpForm } from './Components/SignForm/SignUpForm';
import { LoginForm } from './Components/LoginForm/LoginForm';
import './App.css'
import { Tabs } from '@mui/material'
import { Tab } from "@material-ui/core";

function TabsApp() {
	const [value, setValue] = useState(0);

	const handleChange = (value, newValue) => {
		setValue(newValue);
	};

	const showLogInUIJsx = value === 0 && LoginForm
	const showSignInUIJsx = value === 1 && SignUpForm


	return (
		<div className='container'>
			<div className='bloc-tabs'>
				<Tabs value={value} onChange={handleChange} centered>
					<Tab label="Log in" />
					<Tab label="Sign up" />
					{showLogInUIJsx || showSignInUIJsx}
				</Tabs >
			</div>
			<div className="content-tabs">
				<div
					className={value === 0 ? "content  active-content" : "content"}
				>
					<h2>Login on w3iscool</h2>
					<LoginForm />
				</div>

				<div
					className={value === 1 ? "content  active-content" : "content"}
				>
					<h2>Sign up on w3iscool</h2>
					<SignUpForm />
				</div>
			</div>
		</div >
	)
}

export default TabsApp;




