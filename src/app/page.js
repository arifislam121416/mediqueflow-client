

import HeroPage from "@/components/HeroPage";
import HowWorkTutors from "@/components/HowWorkTutors";
import ReviewSection from "@/components/ReviewSection";
import AvailableTutorials from "./availabletutorials/page";






export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
<HeroPage/>
<AvailableTutorials/>
<HowWorkTutors/>
<ReviewSection/>
    </div>
  );
}
