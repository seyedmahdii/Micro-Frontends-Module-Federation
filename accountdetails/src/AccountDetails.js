import React, { useState } from "react";

const AccountDetails = (props) => {
  const [lastPaymentDate, setPaymentChanged] = useState("Jan 2021");

  props.emitter.on("paymentChanged", (date) => setPaymentChanged(date));

  return (
    <div>
      <h3>Account Details</h3>
      <ul>
        <li>
          <i>name:</i> Mahdi
        </li>
        <li>
          <i>username:</i> seyedmahdi
        </li>
        <li>
          <i>email:</i> seyedmahdijalali2020@gmail.com
        </li>
        <li>
          <i>member since:</i> Jan 2021
        </li>
        <li>
          <i>last payment changed: </i>
          {lastPaymentDate}
        </li>
        <li>
          <a href="#">Change account details</a>
        </li>
      </ul>
    </div>
  );
};

export default AccountDetails;
