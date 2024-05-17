"use client";
import React, { useEffect, useRef, useState } from 'react';
import Restart from "@/app/assets/Restart";
import Tooltip from "@/app/component/Tooltip";

function Test() {

  let testString = "hello how are you Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia autem debitis voluptates doloribus sequi adipisci dignissimos hic sed, labore amet voluptatum, reprehenderit neque, cupiditate similique quos. Quibusdam quod blanditiis ipsa, alias nostrum dolorum architecto rem iusto corporis voluptatem sint suscipit explicabo iure molestiae soluta inventore? Amet consequuntur esse rerum minus.";
  let arr = testString.split(" ").map(elem => elem + " ");
  const [wordsArr, setWordArr] = useState(arr);
  let prevValue = useRef("");

  const moveForward = (target: HTMLInputElement) => {
    let currWord: HTMLElement = document.querySelector(".active.word")!;
    let currChar: HTMLElement = document.querySelector(".active.character")!;

    let value = target.value;
    let wid = Number(currWord.dataset.wordid);
    let cid = Number(currChar?.dataset?.charid?.split("-").pop() || 0);


    let typedChar = value[value.length - 1];
    let actualChar = arr[wid][cid];

    let nextWord: HTMLElement = document.querySelector(`.word[data-wordid="${wid + 1}"]`)!;
    let isLastChar = false;
    let nextChar: HTMLElement = document.querySelector(`.character[data-charid="${wid + "-" + (cid + 1)}"]`)!;
    if (!nextChar) {
      nextChar = document.querySelector(`.character[data-charid="${(wid + 1) + "-" + 0}"]`)!;
      isLastChar = true;
    }
    if (!nextWord && !nextChar) {
      // game ends
      return;
    }


    currChar.classList.remove("active");
    currChar.classList.remove("notdone");

    if (typedChar === actualChar) {
      // correct
      currChar.classList.add("correct");
      currChar.classList.remove("incorrect");
      nextChar.classList.add("active");
      if (isLastChar) {
        currWord.classList.remove("active")
        nextWord.classList.add("active");
      }
    }
    else if (typedChar === " ") {
      // skip
      console.log("skip");
      nextChar = document.querySelector(`.character[data-charid="${(wid + 1) + "-" + 0}"]`)!;

      if (!nextWord || !nextChar) {
        // game ends 
        console.log("game end");
        return;
      }
      currWord.classList.remove("active")
      nextWord.classList.add("active");
      nextChar.classList.add("active");
      currChar.classList.add("notdone");
    }
    else {
      // incorrect
      currChar.classList.add("incorrect");
      currChar.classList.remove("correct");
      nextChar.classList.add("active");
      if (isLastChar) {
        currWord.classList.remove("active")
        nextWord.classList.add("active");
      }
    }

  }

  const moveBackward = (target: HTMLInputElement) => {
    let currWord: HTMLElement = document.querySelector(".active.word")!;
    let currChar: HTMLElement = document.querySelector(".active.character")!;

    let wid = Number(currWord.dataset.wordid);
    let cid = Number(currChar?.dataset?.charid?.split("-").pop() || 0);

    let prevWord: HTMLElement = document.querySelector(`.word[data-wordid="${wid - 1}"]`)!;
    let prevChar: HTMLElement = document.querySelector(`.character[data-charid="${wid + "-" + (cid - 1)}"]`)!;
    let len = arr[wid - 1]?.length;
    let isFirstChar = false;

    if (!prevChar) {
      prevChar = document.querySelector(`.word[data-wordid="${wid - 1}"] > .character[data-charid].notdone`)!;
      if (!prevChar) {
        return;
      }
      isFirstChar = true;
    }
    if (!prevWord && !prevChar) {
      // first character reached
      return;
    }

    currChar.classList.remove("active");
    currChar.classList.remove("correct");
    currChar.classList.remove("incorrect");
    currChar.classList.add("notdone");
    prevChar.classList.add("active");
    prevChar.classList.remove("correct");
    prevChar.classList.remove("incorrect");
    prevChar.classList.add("notdone");

    if (isFirstChar) {
      prevWord.classList.add("active");
      currWord.classList.remove("active");
    }
  }

  const focusToTyper = () => {
    const typer = document.getElementById("typer");
    typer?.focus();
    let currWord: HTMLElement = document.querySelector(".active.word")!;
    let testdiv: HTMLElement = document.querySelector('.testdiv')!;
    testdiv.style.overflowY = "scroll";
    currWord.scrollIntoView();
    testdiv.style.overflowY = "hidden";
  }

  const detectClick = (event: any) => {
    const target: HTMLInputElement = event.target;
    let value = target.value;

    if (value.length > prevValue.current.length) {
      moveForward(target);
    }
    else {
      moveBackward(target);
    }
    prevValue.current = value;
  }


  useEffect(focusToTyper);
  console.log("render");

  return (
    <div
      onClick={focusToTyper}
      className='flex flex-col justify-around items-center gap-3 w-full h-full'>

      <div className='flex flex-row flex-wrap gap-3 mx-auto w-11/12 text-6xl text-color2 testdiv'>
        {
          wordsArr.map((word, wid): React.ReactElement => {
            return <span
              data-wordid={wid}
              key={word + wid}
              className={`word w-fit flex gap-0.5 ${wid == 0 ? "active" : ""}`}>
              {
                word.split("").map((char, cid): React.ReactElement => {
                  return <span
                    data-charid={wid + "-" + cid}
                    className={`character notdone ${wid + cid == 0 ? "active" : ""}`}
                    key={word + cid}>
                    {char}
                  </span>
                })
              }
            </span>
          })
        }
      </div>
      <input
        className='-left-full fixed px-2 py-1'
        onChange={detectClick}
        type="text" name="typer" id="typer" />
      <button
        onClick={() => setWordArr([...arr])}
        className='relative mx-auto group'>
        <Restart />
        <Tooltip name='Restart' />
      </button>
    </div>
  )
}

export default Test;