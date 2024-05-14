"use client";
import React, { useState } from 'react';
import Clock from "@/app/assets/Clock"
import CapitalA from "@/app/assets/CapitalA";
import Quote from "@/app/assets/Quote";
import Tools from "@/app/assets/Tools";

function App() {

  type ListElement = {
    name: string,
    selected: boolean
    element?: React.ReactElement,
    group: number,
    extraClass?: string,
    index?: number,
    arr?: (string | number)[]
  }

  let initialList: ListElement[] = [
    { name: "@punctuation", selected: true, group: 1 },
    { name: "#numbers", selected: false, group: 1 },
    { name: "|", selected: false, extraClass: "bg-color2 rounded-md", group: 0 },
    { name: "time", element: <Clock />, selected: true, arr: [20, 30, 60, 120], index: 0, group: 2 },
    { name: "words", element: <CapitalA />, selected: false, arr: [25, 50, 100, 150], index: 0, group: 2 },
    { name: "quote", element: <Quote />, selected: false, arr: ["short", "medium", "long"], index: 0, group: 2 },
    { name: "custom", element: <Tools />, selected: false, arr: ["custom"], index: 0, group: 2 },
    { name: "|", selected: false, extraClass: "bg-color2 rounded-md", group: 0 }
  ];
  const [list, setList] = useState(initialList);
  let selectedList: ListElement;
  list.forEach(elem => {
    if (elem.group == 2 && elem.selected) {
      selectedList = elem;
    }
  });

  const changeList = (ind: number) => {
    let newList = [...list];
    let elem = list[ind];

    if (elem.group == 1) {
      newList[ind].selected = !newList[ind].selected;
      setList(newList);
      return;
    }

    if (elem.group == 2) {
      newList.forEach((l: ListElement, i) => {
        if (l.group == 2) {
          l.selected = false;
          if (i == ind)
            l.selected = true;
        }
      });
      setList(newList);
      return;
    }
  }

  const changeIndex = (ind:number)=>{
    const i = list.indexOf(selectedList);
    let newList = [...list];
    newList[i].index = ind;
    setList(newList);
  }

  return (
    <div className=''>
      <div className='flex items-center gap-6 bg-color4 mx-auto my-4 px-8 py-2 rounded-md max-w-fit text-color2 text-md *:cursor-pointer'>
        {
          list.map((l: ListElement, index: number): React.ReactElement => {
            return <button
              onClick={() => changeList(index)}
              className={`flex items-center gap-2 ${l.selected ? "*:fill-color3 *:text-color3" : "group"} ${l.extraClass ?? ""}`}>
              {l.element}
              <div className={`group-hover:text-color5`}>{l.name}</div>
            </button>
          })
        }

        {
          selectedList!?.arr?.map((elem: (string | number), ind: number) => {
            return <button
              onClick={()=>changeIndex(ind)}
              className={`font-semibold ${ind == selectedList.index ? "text-color3" : "hover:text-color5"}`}>
              {elem}
            </button>
          })
        }

      </div>
    </div>
  )
}

export default App;