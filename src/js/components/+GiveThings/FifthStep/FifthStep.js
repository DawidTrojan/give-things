import React from "react";
import Moment from "react-moment";

const FifthStep = ({ currStep, prevButton, submitButton, form, isValid }) => {
  if (currStep !== 5) {
    return null;
  }

  return (
    <div>
      <div className="fifthStep_summary__container">
        <div className="fifthStep_summary__wrapper">
          <h3>Podsumowanie Twojej darowizny</h3>
          <div className="fifthStep_info__box">
            <span className="fifthStep_info__description">Oddajesz:</span>
            <div className="fifthStep_info__item">
              <div className="fiftStep_icon" />
              <div className="fifthStep_info__text">
                {!form.type ? null : (
                  <span>
                    {" "}
                    {form.type}
                    {", "}
                  </span>
                )}
                {!form.bags ? null : (
                  <span>
                    {" "}
                    {form.bags}
                    {", "}
                  </span>
                )}
                <span> {form.helpGroups.map(el => el).join(", ")}</span>
              </div>
            </div>
            <div className="fifthStep_info__item">
              <div className="fiftStep_icon__second" />
              <div className="fifthStep_info__text">
                <span>
                  dla lokalizacji:{" "}
                  {!form.localization
                    ? form.specificLocalization
                    : form.localization}
                </span>
              </div>
            </div>
            <div></div>
          </div>
          <div className="fifthStep_summary">
            <div className="fifth_summary__container">
              <div className="fifth_summary__box">
                <h4>Adres odbioru:</h4>
                <div className="summary_item">
                  <span>Ulica</span> <span> {form.address.street}</span>
                </div>
                <div className="summary_item">
                  <span>Miasto</span> <span> {form.address.city}</span>
                </div>
                <div className="summary_item">
                  <span>Kod pocztowy</span>
                  <span> {form.address.postCode}</span>
                </div>
                <div className="summary_item">
                  <span>Numer telefonu</span>
                  <span> {form.address.phoneNumber}</span>
                </div>
              </div>
              <div className="fifth_summary__box">
                <h4>Termin odbioru:</h4>
                <div className="summary_item">
                  <span>Data</span>
                  <span>
                    <Moment format="DD/MM/YYYY">{form.date}</Moment>
                  </span>
                </div>
                <div className="summary_item">
                  <span>Godzina</span> <span> {form.time}</span>
                </div>
                <div className="summary_item">
                  <span>Uwagi dla kuriera</span>
                  <span
                    style={
                      form.address.comments.length > 15
                        ? {
                            textOverflow: "ellipsis",
                            overflow: "hidden"
                          }
                        : null
                    }
                  >
                    {form.address.comments}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="fifthStep_summary__buttons">
            {prevButton()}
            {submitButton()}
          </div>
          {!isValid ? (
            <p className="form_error">Formularz zawiera błędy !</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default FifthStep;
