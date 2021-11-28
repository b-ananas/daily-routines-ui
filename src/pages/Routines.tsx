import React, { useEffect, useState } from "react";
import { API_URL } from "../constants";

const getRoutines = (accessToken: string) =>
  fetch(API_URL + "/api/v1/routines", {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
  }).then((response) => response.json());

interface RoutinesProps {
  accessToken: string;
}

export const Routines: React.FC<RoutinesProps> = ({ accessToken }) => {
  const [routines, setRoutines] = useState<any[]>([]);
  useEffect(() => {
    (async () => {
      setRoutines(await getRoutines(accessToken));
      console.log(routines);
    })();
  }, []);

  return (
    <table>
      {routines.map((routine) => (
        <tr>
          <td> {routine["title"]} </td>
          <td> {routine.desc} </td>
        </tr>
      ))}
    </table>
  );
};
