import Achievement from "@/components/homepage/Achievement";
import Banner from "@/components/homepage/Banner";
import EmployerSolution from "@/components/homepage/EmployerSolution";
import FeaturedEmployers from "@/components/homepage/FeaturedEmployers";
import FrequentlyQues from "@/components/homepage/FrequentlyQues";
import HotJobs from "@/components/homepage/HotJobs";
import JobCategories from "@/components/homepage/JobCategories";
import JobSeekerResource from "@/components/homepage/JobSeekerResource";
import NewsLetterSignup from "@/components/homepage/NewsLetterSignup";
import Testimonials from "@/components/homepage/Testimonials";

export default function Home() {
  return (
    <div className="pt-24 pb-14">
      <Banner />
      <HotJobs />
      <JobCategories />
      <FeaturedEmployers />
      <EmployerSolution />
      <JobSeekerResource />
      <FrequentlyQues />
      <Achievement />
      <Testimonials />
      <NewsLetterSignup />
    </div>
  );
}
