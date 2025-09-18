import Random from "./components/Random";
import Tag from "./components/Tag";

export default function App() {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-hidden items-center">
      <h1 className="absolute bg-white rounded-md w-11/12 text-center mt-[40px] ml-[25px] mr-[25px] ">
        Random Gifs
      </h1>
      <div className="flex flex-col">
        <Random />
        <Tag />
      </div>
    </div>
  );
}
