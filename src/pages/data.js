export const elements = [
  {
    data: {
      id: "server1",
      class: "simple chemical",
      label: "Server",
      parent: "vpc",
      clonemarker: false,
      stateVariables: [],
      unitsOfInformation: [],
      bbox: {
        x: 100,
        y: 100,
        w: 40,
        h: 40
      }
    },
    position: {
      x: 220,
      y: 350
    },
    group: "nodes",
    removed: false,
    selected: false,
    selectable: true,
    locked: false,
    grabbable: true,
    pannable: false,
    classes: ""
  },
  {
    data: {
      id: "server2",
      class: "simple chemical",
      label: "Server",
      parent: "vpc",
      clonemarker: false,
      stateVariables: [],
      unitsOfInformation: [],
      bbox: {
        x: 100,
        y: 100,
        w: 40,
        h: 40
      }
    },
    position: {
      x: 380,
      y: 350
    },
    group: "nodes",
    removed: false,
    selected: false,
    selectable: true,
    locked: false,
    grabbable: true,
    pannable: false,
    classes: ""
  },
  {
    data: {
      id: "lb",
      class: "phenotype",
      label: "Load Balancer",
      parent: "vpc",
      clonemarker: false,
      stateVariables: [],
      unitsOfInformation: [],
      bbox: {
        x: 100,
        y: 100,
        w: 200,
        h: 200
      }
    },
    position: {
      x: 300,
      y: 200
    },
    group: "nodes",
    removed: false,
    selected: false,
    selectable: true,
    locked: false,
    grabbable: true,
    pannable: false,
    classes: ""
  },
  {
    data: {
      id: "vpc",
      class: "compartment",
      label: "VPC",
      clonemarker: false,
      stateVariables: [],
      unitsOfInformation: [],
      bbox: {
        x: 100,
        y: 100,
        w: 300,
        h: 300
      }
    },
    position: {
      x: 300,
      y: 350
    },
    group: "nodes",
    removed: false,
    selected: false,
    selectable: true,
    locked: false,
    grabbable: true,
    pannable: false,
    classes: ""
  },
  {
    data: {
      id: "lb-server1",
      class: "production",
      cardinality: 0,
      source: "lb",
      target: "server1",
      bendPointPositions: [],
      portSource: "lb",
      portTarget: "server1"
    },
    position: {
      x: 0,
      y: 0
    },
    group: "edges",
    removed: false,
    selected: false,
    selectable: true,
    locked: false,
    grabbable: true,
    pannable: true,
    classes: ""
  },
  {
    data: {
      id: "lb-server2",
      class: "production",
      cardinality: 0,
      source: "lb",
      target: "server2",
      bendPointPositions: [],
      portSource: "lb",
      portTarget: "server2"
    },
    position: {
      x: 0,
      y: 0
    },
    group: "edges",
    removed: false,
    selected: false,
    selectable: true,
    locked: false,
    grabbable: true,
    pannable: true,
    classes: ""
  }
]