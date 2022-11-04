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

function Visualize({ elements }) {
  const layout = {
    name: "breadthfirst",
    directed: true,
    spacingFactor: 1.1,
    fit: true
  }
  const style = [
    {
      selector: "node",
      style: {
        "label": "data(label)",
        "text-valign": "center",
        "text-halign": "center",
        "background-color": "#6E6E6E",
        "width": "200",
        "height": "70",
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
      selector: ":parent[type='subnet']",
      style: {
        "background-color": "#DBF6FA"
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
      <h1 style={{ marginBottom: "68px" }}>Visualization</h1>
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
        <Box>If you upload Terraform file. You can get architecture in here.</Box>
      )}
    </div>
  );
}

export default Visualize;