import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { API_URL } from "../constants";

const getRoutineActivities = (accessToken: string, id: string) =>
  fetch(`${API_URL}/api/v1/routines/${id}/activities`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((response) => response.json());

interface RoutineProps {
  accessToken: string;
  routine: any;
}

export const Routine: React.FC<RoutineProps> = ({ accessToken, routine }) => {
  const [activities, setActivities] = useState<any>({});
  useEffect(() => {
    (async () => {
      setActivities(await getRoutineActivities(accessToken, routine.id));
      console.log(activities);
    })();
  }, []);

  return (
    <div>
      <h3> {routine.title} </h3>
      <div> {routine.desc} </div>
      {activities.length > 0 ? (
        <>
          <h3>Activities</h3>
          <ul>
            {activities.map((activity: any) => (
              <li> {activity.content} </li>
            ))}
          </ul>
        </>
      ):null}
    </div>
  );
};
