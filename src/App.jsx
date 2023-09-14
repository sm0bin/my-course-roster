import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col">
        <img
          src="https://i.ibb.co/DpcfBtP/course8.jpg"
          alt="course8"
          border="0"
        />
        <img
          src="https://i.ibb.co/jhJPRD1/course5.jpg"
          alt="course5"
          border="0"
        />
        <img
          src="https://i.ibb.co/x5kry9h/course9.jpg"
          alt="course9"
          border="0"
        />
        <img
          src="https://i.ibb.co/5FnPsn2/course6.jpg"
          alt="course6"
          border="0"
        />
        <img
          src="https://i.ibb.co/n3n8B6Q/course2.jpg"
          alt="course2"
          border="0"
        />
        <img
          src="https://i.ibb.co/7WPLPLP/course7.jpg"
          alt="course7"
          border="0"
        />
        <img
          src="https://i.ibb.co/V26H69G/course1.jpg"
          alt="course1"
          border="0"
        />
        <img
          src="https://i.ibb.co/vm0J7rH/course3.jpg"
          alt="course3"
          border="0"
        />
        <img
          src="https://i.ibb.co/cJg5YfN/course4.jpg"
          alt="course4"
          border="0"
        />
      </div>
    </>
  );
}

export default App;
