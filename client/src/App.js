import Homepage from "./components/Homepage/Homepage";
import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";

function App() {
	return (
		<div>
			<NotificationContainer />
			<Homepage />
		</div>
	);
}

export default App;
