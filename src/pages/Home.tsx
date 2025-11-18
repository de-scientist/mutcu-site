import type { FC } from "react";

const Home: FC = () => {
  return (
    <main className="pt-20">
      <section className="hero h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/hero.jpg')" }}>
        <h1 className="text-4xl font-bold text-white bg-black/50 px-6 py-4 rounded-xl">
          Welcome to MUTCU
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-700 leading-relaxed">
          A family of believers at Murang’a University of Technology…
        </p>
      </section>
    </main>
  );
};

export default Home;
