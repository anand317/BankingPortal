import React, { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { removeBenificiary } from "../../utils/BenificiarySlice";

const RemoveBenificiary = () => {
  const dispatch= useDispatch()

  const [selectedBenificiary, setSelectedBenificiary] = useState("");
  

  const benificiary = useSelector((store) => store.Benificiary.Benificiary);

  const handleSelectChange = (e) => {
    setSelectedBenificiary(e.target.value);

    
  };

  const handleSubmit = () => {
    dispatch(removeBenificiary(selectedBenificiary));
  };

  

  return (
    <div style={{ maxWidth: "300px" , margin:"50px"}}>
      <div>
        <label> Select Beneficiary to be removed:</label>
        <select
          type="string"
          value={selectedBenificiary}
          onChange={handleSelectChange}
        >
          <option value="" disabled>
            Select a benificiary
          </option>

          {benificiary.map((b, index) => {
            return (
              <option key={index} value={b.fullName}>
                {b.fullName}
              </option>
            );
          })}
        </select>

        <div>
            <input type="submit" onClick={handleSubmit}/>
        </div>
      </div>
      
      )
    </div>
  );
};

export default RemoveBenificiary;
