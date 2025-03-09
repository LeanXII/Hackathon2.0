import { type Edge } from "@xyflow/react"

export const getEdges = async (): Promise<Edge[]> => {

  const response = await fetch('http://localhost:3000/edges');


  if(!response.ok){
    console.error("error fetching edges");
  }


  const data = await response.json();

  return data;

}