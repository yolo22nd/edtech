import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";

const Courses = () => {
  const [courseList, setCourseList] = useState([]);

  useEffect(() => {
    const getCourseList = async () => {
      try {
        const data = await getDocs(collection(db, "courses"));
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCourseList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };

    getCourseList();
  }, []);

  return (
    <div className="container mx-auto my-8">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {courseList.map((course) => (
          <Link key={course.id} to={`/courses/${course.id}`}>
            <div className="border rounded-lg shadow-lg p-4">
              <img
                src={course.thumbnailURL}
                alt={course.name}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h2 className="text-xl font-bold mt-4">{course.name}</h2>
              <p className="text-gray-600">{course.description}</p>
              <p className="text-lg font-bold mt-2">${course.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Courses;
