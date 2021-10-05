import { Fragment } from "react"
import { Profile } from "./Profile"
import user from './user.json';
import friends from './friends.json';

const ViewList = (props) => {
	return (
		<ul>
			<li>{props.name}</li>
			<li>{props.avatar}</li>
			<li>{props.isOneline}</li>
		</ul>
	)

}

export const FriendList = ({ friends }) => {
	const ListItem = friends.map(({ name, avatar, isOneline }) => <ViewList name={name} avatar={avatar} isOneline={isOneline} />)

	return (

		<ul class="list">{ListItem}</ul>

	)
}

export const App = () => {
	return (

		<>
			<Profile
				name={user.name}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats} />
			<FriendList friends={friends} />

		</>

	)
}
