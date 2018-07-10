import React from "react";
import Header from "../components/Header";
import store from "../store";
import Chats from "../components/Chats";
import  _ from "lodash";

const ChatWindow = ({activeUserId}) => {
	const state = store.getState();
	const activeUser = state.contacts.contacts[activeUserId];
	const activeMsgs = state.messages[activeUserId];
	return (
		<div className="ChatWindow">
			<Header user={activeUser}/>
			<Chats messages={_.values(activeMsgs)}/>
		</div>
	);
};

export default ChatWindow;