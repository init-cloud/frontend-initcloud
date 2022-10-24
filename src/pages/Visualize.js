import CytoscapeComponent from "react-cytoscapejs";
import styled from "styled-components";

const Vis = styled(CytoscapeComponent)`
  width: 99%;
  height: 498px;
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 15px;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
`

function Visualize({ elements }) {
  console.log(elements)
  const layout = {
    name: "breadthfirst"
  }
  const style = [
    {
      selector: "node",
      style: {
        "label": "data(id)",
        "text-valign": "center",
        "text-halign": "center",
        "background-color": "#6E6E6E",
        "width": "70px",
        "height": "70px",
        "shape": "round-rectangle",
        "color": "white",
        "font-weight": "bold",
        "border-width": "1px",
        "border-style": "solid",
        "border-color": "rgba(46,54,80,.125)"
      }
    },
    {
      selector: ":parent",
      style: {
        "text-valign": "top",
        "text-halign": "center",
        "background-color": "whitesmoke",
        "color": "black",
        "font-size": "25px",
        "font-weight": "bold",
        "border-style": "dashed",
        "border-width": "3px",
        "border-color": "black",
        "padding": "20px"
      }
    },
    {
      selector : "node[type='vuln']",
      style:{
        "background-color" : "tomato"
      }
    },
    {
      selector: "edge",
      style: {
        "curve-style": "bezier"
      }
    }
  ]
  return (
    <div>
      <h1 style={{ marginBottom: "79px" }}>Visualize</h1>
      {elements?(
        <Vis
        elements={elements}
        layout={layout}
        stylesheet={style}
        zoom={1}
        minZoom={0.2}
        maxZoom={2}
      />
      ):(
        "Loading..."
      )}
    </div>
  );
}

export default Visualize;