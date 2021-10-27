import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { v4 } from 'uuid';

export const Comment = ({ onSaveComment }) => {
	const [value, setValue] = useState('');

	const onSave = () => {
		const time = new Date();

		const data = {
			comment: value,
			id: v4(),
			time: `${time.getDate()}.${time.getMonth() + 1}, ${time.getHours()}:${time.getMinutes()}`
		}
		onSaveComment(data)
	}
	return (
		<div style={{ padding: "20px" }}>
			<TextField placeholder="leave a comment" type="text" value={value} onChange={(e) => setValue(e.target.value)} />
			<Button type="button" onClick={onSave} >Save Comment </Button>
		</div>
	)
}