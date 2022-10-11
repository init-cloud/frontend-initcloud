import CytoscapeComponent from "react-cytoscapejs";

function Visualize() {
  const elements = [
    { data: { id: '1', label: 'LoadBalancer' }, position: { x: 250, y: 230 } },
    { data: { id: '2', label: 'Server 1' }, position: { x: 200, y: 290 } },
    { data: { id: '3', label: 'Server 2' }, position: { x: 300, y: 290 } },
    { data: { id: '4', label: 'HTTP 80' }, position: { x: 250, y: 170 } },
    { data: { source: '1', target: '2', label: 'Edge to Server 1' } },
    { data: { source: '1', target: '3', label: 'Edge to Server 2' } },
    { data: { source: '4', target: '1', label: 'Edge to LB' } }
  ];

  return (
    <div>
      <h1>Visualize</h1>
      <CytoscapeComponent
        elements={elements}
        style={ { width: '99%', height: '500px', border: '1px solid black', borderRadius: '15px'} }
        minZoom={0.8}
        maxZoom={3}
      />
    </div>
  );
}

export default Visualize;