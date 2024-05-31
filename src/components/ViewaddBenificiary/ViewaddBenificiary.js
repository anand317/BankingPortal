import React, { useState } from "react";
import { useSelector} from "react-redux";

const ViewaddBenificiary = () => {
  const [selectedBenificiary, setSelectedBenificiary] = useState("");
  const [filterData, setFilterData] = useState([]);

  const benificiary = useSelector((store) => store.Benificiary.Benificiary);

  const handleSelectChange = (e) => {
    setSelectedBenificiary(e.target.value);

    
  };

  const handleSubmit = () => {
    const data = benificiary.filter((b) => b.fullName == selectedBenificiary);
    setFilterData(data);
  };

  

  return (
    <div style={{ maxWidth: "300px", margin:'50px' }}>
      <div>
        <label>Beneficiaries</label>
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
      {filterData && ( <div style={{ backgroundColor: "white", borderRadius: "5px" }}>
          <ul style={{ listStyleType: "none" }}>
            <li>Full Name : {filterData[0]?.fullName}</li>
            <li>Bank Name : {filterData[0]?.bankName}</li>
            <li>Account Number : {filterData[0]?.accNumber}</li>
            <li>Country : {filterData[0]?.country}</li>
            <li>Pincode : {filterData[0]?.pinCode}</li>
          </ul>
        </div>
      )}
      )
    </div>
  );
};

export default ViewaddBenificiary;
