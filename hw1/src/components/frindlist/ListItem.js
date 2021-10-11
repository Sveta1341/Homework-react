import PropTypes from 'prop-types'
import './FriendListStyle'
import ViewItemStyle from './FriendListStyle'



export const ViewItem = (friends) => {
	const styles = friends.isOnline ? 'green' : 'red'

	return (
		<div>
			<span style={{ backgroundColor: styles }}></span>
			<img src={friends.avatar} width="50px" />
			<p>{friends.name}</p>
		</div >
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
