import { Fragment } from "react"
import { Profile } from "./Profile"
import user from './user.json';
import friends from './friends.json';
import { FriendListItem } from "./ListItem";
import PropTypes from 'prop-types';




export const FriendList = ({ friends }) => {
	return (
		<ul>{friends}</ul>
	)
}
FriendList.propTypes = {
	friends: PropTypes.arrayOf

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
			<FriendList
				friends={friends}
			/>
			<FriendListItem
				name={friends.name}
				avatar={friends.avatar}
				isOnline={friends.isOnline} />


		</>

	)
}
