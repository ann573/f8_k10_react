import React from "react";

const cousrse = [
  {
    id: 1,
    title: "Học HTML",
    price: "500",
  },
  {
    id: 2,
    title: "Học CSS",
    price: "800",
  },
  {
    id: 3,
    title: "Học JS",
    price: "1000",
  },
];
const Course = () => {
  return (
    <>
      <h1>Danh sách khóa học</h1>
      {cousrse.map((cousrse, index)=>{
        return (
        <div className="course-card">
          <h2>Tên khóa học: {cousrse.title}</h2>
          <p>Giá: {cousrse.price}</p>
        </div>
        )
      })}
    </>
  );
};

export default Course;
