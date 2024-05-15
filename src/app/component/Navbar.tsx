"use client";
import React,{ useEffect,useState } from 'react';
import Clock from "@/app/assets/Clock"
import CapitalA from "@/app/assets/CapitalA";
import Quote from "@/app/assets/Quote";
import Tools from "@/app/assets/Tools";

function Navbar() {


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
    { name: "quote", element: <Quote />, selected: false, arr: ["short", "medium", "long","all"], index: 0, group: 2 },
    { name: "custom", element: <Tools />, selected: false, arr: ["change"], index: -1, group: 2 },
    { name: "|", selected: false, extraClass: "bg-color2 rounded-md", group: 0 }
  ];
  const [list, setList] = useState(initialList);
  let selectedList: ListElement;
  list.forEach(elem => {
    if (elem.group == 2 && elem.selected) {
      selectedList = elem;
    }
  });

  useEffect(()=>{
    let nav = document.getElementById("nav")!;
    let prevWidth = nav.offsetWidth;
    nav.style.width = "fit-content";
    let currWidth = nav.offsetWidth;
    nav.style.width = prevWidth + "px";
    setTimeout(() => {
      nav.style.width = currWidth + "px";
    }, 100);
  },[list]);

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

  const changeIndex = (ind: number) => {
    const i = list.indexOf(selectedList);
    let newList = [...list];
    if( selectedList.name=="custom" ){
      return;
    }
    newList[i].index = ind;
    setList(newList);
  }

  return <>
    {
      list.map((l: ListElement, index: number): React.ReactElement => {
        return <button
          key={`${index}ListElement`}
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
          key={`${ind}selectedList`}
          onClick={() => changeIndex(ind)}
          className={`font-semibold ${ind == selectedList.index ? "text-color3" : "hover:text-color5"}`}>
          {elem}
        </button>
      })
    }
  </>
}

export default Navbar;