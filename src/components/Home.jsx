import React, { useState } from "react";
import { getQuestions } from "../action";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";

const Home = () => {
  const [number, setNubmer] = useState(10);
    const [category, setCategory] = useState(9);
    const [difficulty, setDiffculty] = useState("easy");
    const history = useNavigate();
    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("submit");
        console.log(number, category, difficulty);
        dispatch(getQuestions(number, category, difficulty));
        history('/game');
    }

  return (
    <div className="flex justify-center items-center border w-full h-screen ">
      <form onSubmit={submitHandler} className='flex flex-col justify-center items-center  bg-slate-800 text-white 2xl:w-1/2 2xl:h-2/3 2xl:rounded-3xl xl:w-1/2 xl:h-2/3 xl:rounded-3xl md:w-2/3 md:h-3/5 md:rounded-2xl lg:w-1/2 w-full h-full'>
        <table className=" w-full items-center justify-center h-3/4">
            <tbody className="flex flex-col w-full h-full items-center justify-center ">
          <tr className="2xl:my-8 xl:my-6 lg:my-5 md:my-4 my-4 flex justify-evenly w-full">
            <td className="text-left 2xl:text-3xl xl:w-2/6 md:w-2/6 w-2/6">
              <p htmlFor="">Number Of Questions</p>
            </td>
            <td>
              <input
                type="number"
                value={number}
                onChange={(e) => setNubmer(e.target.value)} className="2xl:text-3xl 2xl:w-96  xl:w-56 xl:rounded-xl xl:px-5 xl:py-2 md:rounded-xl md:w-52 md:px-3 md:py-1 text-black rounded-lg w-48 py-1 px-3"
              />
            </td>
          </tr>
          <tr className="2xl:my-8 xl:my-6 lg:my-5 md:my-4 my-4 flex justify-evenly w-full">
            <td className="text-left 2xl:text-3xl xl:w-2/6 md:w-2/6 w-2/6">
              <p htmlFor="">Category</p>
            </td>
            <td>
            <select
              name="category"
              id=""
              onChange={(e) => setCategory(e.target.value)} className="2xl:text-3xl 2xl:w-96  xl:w-56 xl:rounded-xl xl:px-5 xl:py-2 md:rounded-xl md:w-52  md:px-3 md:py-1 text-black rounded-lg w-48 py-1 px-3"
            >
              <option value="9">General Knowledge</option>
              <option value="23">History</option>
              <option value="17">Science & Nature</option>
              <option value="18">Computer</option>
              <option value="19">Mathematics</option>
            </select>
            </td>
          </tr>
          <tr className=" 2xl:my-8 xl:my-6 lg:my-5 md:my-4 my-4 flex justify-evenly w-full">
            <td className="text-left 2xl:text-3xl xl:w-2/6 md:w-2/6  w-2/6">
              <p htmlFor="">Difficulty</p>
            </td>
            <td>
              <select name="difficulty" id="" onChange={(e) => setDiffculty(e.target.value)} className="2xl:text-3xl 2xl:w-96 xl:w-56 xl:rounded-xl xl:px-5 xl:py-2 md:rounded-xl md:w-52  md:px-3 md:py-1 text-black rounded-lg w-48 py-1 px-3">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </td>
          </tr>
         
          </tbody>
        </table>
        <input type="submit" value="Start" className=" 2xl:px-20 2xl:py-5 2xl:text-3xl xl:px-14 xl:py-3 xl:rounded-xl md:py-2 md:px-12 md:rounded-lg py-2 px-7 rounded-md hover:scale-110 cursor-pointer	duration-100	ease-in	 bg-green-500" />
      </form>
    </div>
  );
};

export default Home;
