// import { Appbar } from "../components/Appbar"
// import { Balance } from "../components/Balance"
// import { Users } from "../components/Users"
// import { useEffect } from "react";

// export const Dashboard = () => {
    
//     useEffect(()=>{

//     })
   
//     return <div>
//         <Appbar />
//         <div className="m-8">
//             <Balance value={"10,000"} />
//             <Users />
//         </div>
//     </div>
// }

import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import { useEffect, useState } from "react";
import axios from 'axios';
// import jwt_decode from "jsonwebtoken";  // Import jwt-decode

export const Dashboard = () => {
    const [balance, setBalance] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (token) {
            // Decode the token to get the user ID (if needed)
            // const decodedToken = jwt_decode(token);
            // const userId = decodedToken.id;

            // Fetch the user's balance from the server
            axios.get('http://localhost:3000/api/v1/account/balance', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                const formattedBalance = parseFloat(response.data.balance).toFixed(2);
                setBalance(formattedBalance);
            })
            .catch(error => {
                console.error('Error fetching balance:', error);
            });
        }
    }, []);
   console.log(balance)
    return (
        <div>
            <Appbar />
            <div className="m-8">
                {balance !== null ? (
                    <Balance value={balance} />
                ) : (
                    <p>Loading balance...</p>
                )}
                <Users />
            </div>
        </div>
    );
}
