import { useState } from "react";
import "./index.css";

function BmiCalclulate() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState(0);
  const [message, setMessage] = useState("");

  const calcBmi = (e) => {
    e.preventDefault();
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (weightValue <= 0 || heightValue <= 0) {
      alert("Please enter valid weight and height.");
      return;
    }

    const bmi = weightValue / (heightValue * heightValue);
    setBmi(bmi.toFixed(1));

    if (bmi < 18.5) {
      setMessage("You're underweight");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      setMessage("You're normal weight");
    } else if (bmi > 24.9 && bmi <= 29.9) {
      setMessage("You're overweight");
    } else {
      setMessage("Obesity");
    }
  };

  const reload = () => {
    window.location.reload();
  };

  return (
    <div
      className="h-screen flex justify-center "
      style={{ background: " rgb(56,109,47)" }}
    >
      <div
        className=" h-96 w-[470px] mt-11 rounded-md max-sm:h-full max-sm:mt-0"
        style={{ background: "rgb(162,199,100)" }}
      >
        
        <form
          className="flex h-full flex-col items-center  mt-4 gap-5"
          onSubmit={calcBmi}
        >
          <h1 className="text-black font-bold text-2xl pt-5 ">
            BMI Calculator
          </h1>
          <div className="flex flex-col">
            <label>Weight (Kg)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              className="border rounded w-80 h-10 px-3"
            />
          </div>
          <div className="flex flex-col">
            <label>Height (M)</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              className="border rounded w-80 h-10 px-3"
            />
          </div>
          <div className="flex gap-x-2">
            <button
              className="btn bg-green-600 text-white h-10 w-[155px]"
              type="submit"
            >
              Submit
            </button>
            <button
              className="btn btn-outline h-10 w-[155px] bg-red-700"
              onClick={reload}
              type="button"
            >
              Reload
            </button>
          </div>
          <div className="flex flex-col items-center ">
            <h2 className="">Your BMI is: {bmi}</h2>
            <p className="">{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BmiCalclulate;
