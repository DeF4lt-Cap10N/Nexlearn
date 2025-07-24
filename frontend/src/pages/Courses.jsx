import React, { useEffect, useState } from "react";
import axios from "axios";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  async function getCourses() {
    try {
      const response = await axios.get(
        "http://localhost:4002/api/v1/course/preview"
      );
      console.log(response.data);
      setCourses(response.data.course);
    } catch (err) {
      console.log(`course not get ${err}`);
    }
  }

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <div>
      <h1 className=" text-xl font-bold mb-4 text-center">Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, index) => (
          <div key={index} className="border rounded-3xl shadow">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-40  rounded-t-3xl mb-2"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{course.title}</h2>
              <p className="text-sm">{course.description}</p>
              <p className="font-bold mt-2">₹{course.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
