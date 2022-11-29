import CytoscapeComponent from "react-cytoscapejs";
import styled from "styled-components";
import cytoscape from 'cytoscape';
import dagre from "cytoscape-dagre";
import coseBilkent from 'cytoscape-cose-bilkent';
import { useRef } from "react";
import { useEffect } from "react";

cytoscape.use(coseBilkent);
cytoscape.use(dagre);


const Vis = styled(CytoscapeComponent)`
  width: 99%;
  height: 498px;
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 15px;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
`
const Box = styled.div`
  height: 467px;
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 15px;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
  text-align: center;
  font-weight: bold;
  font-size: large;
  padding: 1rem;
  line-height: 55px;
`

function Visualize({ elements, onNodeClick }) {
  const cyRef = useRef();
  const layout = {
    name: "dagre",
    randomize: false
  }
  const style = [
    {
      selector: "node",
      style: {
        "label": "data(label)",
        "text-valign": "center",
        "text-halign": "center",
        "background-color": "#393E46",
        "width": "200",
        "height": "70",
        "shape": "round-rectangle",
        "color": "#f4f5f9",
        "font-weight": "bold",
        "border-width": "3px",
        "border-style": "solid",
        "border-color": "#black"
      }
    },
    {
      selector: ":parent",
      style: {
        "text-valign": "top",
        "text-halign": "center",
        "background-color": "#dddfe6",
        "color": "#222831",
        "font-size": "25px",
        "font-weight": "bold",
        "border-style": "dashed",
        "border-width": "3px",
        "border-color": "#252c41",
        "padding": "20px"
      }
    },
    {
      selector: ":parent[label*='subnet']",
      style: {
        "background-color": "#f4f5f9"
      }
    },
    {
      selector: "node[type='vuln']",
      style: {
        "background-color": "#f1404b"
      }
    },
    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        'width': 4,
        'line-color': '#252c41',
        'target-arrow-color': '#252c41',
        'target-arrow-shape': 'triangle'
      }
    }
  ];

  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) {
      return;
    }
    cy.on("click", "node", (event) => {
      onNodeClick(event.target[0].data().id);
    });
  },[elements, onNodeClick])

  return (
    <div>
      <h1 style={{ marginBottom: "68px" }}>Visualization</h1>
      {elements ? (
        <Vis
          elements={elements}
          layout={layout}
          stylesheet={style}
          zoom={1}
          minZoom={0.1}
          maxZoom={1.5}
          cy={(cy) => {
            cyRef.current = cy;
          }}
        />
      ) : (
        <Box>If you upload Terraform file. You can get architecture in here.</Box>
      )}
    </div>
  );
}

export default Visualize;