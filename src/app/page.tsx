import About from "@/components/about";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Service from "@/components/service";

export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-black relative min-h-screen overflow-hidden">
      <Hero />
      <Service />
      <About />
      <Footer />
    </div>
  );
}
