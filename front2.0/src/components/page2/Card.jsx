import { motion } from "framer-motion";

const Card = (props) => {
  function fun(val){
    console.log(val);
  }
  return (
    <motion.div
      className="
        text-white h-120 bg-green-300 text-center relative p-2 overflow-hidden
        flex flex-col justify-center items-center rounded-2xl w-80
        cursor-pointer
      "

      // Scroll Animation
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}

      // Hover Animation
      whileHover={{
        y: -20,
        scale: 1.05,
        rotate: 1,
        boxShadow: "0px 30px 60px rgba(0,0,0,0.4)",
      }}

      transition={{
        duration: 0.6,
        ease: "easeOut",
      }}
    >
      <motion.img
        className="absolute inset-0 object-cover w-full h-full z-0" onMouseEnter={()=>{
          console.log("hi")
        }}
        src={props.sr}
        alt="Trip Package"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.4 }}
      />

      <div className="relative z-10 mt-70 bg-black/40 p-4 rounded-lg backdrop-blur-sm" onMouseEnter={function(val){
        fun(val.target);
      }}>
        <h1 className="text-2xl font-bold">TYP N1</h1>
        <h3 className="text-sm">Trip package one on one.</h3>
      </div>
    </motion.div>
  );
};

export default Card;