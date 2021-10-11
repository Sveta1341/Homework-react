import '../src/theme/App.css';
import '../src/theme/profile.css';
import { Profile } from './components/profile/Profile';
import user from './user.json';
import friends from './friends.json'
import { FriendList } from './components/frindlist/ListItem';
import { ViewItemStyle } from './components/frindlist/FriendListStyle'



function App() {
	return (
		<>


			<Profile name={user.name}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats} />
			<ViewItemStyle >
				<FriendList
					friends={friends}
				/>
			</ViewItemStyle>
		</>
	)
}

export default App;