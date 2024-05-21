import Image from "next/image";
import Hero from "./components/Hero";
import Featured from "./components/Featured";
import Card from "./components/Card";
import Collection from "./components/Collection";
import Vip from "./components/Vip";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Featured />
      <Card />
      <Collection />
      <Vip />
    </div>
  );
}
