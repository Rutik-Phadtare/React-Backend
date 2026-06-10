import { Plane } from 'lucide-react';
import { PlaneTakeoff } from 'lucide-react';
import { PlaneLanding } from 'lucide-react';
const leftcontent = () => {
  return (
    <div className="h-full p-2 pl-25 w-5/6 flex items-center">
  <div className="text-8xl font-bold text-white tracking-wider leading-none
                  text-stroke-sm text-stroke-white/30 
                  text-shadow-lg font-['Georgia']">
    VISIT<br />TOKYO<Plane className='absolute top-50 right-150'/><PlaneTakeoff className='absolute top-95 right-245'/><PlaneLanding className='absolute top-80 right-22' />
  </div>
</div>
  )
}

export default leftcontent