import axios from "axios";

export const getQuestions = (amount,category,difficulty) => async(dispatch) => {

    // console.log(amount,category,difficulty);
  const { data } = await axios.get(
    `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  );

//   console.log(data.results);
  dispatch({ type: "GET_QUESTIONS", payload: data });
};
