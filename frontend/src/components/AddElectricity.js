import React, {useState}from "react";
























export default function AddElectricity(){
    return(

        <div>
        <div class="container right-panel-active">
          <div class="container__form container--signup">
            <form action="#" class="form" id="form1">
              <h2 class="form__title">SAVING POWER AND MONEY</h2>
              <input type="text" id="pannelSize" class="input" />
              <select id="company" class="input">
                <option value="" disabled selected>Select a Company</option>
                <option value="Company A">Company A</option>
                <option value="Company B">Company B</option>
                <option value="Company C">Company C</option>
              </select>
              <input type="text" id="intensity" class="input" />
              <input type="text" id="monthlyBill" class="input" />
              <input type="text" id="units" class="input" />
              <input type="text" id="irradiance" class="input" />
              <input type="email" id="conversionEfficiency" class="input" />
              <button class="btn">SUBMIT</button>
            </form>
          </div>
      
          <div class="container__overlay">
            <div class="overlay">
              <div class="overlay__panel overlay--left"></div>
              <div class="overlay__panel overlay--right">
                <button class="btn" id="submit">SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )
}