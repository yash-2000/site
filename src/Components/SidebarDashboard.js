import React from "react";
import "./SidebarDashboard.css";

import { AiOutlinePieChart } from "react-icons/ai";
import { AiOutlineTags } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { AiOutlineSetting } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
const Cards = (props) => {
    return (
        <div className="card">
            <h3 className="dash">{props.text}</h3>
            <h2>{props.number}</h2>
            <h2>{props.title}</h2>
            <p>{props.description}</p>
        </div>
    );
};

function SidebarDashboard({ show: showSidebar, toggleSidebar }) {
    if (!showSidebar) {
        return null;
    }
    return (
        <div className={`sidebar-dashboard ${!showSidebar && "show-sidebar"}`}>
            <div className="card">
                <h2>Board.</h2>
                <ul className="flex flex-col gap-4">
                    <div className="flex">
                        <AiOutlinePieChart className="text-3xl" />
                        <li> Dashboard</li>
                    </div>
                    <div className="flex">
                        <AiOutlineTags className="text-3xl" />
                        <li> Transaction</li>
                    </div>
                    <div className="flex">
                        <BsCalendarEvent className="text-3xl text-white" />
                        <li>Schedule</li>
                    </div>
                    <div className="flex">
                        <BiUserCircle className="text-3xl text-white" />
                        <li>User</li>
                    </div>
                    <div className="flex">
                        <AiOutlineSetting className="text-3xl" />
                        <li>Settings</li>
                    </div>
                </ul>
            </div>

            <div>
                <ul className="help"> Help</ul>
                <ul className="about"> About us</ul>
            </div>
        </div>
    );
}

export default SidebarDashboard;
export { Cards };
