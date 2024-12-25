// Import the necessary libraries and styles
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { FiHome } from "react-icons/fi";
import Img1 from "/src/assets/Img1.jpg"
import Img2 from "/src/assets/Img2.jpg"
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdOutlineNotificationsNone } from "react-icons/md"

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const currentMonth = new Date().toLocaleString("default", { month: "long" });
  const currentYear = new Date().getFullYear();

  const handleDateClick = (date) => {
    setSelectedDate(date);
    console.log(`Selected date: ${date}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      
      <header className="bg-white shadow p-4 flex justify-between items-center h-20">
        <div className="flex items-center gap-4">
          <img
            src={Img2}
            alt="Logo"
            className="h-20 m-5"
          />
          <input
            type="text"
            placeholder="&#128269;Find alumni"
            className="border border-gray-300 bg-gray-200 hover:border-purple-500 rounded-3xl px-4 py-2 m-10 focus:outline-double"
          />
        </div>
        <div className="flex gap-4">
          <div className="hover:text-purple-500 m-2 px-3 text-3xl"><FaPlus /></div>
          <div className="hover:text-purple-500 m-2 px-3 text-3xl"><FiHome /></div>
          <div className="hover:text-purple-500 m-2 px-3 text-3xl"><MdOutlineNotificationsNone /></div>
          <div className="hover:text-purple-500 m-2 px-3 text-3xl"><MdOutlineEmail /></div>
          <div className="hover:text-purple-500 m-2 px-3 text-3xl"><MdOutlineCalendarToday /></div>
          
        </div>

        <div className="flex">
          <div className="flex items-center gap-4 ">
            <div className="rounded-full overflow-hidden w-12 h-12 shadow-xl object-cover border-2">
              <img src={Img1} alt="" />
            </div>
            <div className=" font-bold ">
              <h3>Wade Warren</h3>
            </div>
            <div class="inline-flex items-center justify-center w-6 h-6 bg-blue-500 text-white rounded-full text-xl font-bold">✔</div>
            <div className="text-3xl hover:text-purple-500"><RiArrowDropDownLine /></div>
          </div>
        </div>
        
      </header>
      {/* section after header*/}
      <div className="bg-white h-20 flex justify-center m-0.5">
          <button className="hover:text-white hover:bg-purple-500 rounded-3xl m-4">Internships</button>
          <button className="hover:text-white hover:bg-purple-500 rounded-3xl m-4">Jobs</button>
          <button className="hover:text-white hover:bg-purple-500 rounded-3xl m-4">Seminar</button>
          <button className="hover:text-white hover:bg-purple-500 rounded-3xl m-4">Workshop</button>
          <button className="hover:text-white hover:bg-purple-500 rounded-3xl m-4">Tech</button>
          <button className="hover:text-white hover:bg-purple-500 rounded-3xl m-4">Events</button>
      </div>


      <div className="grid grid-cols-12 gap-4">
        {/* Left Sidebar with Calendar */}
        <div className="col-span-3 bg-white shadow rounded p-4">
          <div className="font-bold mb-4">My Calendar</div>
          <div className="text-center font-bold text-gray-800 mb-2">
            {currentMonth} {currentYear}
          </div>
          <div className="grid grid-cols-7 gap-2 text-center">
            {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((day, index) => (
              <div key={index} className="font-bold text-gray-800">
                {day}
              </div>
            ))}
            {[...Array(28)].map((_, i) => (
              <div
                key={i}
                className={`p-2 text-center rounded cursor-pointer text-gray-800 font-medium ${
                  selectedDate === i + 1
                    ? "bg-purple-500 text-white"
                    : "bg-gray-200 hover:bg-purple-300 hover:text-gray-900"
                }`}
                onClick={() => handleDateClick(i + 1)}
              >
                {i + 1}
              </div>
            ))}
          </div>
          <div className="mt-4">
            {[1, 2, 3, 4].map((event, i) => (
              <div key={i} className="flex gap-2 items-center my-2">
                <div className="h-12 w-12 bg-gray-300 rounded"></div>
                <div>
                  <div className="font-bold">Event Name</div>
                  <div className="text-gray-500 text-sm">Sub text</div>
                  <div><button></button></div>
                </div>
              </div>
            ))}
            <button className="text-purple-500 mt-2">All Events</button>
          </div>
        </div>


        {/* Main Feed */}
        <div className="col-span-6 bg-white shadow rounded p-4">
          <div className="space-y-6">
            {[1, 2, 3].map((post, i) => (
              <div key={i} className="bg-white rounded-lg shadow-lg border border-gray-200 p-4">
                {/* Post Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                  <div>
                    <div className="font-bold text-gray-800">Eleanor Pena</div>
                    <div className="text-gray-500 text-sm">Software Engineer</div>
                  </div>
                  <button className="ml-auto bg-purple-500 text-white px-4 py-1 rounded-3xl hover:bg-purple-600">
                    Connect
                  </button>
                </div>

                {/* Post Content */}
                <div>
                  <div className="h-48 bg-gray-200 rounded mb-4"></div>
                  <p className="text-gray-700 text-sm mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
                  </p>
                </div>

                {/* Post Actions */}
                <div className="flex justify-between items-center text-gray-500 text-sm">
                  <div className="flex gap-4">
                    {/* Like Icon */}
                    <button className="hover:bg-purple-500 text-xl">
                      👍
                    </button>

                    {/* Comment Icon */}
                    <button className="hover:bg-purple-500 text-xl">
                      💬
                    </button>

                    {/* Share Icon */}
                    <button className="hover:bg-purple-500 text-xl">
                      🔗
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* Right Sidebar */}
        <div className="col-span-3 bg-white shadow rounded p-4">
          <div className="font-bold mb-4 items-center">Expand Your Network</div>
          {[1, 2, 3, 4, 5].map((person, i) => (
            <div key={i} className="flex gap-4 items-center my-2">
              <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
              <div>
                <div className="font-bold">Leslie Alexander</div>
                <div className="text-gray-500 text-sm">Works at Ferrari</div>
              </div>
              <button className="ml-auto bg-purple-500 text-white px-4 py-1 rounded-2xl">
                Connect
              </button>
            </div>
          ))}
          <button className="text-purple-500 mt-2 rounded-3xl">See More</button>
        </div>
      </div>
    </div>
  );
};

export default App;
