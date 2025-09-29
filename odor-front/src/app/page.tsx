import HeroSlide from "@/components/HeroSlide/HeroSlide";

export default function HomePage() {
  return (
    <section className="relative">
      <HeroSlide />
      <div className="relative z-20">
        <h2 className="text-3xl text-center mt-20">Main Content </h2>
      </div>
    </section>
  );
}
