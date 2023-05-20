import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Fotter from "../../components/Fotter/Fotter";
import Nav from "../../components/Nav/Nav";
import toast, { Toaster } from "react-hot-toast";

function EditServicess() {
  const [appliance, setAppliance] = useState("");
  const [quantity, setQuantity] = useState("");
  const [h, setH] = useState("");
  const [p, setP] = useState("");
  const [kwh, setKwh] = useState("");

  const navigate = useNavigate("");
  const { id } = useParams();

  function Cal() {
    setKwh(quantity * h * p);
  }

  
            Update
          </button>
        </div>
      </div>

      {/* <div onClick={() => onClick("account")} className="backBtnn">
        PREVIOUS
      </div> */}

      <Fotter />
    </div>
  );
}

export default EditServicess;
