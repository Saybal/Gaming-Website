import "./App.css";
import About from "./Component/About";
import Features_Section from "./Component/Featured_Section/Features_Section";
import Hero from "./Component/Hero";
import NavBar from "./Component/NavBar";

// #e7e5e4

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
        {/* Dashed Grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
        linear-gradient(to right, #91A3B0 1px, transparent 1px),
        linear-gradient(to bottom, #91A3B0 1px, transparent 1px)
      `,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0, 0 0",
          maskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          WebkitMaskImage: `
        repeating-linear-gradient(
          to right,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        ),
        repeating-linear-gradient(
          to bottom,
          black 0px,
          black 3px,
          transparent 3px,
          transparent 8px
        )
      `,
          maskComposite: "intersect",
          WebkitMaskComposite: "source-in",
        }}
      />
      <NavBar />
      <Hero />
      <About />
      <Features_Section />
    </main>
  );
}

export default App;
