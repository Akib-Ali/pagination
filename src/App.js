// import logo from './logo.svg';
// import './App.css';
// import React, { useState, useCallback } from "react";
// import Paginations from "./Pagination";
// import data from "./data.json"

// function App() {

//   const [currentPage, setCurrentPage] = useState(1);
//   let NUM_OF_RECORDS = data.length;
//   let LIMIT = 5;

//   const onPageChanged = useCallback(
//     (event, page) => {
//       event.preventDefault();
//       setCurrentPage(page);
//     },
//     [setCurrentPage]
//   );
//   const currentData = data.slice(
//     (currentPage - 1) * LIMIT,
//     (currentPage - 1) * LIMIT + LIMIT
//   );
//   return (
//     <main role="main" class="container">
//       <div className="current-page">
//         <div className="user">
//           <div className="user__body">
//             <table id="table1" border="1">
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>userId</th>
//                   <th width="100%">title</th>
//                   <th>status</th>
//                 </tr>
//               </thead>
//               {currentData.map((item) => {
//                 return (
//                   <tbody border="1">
//                     <tr>
//                       <th scope="row">{item.id}</th>
//                       <th scope="row">{item.userId}</th>
//                       <td>{item.title}</td>
//                       <td>{item.completed ? "completed" : "not completed"}</td>
//                     </tr>
//                   </tbody>
//                 );
//               })}
//             </table>
//           </div>
//         </div>
//         <div className="pagination-wrapper">
//           <Paginations
//             totalRecords={NUM_OF_RECORDS}
//             pageLimit={LIMIT}
//             pageNeighbours={2}
//             onPageChanged={onPageChanged}
//             currentPage={currentPage}
//           />
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;


import logo from './logo.svg';
import './App.css';
import React, { useState, useCallback } from "react";
import Paginations from "./Pagination";
import data from "./data.json";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const NUM_OF_RECORDS = data.length;
  const LIMIT = 5;

  const onPageChanged = useCallback(
    (event, page) => {
      event.preventDefault();
      setCurrentPage(page);
    },
    [setCurrentPage]
  );

  const currentData = data.slice(
    (currentPage - 1) * LIMIT,
    (currentPage - 1) * LIMIT + LIMIT
  );

  return (
    <main role="main" className="container">
      <div className="current-page">
        <div className="user">
          <div className="user__body">
            <table className="custom-table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>userId</th>
                  <th width="100%">title</th>
                  <th>status</th>
                </tr>
              </thead>
              <tbody>
                {currentData.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.userId}</td>
                    <td>{item.title}</td>
                    <td>{item.completed ? "completed" : "not completed"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pagination-wrapper">
          <Paginations
            totalRecords={NUM_OF_RECORDS}
            pageLimit={LIMIT}
            pageNeighbours={2}
            onPageChanged={onPageChanged}
            currentPage={currentPage}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
