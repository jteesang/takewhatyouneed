import Image from "next/image";
import Item from "@/components/Item";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">

      <div className="justify-center font-mono text-sm lg:flex">
        <h1>friends and family sale</h1>
      </div>
  
      <div className="justify-start font-mono text-sm py-10">
        <p>seller: <button className="bg-violet-100 rounded-full p-0.8">julia!</button></p>
        <p>location: some place (<a className="text-violet-500" href="#">map</a>)</p>
        <p>dates: <button className="bg-violet-100 rounded-full p-0.8">now - aug 2024</button></p>
      </div>
      
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className= "grid grid-cols-3 grid-flow-col gap-4 w-full">
          <Item name={"tv"} description={"65\" LG tv"} img="/moving2024-tv.png"/>
          <Item name={"item2"} description={"description2"}/>
          <Item name={"item3"} description={"description3"}/>
        </div>
      </div>
    </main>
  );
}
