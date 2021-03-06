import React from "react";
import Bar from "./Bar";

const SecondStep = ({
  currStep,
  prevButton,
  nextButton,
  handleChange,
  bags,
  error
}) => {
  if (currStep !== 2) {
    return null;
  }

  return (
    <div>
      <Bar />
      <div className="secondStep_form--container">
        <div className="secondStep_form--wrapper">
          <span>Step 2/4</span>
          <div className="secondStep_form">
            <div className="select_box">
              <label>
                Enter the number of bags you have packed your items into:
              </label>
              <span>Number of bags:</span>
              <select
                defaultValue={!bags ? "-1" : bags}
                id="secondStep_select"
                name="bag"
                onChange={handleChange}
                style={error ? { borderColor: "#FF0000" } : null}
              >
                <option value="-1" disabled>
                  -- select --
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>
          <div className="buttons_box">
            <div className="secondStep_form--buttons">
              {prevButton()}
              {nextButton()}
            </div>
            {error ? <p className="form_error">{error}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
