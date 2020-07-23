import React, { useState, useEffect } from "react";
import Modal from "./Modal";

const User = (props) => {
  const [user, setUser] = useState([]);
  const [showActivity, setShowActivity] = useState(false);
  const [userActivity, setUserActivity] = useState([]);

  useEffect(() => {
    // fetch("https://full-throttle-assignment.firebaseio.com/Users.json", {
    //   method: "GET",
    // })
    //   .then((res) => res.json())
    //   .then((result) => {
    //       setUser(result.data);
    //   });
    let result = {
      ok: true,
      members: [
        {
          id: "W012A3CDE",
          real_name: "Egon Spengler",
          tz: "America/Los_Angeles",
          activity_periods: [
            {
              start_time: "Feb 1 2020  1:33PM",
              end_time: "Feb 1 2020 1:54PM",
            },
            {
              start_time: "Mar 1 2020  11:11AM",
              end_time: "Mar 1 2020 2:00PM",
            },
            {
              start_time: "Mar 16 2020  5:33PM",
              end_time: "Mar 16 2020 8:02PM",
            },
          ],
        },
        {
          id: "W07QCRPA4",
          real_name: "Glinda Southgood",
          tz: "Asia/Kolkata",
          activity_periods: [
            {
              start_time: "Feb 1 2020  1:33PM",
              end_time: "Feb 1 2020 1:54PM",
            },
            {
              start_time: "Mar 2 2020  11:11AM",
              end_time: "Mar 2 2020 2:00PM",
            },
            {
              start_time: "Mar 16 2020  5:33PM",
              end_time: "Mar 16 2020 8:02PM",
            },
          ],
        },
      ],
    };
    setUser(result.members);
  }, []);
  const removeActivityHandler = () => {
    setShowActivity(false);
  };
  const activityHandler = (activityData) => {
    setShowActivity(true);
    setUserActivity(activityData);
  };
  let userArray = null;
  if (user && user.length > 0) {
    userArray = user.map((item) => (
      <div className="card item-card" key={item.id}>
        {item.real_name}
        <i
          className="material-icons"
          style={{ float: "right" }}
          onClick={() => activityHandler(item.activity_periods)}
        >
          history
        </i>
      </div>
    ));
  }
  return (
    <div className="myCard">
      <Modal
        show={showActivity}
        clicked={removeActivityHandler}
        activity_periods={userActivity}
      />
      <div className="card user-card">
        <h2>Users</h2>
        {userArray}
      </div>
    </div>
  );
};

export default User;
