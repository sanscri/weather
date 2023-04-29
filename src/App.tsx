import React from "react";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import {Layout} from "./Layout.tsx";
import {HomePage} from "./pages/HomePage.tsx";
import {NoMatchPage} from "./pages/NoMatchPage.tsx";
import {TodayPage} from "./pages/TodayPage.tsx";
import {TomorrowPage} from "./pages/TomorrowPage.tsx";
import {ThreeDaysPage} from "./pages/ThreeDaysPage.tsx";
import {SevenDaysPage} from "./pages/SevenDaysPage.tsx";
import {TwoWeeksPage} from "./pages/TwoWeeksPage.tsx";
import {MonthPage} from "./pages/MonthPage.tsx";
import {WeekendPage} from "./pages/WeekendPage.tsx";

const App: React.FC = () => {
    return (<div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="today" element={<TodayPage />} />
            <Route path="tomorrow" element={<TomorrowPage />} />
            <Route path="3days" element={<ThreeDaysPage />} />
            <Route path="7days" element={<SevenDaysPage />} />
            <Route path="14days" element={<TwoWeeksPage />} />
            <Route path="month" element={<MonthPage />} />
            <Route path="weekend" element={<WeekendPage />} />
            <Route path="*" element={<NoMatchPage />} />
          </Route>
        </Routes>
    </div>
    );
};

export default App;
