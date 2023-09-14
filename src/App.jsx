import { useEffect, useState } from "react";
import "./App.css";
import Course from "./components/Course";
import Cart from "./components/Cart";

function App() {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);
  // const [credits, setCredits] = useState(0);

  useEffect(() => {
    fetch("courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleSelect = (course) => {
    const newCart = [...cart, course];
    setCart(newCart);
  };

  return (
    <>
      <h1 className="font-bold text-3xl text-center mt-12">
        Course Registration
      </h1>
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 my-8 mx-6 xl:mx-16 gap-y-6 md:gap-6">
        <section className="xl:col-span-3 grid grid-cols-1 xl:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Course
              key={course.id}
              course={course}
              handleSelect={handleSelect}
            />
          ))}
        </section>
        <aside>
          <Cart cart={cart} />
        </aside>
      </main>
    </>
  );
}

export default App;
