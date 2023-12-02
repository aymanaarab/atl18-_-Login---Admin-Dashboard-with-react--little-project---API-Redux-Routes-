import React, { useEffect, useState } from "react";
import Image from "../images/MBDTF.png";
import { getUsers, modifier } from "../redux/UserSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.data);

  useEffect(() => {
    dispatch(getUsers());
    
  },[dispatch]);
  let navigate = useNavigate();
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");
  const [validation, setvalidation] = useState(false);
  const username = users.filter(u=>u.email===user).name
  function handlSubmit(e) {
      e.preventDefault();
      console.log("apres ",users);
    const isValidUser = users?.some(
      (u) => u.email === user && u.password === pass
    );

    if (isValidUser) {
      setvalidation(true);
      alert("correcte")
    
      navigate("accueil");

      dispatch ( modifier(user))
    } else {
      alert("mot de passe ou email incorrect");
      document.getElementById("user").focus();
    }
  }

  return (
    <form>
      <img src={Image} alt="abcd"  />
      <input
        id="user"
        type="text"
        placeholder="username"
        value={user}
        onChange={(e) => setuser(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={pass}
        onChange={(e) => setpass(e.target.value)}
      />
      <button onClick={(e) => handlSubmit(e)}>
        {validation && <Link to={"acceuil"}></Link>}
        se connecter
      </button>
    </form>
  );
}

//     for (let index = 0; index < users.length; index++) {
//         if (user === index.email && pass === index.password){
// setvalidation (true);
//         }
//         else{
//             alert("mot de passe ou email incorrect")
//             document.getElementById("user").focus();
//         }

//     }

//   users?.filter((u) => u.email === user) === true &&
//   users?.filter((u) => u.password === pass) === true
