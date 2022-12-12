const jsonData = {
  "summary": {
    "historySeq": 1,
    "date": "2022-01-01",
    "CSP": "AWS",
    "scanTarget": "demo.zip",
    "scanTargetHash": "03AC674216F3E15C761EE1A5E255F067953623C8B388B4459E13F978D7C846F4",
    "passed": "356",
    "skipped": "10",
    "failed": "5712",
    "score": 10.0,
    "failedResourse": {
      "re": "5",
      "s": "5",
      "o": "5",
      "u": "5",
      "r": "5",
      "ce": "5"
    },
    "failedCompliance": {
      "ISMS-P": {
        "2.10.6": "5",
        "ISMS-P 2.10.7": "5",
        "ISMS-P 2.10.8": "5",
        "ISMS-P 2.10.9": "5",
        "ISMS-P 2.10.10": "5",
        "ISMS-P 2.10.11": "5"
      }
    },
    "failedSecurityThreat": {
      "DEMO TAG1": "5",
      "DEMO TAG2": "5",
      "DEMO TAG3": "5",
      "DEMO TAG4": "5",
      "DEMO TAG5": "5",
      "DEMO TAG6": "5"
    }
  },
  "details": [
    {
      "ruleID": "DEMO_CSP_1",
      "result": "F",
      "severity": "High",
      "description": "DEMO DESCRIPTION. DEMO DESCRIPTION. \n DEMO DESCRIPTION. DEMO DESCRIPTION.",
      "type": ["DEMO TAG1", "DEMO TAG2", "DEMO TAG3", "DEMO TAG4", "DEMO TAG5"],
      "fileName": "DEMO_TARGET_FILE",
      "line": "1-100",
      "resource": "DEMO_RESOURCE",
      "resourceName": "DEMO_RESOURCE_NAME",
      "problematicCode": "CODE DEMO CODE DEMO CODE DEMO CODE DEMO\n CODE DEMO CODE DEMO CODE DEMO",
      "compliance": [
        {
          "ISMS-P": [
            {
              "compliance": "DEMO1.",
              "details": "DETAIL DEMO."
            },
            {
              "compliance": "DEMO2.",
              "details": "DETAIL DEMO."
            },
            {
              "compliance": "DEMO3.",
              "details": "DETAIL DEMO."
            },
            {
              "compliance": "DEMO4.",
              "details": "DETAIL DEMO."
            },
            {
              "compliance": "DEMO5.",
              "details": "DETAIL DEMO."
            },
            {
              "compliance": "DEMO6.",
              "details": "DETAIL DEMO."
            },
            {
              "compliance": "DEMO7.",
              "details": "DETAIL DEMO."
            }
          ]
        }
      ],
      "possilbeImpact": "IMPACT DEMO.",
      "solutionSample": "Sample Demo\nSample Demo\nSample Demo",
      "solution": "solution DEMO. \nsolution DEMO. \nsolution DEMO."
    }
  ]
}

export default jsonData;