import React from "react";

export default function ShowListStudent() {
  const listStudent = [
    { id: 1, name: "Nguyen Van A", age: 20, address: "Ha Noi" },
    { id: 2, name: "Nguyen Van B", age: 21, address: "Hung Yen" },
    { id: 3, name: "Nguyen Van C", age: 22, address: "Hai Phong" },
    { id: 4, name: "Nguyen Van D", age: 23, address: "Hai Duong" },
  ];

  return (
    <>
      <h1 style={{ textAlign: "center" }}>This is Show List Student Page</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          width: "50%",
        }}
      >
        {listStudent.map((item: any, index: number) => (
          <div key={item.id}>
            <div>ID: {item.id}</div>
            <div>Name: {item.name}</div>
            {/* <div style={}>Age: {item.age}</div> */}
            {item.age % 2 === 0 ? (
              <div style={{ color: "red" }}>Age: {item.age}</div>
            ) : (
              <div>Age: {item.age}</div>
            )}
            <div>Address: {item.address}</div>
            <hr />
          </div>
        ))}
      </div>
    </>
  );
}
