import { motion, useScroll, useTransform } from "framer-motion"
import Navbar from "./components/Navbar"
import Pagee1 from "./components/page1/Pagee1"
import Pagee2 from "./components/page2/Pagee2"


 const imag=[
    {sr:"https://images.unsplash.com/photo-1591873381631-4104d6e7d105?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {sr:"https://images.unsplash.com/photo-1493997181344-712f2f19d87a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {sr:"https://plus.unsplash.com/premium_photo-1697630321943-413a918eff27?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},
    {sr:"https://plus.unsplash.com/premium_photo-1722872927967-08944f79a652?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
  ]
const App = () => {
  console.log(imag);
  const { scrollYProgress } = useScroll()
  
  // Tracks scroll progress from 0 (top) to 1 (bottom)
  // Zooms from 1x to 1.15x, and pushes down 15% for a deep parallax feel
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])

  return (
    <div className="relative w-full pt-2 overflow-hidden">
      <motion.img 
        className="absolute inset-0 object-cover mask-b-from-95% w-full h-screen z-0 will-change-transform" 
        src="https://images.unsplash.com/photo-1746890988365-06cb8407c275?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        alt="Background" 
        style={{ scale, y }}
      />

      <div className="relative z-10">
        <Navbar />
        <Pagee1 />
        <Pagee2 imag={imag} />
        
      </div>
    </div>
  )
}

export default App