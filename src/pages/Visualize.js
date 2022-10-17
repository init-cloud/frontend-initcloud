import CytoscapeComponent from "react-cytoscapejs";
import cytoscape from "cytoscape";
import sbgnStylesheet from "cytoscape-sbgn-stylesheet";

import { elements } from "./data";
function Visualize() {
  const cyStylesheet = sbgnStylesheet(cytoscape);
  return (
    <div>
      <h1>Visualize</h1>
      <CytoscapeComponent
        elements={CytoscapeComponent.normalizeElements(elements)}
        style={ { width: '99%', height: '500px', border: '1px solid black', borderRadius: '15px',  boxShadow: "0 0 8px 4px rgba(0,0,0,.1)"} }
        minZoom={0.8}
        maxZoom={3}
        cy={(cy) => cy.style(cyStylesheet)}
      />
    </div>
  );
}

export default Visualize;