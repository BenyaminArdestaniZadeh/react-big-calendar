import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment-jalaali";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./App.css";
import { Flex } from "@radix-ui/themes";
import CustomToolbar from "./custom-components/custom-toolbar/CustomToolbar";
import { useState } from "react";

moment.loadPersian({ dialect: "persian-modern" });
const localizer = momentLocalizer(moment);

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState("month");

  const handleNavigate = (newDate, view, action) => {
    setCurrentDate(newDate);
    setCurrentView(view);
    console.log("New Date:", newDate, "View:", view, "Action:", action);
  };
  return (
    <Flex
      justify={"center"}
      p={"4"}
      mt={"9"}
      width={"max-content"}
      style={{ height: 524, border: "1px solid #E0E0E0", borderRadius: 16 }}
    >
      <Calendar
        localizer={localizer}
        views={["month", "day"]}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        onNavigate={handleNavigate}
        components={{ toolbar: CustomToolbar }}
        rtl
      />
    </Flex>
  );
};

export default App;
