import React from 'react';
import Empty from "../components/Empty";
import ChatWindow from "../components/ChatWIndow";

const Main = ({ user, activeUserId }) => {
	const renderMainContent = () => {
		if (!activeUserId) {
			return <Empty user={user} activeUserId={activeUserId} />;
		} else {
			return <ChatWindow activeUserId={activeUserId} />;
		}
	};
	return <main className="Main">{renderMainContent()}</main>;
};

export default Main;