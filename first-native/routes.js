import PageTwo from './PageTwo.js'
import { View, Text } from 'react-native'
function HomeScreen () {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
		</View>
	)
}
const routes = [
	{ name: 'Home', component: HomeScreen },
	{ name: 'PageTwo', component: PageTwo },
]
export default routes
