import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
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
  if (!routines) {
    return <div>Add a routine to continue</div>;
  }

  if (routines.length > 0)
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th> Title </th>
            <th> Desc </th>
          </tr>
        </thead>
        <tbody>
          {routines.map((routine) => (
            <tr>
              <td> {routine.title} </td>
              <td> {routine.desc} </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  else return <div>You have not added any routines yet!</div>;
};
