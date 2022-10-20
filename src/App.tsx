import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#11998e] to-[#38ef7d] w-scren min-h-screen h-auto font-poppins">
      <Header />
      <MainContent />
    </div>
  );
};

export default App;
