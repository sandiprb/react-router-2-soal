import { useParams } from "react-router-dom";

export default function StoreLocation() {
  const params = useParams();
  console.log(params)
//   const stores = {
//     mumbai: {
//       name: "Mumbai Store",
//       address: "Mumbai, Maharashtra",
//     },
//     delhi: {
//       name: "Delhi Store",
//       address: "Delhi, Delhi",
//     },
//     chennai: {
//       name: "Chennai Store",
//       address: "Chennai, Tamil Nadu",
//     },
//     jaipur: {
//       name: "Jaipur Store",
//       address: "Jaipur, Rajasthan",
//     },
//   };
//   if (!stores[id]) return <div>404 Page not found</div>;
//   return (
//     <div>
//       <h2>Welcome to our {stores[id].name}.</h2>
//       <div>
//         <h3>Address</h3>
//         <p>{stores[id].address}</p>
//       </div>
//     </div>
//   );
return <div>1</div>
}
