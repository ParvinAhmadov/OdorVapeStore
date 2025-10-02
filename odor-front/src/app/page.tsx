import HeroSlide from "@/components/HeroSlide/HeroSlide";
import TopCatagories from "@/components/TopCatagories";

export default function HomePage() {
  return (
    <section className="relative">
      <HeroSlide />
      <div className="relative z-20">
        <TopCatagories />
      </div>
    </section>
  );
}
