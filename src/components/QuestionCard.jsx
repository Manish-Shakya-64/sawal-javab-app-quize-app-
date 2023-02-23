import React, {useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const QuestionCard = () => {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  const [visible, setVisible] = useState(false);
  const que = [];
  let len;
  let correctAns ;

  const { questions, loading } = useSelector((state) => state.questions);


  if (loading === 0 && !visible) {
    for (let i = 0; i < questions[count].incorrect_answers.length; i++) {
      que.push(questions[count].incorrect_answers[i]);
    }
    que.push(questions[count].correct_answer);
    correctAns = questions[count].correct_answer;
    // console.log(que);
    // console.log(correctAns);
    len =questions.length;
  }

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }


  shuffle(que);
//   console.log(que);

  const nextQuestion = (e) => {
    setTimeout(function () {
      setCount(count + 1);
    }, 500);

    if (count >= len - 1) {
      setVisible(true);
    }

    const selectedAns = document.getElementById(e.target.id).innerText;


    if(selectedAns === correctAns){
      setScore(score + 1)
    }
    
  };


  return (
    <>
     <div className="flex justify-center items-center w-screen h-screen border border-black text-white">
      {loading === 0 && !visible ? (

       
        <div className="flex justify-center flex-col items-center border w-full bg-slate-800 h-full sm:w-4/5 sm:h-4/5 sm:rounded-t-xl md:w-4/5 md:h-4/5 md:rounded-xl lg:w-1/2">
          <div className="text-sm text-center w-11/12 lg:text-lg  2xl:text-xl">
            <p>
              {count + 1}.&nbsp;{questions[count].question}
            </p>
          </div>
          <div className="mt-4 w-full flex flex-col justify-center items-center">
            {que.map((item, index) => {
              return (
                <p key={index} id={index} onClick={nextQuestion} className="w-4/5 bg-slate-600 border border-white  text-center my-4 py-2 text-sm rounded-2xl hover:scale-105 cursor-pointer	duration-200	ease-in md:w-4/5 lg:text-lg 2xl:text-xl">
                  {item}
                  {/* {console.log(index)} */}
                </p>
              );
            })}
          </div>
        </div>
        
      ) : (
        <h1 className="text-lg text-center w-screen">Loading...</h1>
      )}

      {visible ? (
        <div className="flex flex-col bg-slate-900 justify-center items-center w-1/3 absolute h-1/3">
          <h1 className="absolute top-5 text-xl border-y-2 py-2">Score Board</h1>
          <p className="text-xl">
            Score : {score}/{questions.length}
          </p>
        <Link to="/" className="absolute -bottom-24 py-1 px-8 rounded bg-red-500">Restart</Link>
        </div>
      ) : null}
      </div>
    </>
  );
};

export default QuestionCard;
