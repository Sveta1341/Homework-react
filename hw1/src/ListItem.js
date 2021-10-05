

export const FriendListItem = ({ avatar, name, isOneline }) => {
	return (
		<ul>
			<li class="avatar">{avatar}</li>
			<li class="name">{name}</li>
			<li class="isOneline">{isOneline}</li>
		</ul>

	)
}
