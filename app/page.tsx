import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Timeline from "@/components/Timeline";
import Section from "@/components/Section";
import AppleScroll from "@/components/AppleScroll";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";

export default function Page() {
  return (
    <main className="bg-black">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero id="home" />
      <Section id="features" title="Seamless Experience" />
      <AppleScroll />
      <Timeline />
      <Section id="pricing" title="Built for Performance" />
    </main>
  );
}