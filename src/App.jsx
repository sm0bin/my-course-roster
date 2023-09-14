import { useEffect, useState } from "react";
import "./App.css";
import Course from "./components/Course";
import Cart from "./components/Cart";

function App() {
  const [courses, setCourses] = useState([]);
  const [cart, setCart] = useState([]);

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
      <main className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 mt-8 mx-16 gap-6">
        <section className=" col-span-3 grid grid-cols-1 xl:grid-cols-3 gap-6">
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
