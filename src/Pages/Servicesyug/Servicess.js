import React, { useState } from "react";
import Nav from "../../components/Nav/Nav";
import Fotter from "../../components/Fotter/Fotter";
import jwt_decode from "jwt-decode";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
function Servicess() {
  
  const storedToken = localStorage.getItem("token");
  const decodedToken = jwt_decode(storedToken);
  const uid = decodedToken.userId;
  console.log(uid);

  const [appliance, setAppliance] = useState("");
  const [quantity, setQuantity] = useState("");
  const [h, setH] = useState("");
  const [p, setP] = useState("");
  const [kwh, setKwh] = useState("");

  const navigate = useNavigate();

  
            Genarate
          </button>
          <br></br>

          <label className="font-medium text-center">Kwh/Day</label>

          <input
            className="ml-[202px] text-center w-[100px] bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block p-2.5 "
            type="text"
            value={kwh}
            onChange={(e) => {
              setKwh(e.target.value);
            }}
            readOnly
          />

          <br></br>

          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            onClick={submit}
          >
           Add
          </button>

          <Link
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-5 text-center"
            to="/serviceslist"
          >
            View List
          </Link>
        </div>
      </div>

      {/* <div onClick={() => onClick("account")} className="backBtnn">
        PREVIOUS
      </div> */}

      <Fotter />
    </div>
  );
}

export default Servicess;
