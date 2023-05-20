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

  useEffect(() => {
    fetch(`http://localhost:5000/audit/audit/${id}`).then((response) => {
      response.json().then((audit) => {
        setAppliance(audit.appliance);
        setQuantity(audit.quantity);
        setH(audit.h);
        setP(audit.p);
        setKwh(audit.kwh);
      });
    });
  }, []);

  async function update(ev) {
    ev.preventDefault();
    const res = await fetch("http://localhost:5000/audit/audit/update", {
      method: "PUT",
      body: JSON.stringify({ appliance, quantity, h, p, kwh, id }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.status === 400) {
      toast.error("fields are empty");
    } else if (res.status === 201) {
      toast.success("Update Successfully");
      setTimeout(() => {
        navigate("/serviceslist");
      }, 1000);
    } else {
      toast.error("Server error");
    }
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
