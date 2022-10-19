import styled from "styled-components";
import cytoscape from "cytoscape";
import { useEffect, useRef } from "react";

const Box = styled.div`
  width: 99%;
  height: 498px;
  border: 1px solid rgba(46,54,80,.125);
  border-radius: 15px;
  box-shadow: 0 0 8px 4px rgba(0,0,0,.1);
  background-color: white;
`
function Vis() {
  const ref = useRef(null)
  const cy = useRef(null)

  useEffect(() => {
    if (ref.current) {
      cy.current = cytoscape({
        container: ref.current,
        boxSelectionEnabled: false,
        style: [
          {
            selector: "node",
            css: {
              content: "data(id)",
              "text-valign": "center",
              "text-halign": "center",
              "background-color": "##6E6E6E",
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
            css: {
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
            selector: "edge",
            css: {
              "curve-style": "bezier"
            }
          }
        ],
        elements: {
          nodes: [
            { data: { id: "VPC", degree: 10 } },
            { data: { id: "hub1", degree: 10 } },
            { data: { id: "hub2", degree: 10 } },
            { data: { id: "hub3", degree: 10 } },
            { data: { id: "Server1", parent: "VPC", degree: 10 } },
            { data: { id: "Server2", parent: "VPC", degree: 10 } }
          ],
          edges: [
            { data: { id: "ad", source: "hub1", target: "VPC" } },
            { data: { id: "bd", source: "hub2", target: "VPC" } },
            { data: { id: "cd", source: "hub3", target: "VPC" } }
          ]
        },
        layout: {
          name: "concentric",
          // padding: 5,
          minNodeSpacing: 150,
          // spacingFactor: 2,
          concentric: (node) => {
            // returns numeric value for each node, placing higher nodes in levels towards the centre
            return node.data().degree;
          },
          levelWidth: (_nodes) => {
            return 2;
          },
          transform: (node, position) => {
            var _a, _b, _c;
            const node_id = (_b = (_a = node.data()) === null || _a === void 0 ? void 0 : _a.id) !== null && _b !== void 0 ? _b : "";
            if (node_id.includes("_p")) {
              // console.log(cy.current?.$("#spoke1").position());
              const parent_pos = (_c = cy.current) === null || _c === void 0 ? void 0 : _c.$("#spoke1").position();
              // if (parent_pos) {
              //   return {
              //     ...parent_pos,
              //     // x: parent_pos.x + parseInt(node_id.split('_p')[1], 10) * 100,
              //   };
              // }
              return position;
            }
            return position;
          }
        },
        zoom: 1,
        minZoom: 0.2,
        maxZoom: 2
      });
    }
  }, []);
  return (
    <Box ref={ref}></Box>
  );
}

export default Vis;