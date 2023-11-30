import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Day from "./Day";

const Calendar = ({ date }) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = monthNames[date.getMonth()];
  let listOfDays = [];

  for (
    let i = 0;
    i < getMaxDaysInMonth(date.getFullYear(), date.getMonth());
    i++
  ) {
    listOfDays.push(<Day key={i + 1} day={i + 1} importance={"secondary"} />);
  }
  let listOfWeeks = divideArrayIntoWeeks(listOfDays);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">{month}</h1>
      <div className="container mt-4">
        <div className="row">{listOfWeeks[0]}</div>
        <div className="row">{listOfWeeks[1]}</div>
        <div className="row">{listOfWeeks[2]}</div>
        <div className="row">{listOfWeeks[3]}</div>
        <div className="row">{listOfWeeks[4]}</div>
      </div>
    </div>
  );
};

function getMaxDaysInMonth(year, month) {
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return lastDayOfMonth.getDate();
}

function divideArrayIntoWeeks(array) {
  const numDaysInWeek = 7;
  const dividedArray = [];

  for (let i = 0; i < array.length; i += numDaysInWeek) {
    const week = array.slice(i, i + numDaysInWeek);
    dividedArray.push(week);
  }

  return dividedArray;
}

export default Calendar;
