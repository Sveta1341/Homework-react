import PropTypes from 'prop-types'
import friends from './friends.json'

const ViewItem = (friends) => {
	return (
		<li>
			<span>{friends.isOnline}</span>
			<span>{friends.name}</span>
			<p>{friends.avatar}</p>
		</li>
	)
}

export const FriendList = ({ friends }) => {
	const FriendListItem = friends.map(({ avatar, name, isOnline }) => <ViewItem name={name} isOnline={isOnline} avatar={avatar} />)
	return (
		<ul>{FriendListItem}</ul>

	)
}
FriendList.propTypes = {
	friends: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool
		})
	)

}
