import { type Node } from "@xyflow/react"
import { type SetNode } from "../types/otherTypes";

export const getNodes = async (): Promise<Node[]> => {

  const response = await fetch('http://localhost:3000/nodes');


  if(!response.ok){
    console.error("error fetching nodes");
  }

  const data = await response.json();

  return data;

}

export const setNode = async (node: SetNode): Promise<Node[]> => {


  const response = await fetch("http://localhost:3000/nodes/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      node: node
    })
  })

  if (!response.ok) {
    console.error("Error setting node")
  }

  const data = await response.json();
  console.log(data)
  return data;


}

