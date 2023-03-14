import AboutMe from "@/components/about-me"
import ProfessionalExperience from "@/components/professional-experience"
import Sidebar from "@/components/sidebar"
import { professionalData } from "../../data/page-data"

export default function Home() {
  return (
    <div>
      <AboutMe />
      <ProfessionalExperience data={professionalData} />
    </div>
  )
}
