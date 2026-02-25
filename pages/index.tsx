import IntroSection from "@/Components/IntroSection";
import MostViewedLastWeek from "@/Components/mostViewedLastWeek"
import RentifyServices from "@/Components/RentifyServices";
import RentifyServicesMap from "@/Components/RentifyServicesMap"
import RequestMortgageLoan from "@/Components/RequestMortgageLoan"

export default function Home() {
  return (
    <div className="flex flex-col gap-16 pb-12 bg-gray-100">
      <IntroSection />
      <MostViewedLastWeek />
      <RentifyServices/>
      <RentifyServicesMap />
      
    </div>
  )
}
