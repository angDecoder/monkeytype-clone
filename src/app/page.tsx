import Navbar from "@/app/component/Navbar";

const App = (() => {

  return (
    <nav
    id='nav'
    className={`w-fit overflow-hidden flex items-center gap-6 bg-color4 mx-auto my-4 px-8 py-2 rounded-md  text-color2 text-md *:cursor-pointer transition-all duration-300 ease-in-out`}>
      <Navbar />
    </nav>
  )
});

export default App;