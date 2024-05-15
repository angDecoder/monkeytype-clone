import Navbar from "@/app/component/Navbar";
import Test from "@/app/component/Test";

const App = (() => {

  return (
    <main className="flex-grow">
      <nav
        id='nav'
        className={`w-fit overflow-hidden flex items-center gap-6 bg-color4 mx-auto my-4 px-8 py-2 rounded-md  text-color2 text-md *:cursor-pointer transition-all duration-300 ease-in-out`}>
        <Navbar />
      </nav>
      <Test />
    </main>
  )
});

export default App;