// import {
//   BrowserRouter,
//   Route,
//   Routes,
// } from "react-router-dom";
// import { Signup } from "./pages/Signup";
// import { Signin } from "./pages/Signin";
// import { Dashboard } from "./pages/Dashboard";
// import { SendMoney } from "./pages/SendMoney";
// import {isAuthenticated} from "./Auth"

// function App() {
//   return (
//     <>
//        <BrowserRouter>
//         <Routes>
//           <Route path="/signup" element={<Signup />} />

//            {isAuthenticated() ?(
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/send" element={<SendMoney />} />
//            ):(
//           <Route path="/signin" element={<Signin />} />
//            )}
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import Nav from "./pages/Nav";
// import { PrivateRoute } from "./Auth";

function App() {

  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
       */}
       {/* <Route element={<PrivateRoute />}> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
      

        <Route path="/signup" element={<Signup />} />

        <Route path="/signin" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
