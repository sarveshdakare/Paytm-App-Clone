// import { Link, useNavigate } from 'react-router-dom';

// const Nav = () => {
//   const auth = localStorage.getItem('token');
//   const navigate = useNavigate();

//   const logout = () => {
//     localStorage.clear();
//     navigate('/signup');
//   };

//   return (
//     <div className=''>
//       {auth ? (
//         <ul className='nav'>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//           {/* <li><Link to="/send">Send Money</Link></li> */}
//           <li><Link to="/signup" onClick={logout}>Logout</Link></li>
//         </ul>
//       ) : (
//         <ul className='nav'>
//           <li><Link to="/signup">Sign Up</Link></li>
//           <li><Link to="/signin">Login</Link></li>
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Nav;

import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('token');
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-gray-800 text-white">
      <ul className="flex justify-center p-4 space-x-4">
        {auth ? (
          <>
            <li>
              <Link to="/dashboard" className="hover:text-gray-400">Dashboard</Link>
            </li>
            {/* <li>
              <Link to="/send" className="hover:text-gray-400">Send Money</Link>
            </li> */}
            <li>
              <Link to="/signup" onClick={logout} className="hover:text-gray-400">Logout</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/signup" className="hover:text-gray-400">Sign Up</Link>
            </li>
            <li>
              <Link to="/signin" className="hover:text-gray-400">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Nav;
