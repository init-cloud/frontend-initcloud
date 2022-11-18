import CytoscapeComponent from "react-cytoscapejs";
import styled from "styled-components";
import cytoscape from 'cytoscape';
import coseBilkent from 'cytoscape-cose-bilkent';
import { useRef } from "react";
import { useEffect } from "react";

cytoscape.use(coseBilkent);

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
    name: "cose-bilkent",
    directed: true,
    fit: true,
    padding: 30,
    idealEdgeLength: 70,
    nodeDimensionsIncludeLabels: false,
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
        "color": "#EEEEEE",
        "font-weight": "bold",
        "border-width": "1px",
        "border-style": "solid",
        "border-color": "#222831"
      }
    },
    {
      selector: ":parent",
      style: {
        "text-valign": "top",
        "text-halign": "center",
        "background-color": "#EEEEEE",
        "color": "#222831",
        "font-size": "25px",
        "font-weight": "bold",
        "border-style": "dashed",
        "border-width": "3px",
        "border-color": "#222831",
        "padding": "20px"
      }
    },
    {
      selector: ":parent[type='subnet']",
      style: {
        "background-color": "#EEEEEE"
      }
    },
    {
      selector: "node[type='vuln']",
      style: {
        "background-color": "#FD7014"
      }
    },
    {
      selector: "edge",
      style: {
        "curve-style": "bezier",
        'width': 4,
        'line-color': '#222831',
        'target-arrow-color': '#222831',
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
          minZoom={0.2}
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