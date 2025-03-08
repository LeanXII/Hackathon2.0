import { type Node } from "@xyflow/react"

export const getNodes = async (): Promise<Node[]> => {

  const response = await fetch('http://localhost:3000/nodes');


  if(!response.ok){
    console.error("error fetching nodes");
  }

  console.log(response);
  const data = await response.json();

  return data;

}

