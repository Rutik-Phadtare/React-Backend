import { motion, useScroll, useTransform } from "framer-motion"
import Middle from './Middle';

const Pagee2 = (props) => {
    console.log(props.imag);

     const { scrollYProgress } = useScroll()
  
  // Tracks scroll progress from 0 (top) to 1 (bottom)
  // Zooms from 1x to 1.15x, and pushes down 15% for a deep parallax feel
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])


    return (
        <div className="relative w-full mask-t-from-80% p-2 overflow-hidden">
      <motion.img 
        className="absolute inset-0 object-cover w-full h-screen z-0 will-change-transform" 
        src="https://images.unsplash.com/photo-1742899256965-297f3939e9b2?q=80&w=1333&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Background" 
        style={{ scale, y }}
      />
            <Middle imag={props.imag} />
        </div>
    );
}

export default Pagee2;