import React from "react";
import { useState } from "react";
import infoData from "./infodata";

function InfoTable() {
  const [data, setData] = useState(infoData);

  const handleEdit = (id, field, value) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: value };
        }
        return item;
      })
    );
  };

  return (
    <>
      <table>
        <thead>
          <td>id</td>
          <td>name</td>
          <td>age</td>
          <td>job</td>
          <td>Is Active</td>
        </thead>
        <tbody>
          {data.map((x) => (
            <tr key={x.id}>
              <td>{x.id}</td>
              <td>
                <input
                  type="text"
                  value={x.name}
                  onChange={(e) => handleEdit(x.id, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={x.age}
                  onChange={(e) => handleEdit(x.id, "age", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={x.job}
                  onChange={(e) => handleEdit(x.id, "job", e.target.value)}
                />
              </td>
              <td>{x.isActive ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default InfoTable;
// import infoData from "./infodata";
// import { useState } from "react";

// function InfoTable() {
//   const [data] = useState(infoData);
//   return (
//     <>
//       <table>
//         <thead>
//           <td>id</td>
//           <td>name</td>
//           <td>age</td>
//           <td>job</td>
//           <td>Is Active</td>
//         </thead>
//         <tbody>
//           {data.map((x) => (
//             <tr key={x.map}>
//               <td>{x.id}</td>
//               <td>{x.name}</td>
//               <td>{x.age}</td>
//               <td>{x.job}</td>
//               <td>{x.isActive ? "Yes" : "No"}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// }

// export default InfoTable;
