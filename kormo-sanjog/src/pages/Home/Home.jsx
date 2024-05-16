import CategoryList from "./CategoryList";
import FeaturedJobs from "./FeaturedJobs";
import Hero from "./Hero";
import Partner from "./Partner";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partner />
      <CategoryList />
      <FeaturedJobs />
    </main>
  );
}
