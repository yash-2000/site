import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import css from "./App.css";
import SidebarDashboard, { Cards } from "./Components/SidebarDashboard";
import ActivitiesCard from "./Components/Activities.js";
import TopProductsCard from "./Components/TopProductCard.js";
// import dashboardData from './dashboardData.json';
// import React, { useState, useEffect } from 'react';
import Apicalls from "./Components/Apicalls";
import { AiOutlineBell } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import Header from "./Components/Header";
function Home() {
    const [showSidebar, setShowSidebar] = useState(false);
    const [isMobileView, setIsMobileView] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            const newIsMobileView = window.innerWidth <= 768;
            setIsMobileView(newIsMobileView);

            if (newIsMobileView) {
                setShowSidebar(false);
            } else {
                setShowSidebar(true);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleSidebar = () => {
        setShowSidebar((prev) => !prev);
    };

    const logout = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <>
            <Header toggleSidebar={toggleSidebar} />
            <div className="w-[100vw] flex">
                <div className="">
                    <div>
                        <SidebarDashboard
                            show={showSidebar}
                            toggleSidebar={() => toggleSidebar()}
                        />
                    </div>
                </div>
                <div className=" p-2 w-[80%] flex flex-col gap-16">
                    <div className="flex justify-between">
                        <h1 className="text font-bold text-4xl">DashBoard</h1>
                        <div className="flex gap-2 mr-4">
                            <input
                                type="text"
                                placeholder="Search"
                                className="bg-gray-300 p-1 rounded"></input>
                            <AiOutlineBell className="text-3xl" />
                            <BiUserCircle className="text-3xl" />
                        </div>
                    </div>

                    <div className="flex justify-evenly w-[100%]">
                        <div class=" bg-[#ddefe0] flex flex-col h-[120px] justify-center items-center rounded-xl w-[20%]">
                            <h2>Total Revenues</h2>
                            <ul>
                                <li>$2,129,430</li>
                            </ul>
                        </div>
                        <div class="bg-[#f4ecdd] flex flex-col h-[120px] justify-center items-center rounded-xl w-[20%]">
                            <h2>Total Transactions</h2>
                            <ul>
                                <li>1,520</li>
                            </ul>
                        </div>
                        <div class="bg-[#efdada] flex flex-col h-[120px] justify-center items-center rounded-xl w-[20%]">
                            <h2>Total Likes</h2>
                            <ul>
                                <li>9,721</li>
                            </ul>
                        </div>
                        <div class="bg-[#dee0ef] flex flex-col h-[120px] justify-center items-center rounded-xl w-[20%]">
                            <h2>Total users</h2>
                            <ul>
                                <li>892</li>
                            </ul>
                        </div>
                    </div>
                    {/*     
      <div class="dashboard-card4">
        <Apicalls />
      </div> */}
                    <div className="flex justify-center items-center w-[100%]">
                        <ActivitiesCard />
                    </div>
                    <div class="flex justify-around items-center w-[100%] ">
                        <div>
                            <TopProductsCard />
                        </div>
                        <div className="schedule-card">
                            <h2>Today's Schedule </h2>
                            <ul>
                                <li>8:00am - 9:00am: Yoga</li>
                                <li>
                                    10:00am - 11:00am: Meeting with Client A
                                </li>
                                <li>1:00pm - 2:00pm: Lunch with Team</li>
                                <li>3:00pm - 4:00pm: Meeting with Client B</li>
                                <li>5:00pm - 6:00pm: Gym</li>
                            </ul>
                        </div>
                        {/* <div class="bg-[#dee0ef] p-16 justify-center items-center rounded-xl  w-[20%]">
                            <Apicalls />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;
