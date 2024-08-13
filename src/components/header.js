const Header = () => {
  return (
    <div className="flex items-center justify-between py-6 px-12 border-b">
      <h1 className="text-4xl text-black font-bold ">D3.js</h1>
      <nav className="flex items-center space-x-8 font-bold">
        <a href="/" className="underline">
          Shape
        </a>
        <a href="/histogram" className="underline">
          Histogram
        </a>
        <a href="/scatter-plot" className="underline">
          Scatter Plot
        </a>
        <a href="/project-two" className="underline">
          Project Two
        </a>
      </nav>
    </div>
  );
};

export default Header;
