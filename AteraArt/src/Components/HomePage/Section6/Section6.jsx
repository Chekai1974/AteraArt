import React, { useState } from "react";
import marko from "../../../Images/HomePagePhoto/Marko.JPG";
import tanya from "../../../Images/HomePagePhoto/Tanya.JPG";
import ira2 from "../../../Images/HomePagePhoto/ira2.jpg";
function Section6() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderAnimation, setSliderAnimation] = useState(false);
  const array = [
    {
      id: 1,
      title: "Margo der feacgt",
      text: "lorem fwfwf  wfwkkkrr wpfrejmfrej jrnn tjng tjgnjkirjk ijkfnjg owlngjgt  jjrtnfgtnjkrt tjtgnjtntjt tjtntjnrkrkrt tjktjn  tjtntjkkr rjkr rtjkt tjkjtkerklegpegrre gergermremger egikrgmergm ermgkerj vb egkrg melkelm el glegoem emkrjer erierm egklre mremgme m el meltri melm r elm elm elj eglegelgmelmg lem leml elt5gerkgeoei melmgloerjg eg njegr remnmnejkkfnm  rmjmfgkr fgkg kg gjktiogtn tkg  tjktorn tr",
      sine: "Thantwrlf wleewm,fe ef",
      photo: marko,
    },
    {
      id: 2,
      title: "TEST TEST TEST",
      text: "lorem fwfwf  wfwkkkrr wpfrejmfrej jrnn tjng tjgnjkirjk ijkfnjg owlngjgt  jjrtnfgtnjkrt tjtgnjtntjt tjtntjnrkrkrt tjktjn  tjtntjkkr rjkr rtjkt tjkjtkerklegpegrre gergermremger egikrgmergm ermgkerj vb egkrg melkelm el glegoem emkrjer erierm egklre mremgme m el meltri melm r elm elm elj eglegelgmelmg lem leml elt5gerkgeoei melmgloerjg eg njegr remnmnejkkfnm  rmjmfgkr fgkg kg gjktiogtn tkg  tjktorn tr",
      sine: "Thantwrlf wleewm,fe ef",
      photo: tanya,
    },
    {
      id: 3,
      title: "Margo der feacgt",
      text: "lorem fwfwf  wfwkkkrr wpfrejmfrej jrnn tjng tjgnjkirjk ijkfnjg owlngjgt  jjrtnfgtnjkrt tjtgnjtntjt tjtntjnrkrkrt tjktjn  tjtntjkkr rjkr rtjkt tjkjtkerklegpegrre gergermremger egikrgmergm ermgkerj vb egkrg melkelm el glegoem emkrjer erierm egklre mremgme m el meltri melm r elm elm elj eglegelgmelmg lem leml elt5gerkgeoei melmgloerjg eg njegr remnmnejkkfnm  rmjmfgkr fgkg kg gjktiogtn tkg  tjktorn tr",
      sine: "Thantwrlf wleewm,fe ef",
      photo: ira2,
    },
  ];
  function nextSlide() {
    const newSlideIndex =
      currentSlide < array.length - 1 ? currentSlide + 1 : 0;
    setSliderAnimation(true);
    setTimeout(() => {
      setCurrentSlide(newSlideIndex);
      setSliderAnimation(false);
    }, 300);
  }
  function prevSlide() {
    const newSlideIndex =
      currentSlide === 0 ? array.length - 1 : currentSlide - 1;
    setSliderAnimation(true);
    setTimeout(() => {
      setCurrentSlide(newSlideIndex);
      setSliderAnimation(false);
    }, 300);
  }

  const currentObj = array[currentSlide];
  return (
    <div className="section6-container">
      <div className="section6-content">
        <div className={`slider ${sliderAnimation ? "on" : ""}`}>
          <div className="photo">
            <img src={currentObj.photo} alt="" />
          </div>
          <div className="text">
            <p id="title">{currentObj.title}</p>
            <p id="main-text">{currentObj.text}</p>
            <p id="sine">{currentObj.sine}</p>
          </div>
        </div>
        <h1 id="left" onClick={() => prevSlide()}>
          &lt;
        </h1>
        <h1 id="right" onClick={() => nextSlide()}>
          &gt;
        </h1>
      </div>
    </div>
  );
}

export default Section6;
