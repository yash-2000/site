import React from "react";
import "./styles.css";

export default function Header({ toggleSidebar }) {
    return (
        <div className="header">
            <div onClick={() => toggleSidebar()}>hamburger</div>
        </div>
    );
}
