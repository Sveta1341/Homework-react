import '../src/theme/App.css';
import '../src/theme/profile.css';
import { Profile } from './Profile';
import user from './user.json';
import friends from './friends.json'
import { FriendList } from './ListItem';



function App() {
	return (
		<>


			<Profile name={user.name}
				tag={user.tag}
				location={user.location}
				avatar={user.avatar}
				stats={user.stats} />
			<FriendList
				name={friends.name}
				avatar={friends.avatar}
				isOnline={friends.isOnline} />

		</>
	)
}

export default App;