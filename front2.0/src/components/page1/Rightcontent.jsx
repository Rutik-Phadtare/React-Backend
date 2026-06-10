

const RightContent = () => {
  // 1. Base date logic to get current, past, and future dates dynamically
  const today = new Date();
  
  const getRelativeDay = (offset) => {
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + offset);
    return targetDate.toLocaleDateString('en-US', { day: '2-digit' });
  };

  const dayMinus2 = getRelativeDay(-2); // 2 days ago
  const dayMinus1 = getRelativeDay(-1); // Yesterday
  const currentDay = getRelativeDay(0);  // Today 🎉
  const dayPlus1  = getRelativeDay(1);  // Tomorrow
  const dayPlus2  = getRelativeDay(2);  // 2 days from now

  return (
    <div className="h-full p-2 w-2/6 flex items-center justify-center ">

      {/* Container holding the layout stack */}
      <div className="relative flex items-center select-none font-sans font-medium tracking-widest text-white">

        {/* Vertical number stack */}
        <div className="flex flex-col items-center gap-4 text-sm text-white/30 tabular-nums">
          <span>{dayMinus2}</span>
          <span>{dayMinus1}</span>

          {/* Active current day highlighted precisely */}
          <span className="text-4xl font-bold text-white tracking-normal py-1">
            {currentDay}
          </span>

          <span>{dayPlus1}</span>
          <span>{dayPlus2}</span>
        </div>

        {/* The horizontal design indicator line branching off to the right */}
        <div className="absolute left-14 w-24 h-[1px] bg-white/70" />

      </div>

    </div>
  );
};

export default RightContent;