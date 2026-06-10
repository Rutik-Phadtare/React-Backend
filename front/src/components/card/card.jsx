/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import { SendHorizontal } from "lucide-react"
import styles from "./card.module.css"


function card(props) {
//      const showAlert = () => {
//     alert(`This is a ${props.user}!`);
//   };

//   const [age, setAge] = useState(props.age);


//   const handleUpdate = () => {
//     setAge(age + 1); // Increments the age by 1// Overwrites the address text
//   };

const [isAnimating, setIsAnimating] = useState(false);

 const handleAnimate = () => {
    setIsAnimating(true);

    // 2. Remove the animation class after it finishes (e.g., 500ms)
    // so the user can click and trigger it again later.
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return ( <>
        <div className={styles.card}>
            <img 
          src={props.img} 
          alt={props.user} 
          className={`profile-img ${isAnimating ? styles.shake: ""}`} 
        />
          <h1>Welcome, {props.user}!</h1>
          <p>Age: {props.age}</p>
          <p>Address: {props.address}</p>
          <button onClick={handleAnimate}><SendHorizontal size={15} height={14} /> Click Me</button>
        </div>
      </>
  )
}

export default card