import PropTypes from "prop-types";

const Course = ({ course, handleSelect }) => {
  const { img, title, details, price, credit } = course;
  return (
    <div className="relative rounded-xl p-4 bg-white">
      <img className="rounded-lg" src={img} alt="" />
      <h2 className="mt-4 mb-3 font-semibold text-xl">{title}</h2>
      <p className="text-slate-600">{details}</p>
      <div className="flex items-center justify-between mt-5 mb-14 text-slate-600 text-lg">
        <h3>Price : {price}</h3>
        <h3>Credit : {credit}hr</h3>
      </div>
      <button
        onClick={() => handleSelect(course)}
        className="absolute bottom-4 inset-x-4 bg-blue-500 text-white hover:bg-blue-700 py-2.5 rounded-lg font-medium text-xl"
      >
        Select
      </button>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object,
  handleSelect: PropTypes.func,
};

export default Course;
