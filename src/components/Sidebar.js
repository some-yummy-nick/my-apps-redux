import React from 'react';
import User from "../components/User";

export default function Sidebar({contacts}){
return <aside className="Sidebar"> {contacts.map((contact, index) => <User user={contact} key={index} />)}</aside>
}