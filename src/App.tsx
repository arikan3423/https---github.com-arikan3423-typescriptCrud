// import axios from "axios";
// import { userType } from "./types";
// import { useEffect, useState } from "react";

// function App() {
//   const [users, setUsers] = useState<userType[]>([]);
//   const getUser = async () => {
//     try {
//       const { data } = await axios.get<userType[]>(
//         "http://localhost:8000/user"
//       );
//       setUsers(data);
//     } catch {
//       console.log("hata olustu");
//     }
//   };
//   // const deleteData = (id: number) => {
//   //   axios.post("http://localhost:800/user", id).then((response) => {
//   //     setUsers(users.filter((i) => i.id !== users.id));
//   //   });
//   // };
//   const removeUser = async (id: number) => {
//     try {
//       const res = await axios.delete(`"http://localhost:8000/user"/${id}`);
//       console.log("Item successfully deleted.");
//     } catch (error) {
//       alert(error);
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []);
//   return (
//     <div>
//       {users.map((user) => {
//         return (
//           <div key={user.id}>
//             <p>{user.name}</p>
//             <p>{user.email}</p>
//             <p>{user.phone}</p>
//             <button
//               onClick={() => {
//                 removeUser(res.id);
//               }}
//             >
//               Delete
//             </button>
//             <button>Edit</button>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import List from "./Components/List";
import Add from "./Components/Add";
import Edit from "./Components/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}></Route>
          <Route path="/employee/create" element={<Add />}></Route>
          <Route path="/employe/edit/:empid" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
