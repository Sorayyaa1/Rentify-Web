import IntroSection from "@/Components/IntroSection";
import MostViewedLastWeek from "@/Components/mostViewedLastWeek"

export default function Home() {
  return (
    <div className="flex flex-col gap-20 bg-gray-100">
       <IntroSection />
       <MostViewedLastWeek />
       
    </div>
  )
}
