const insulationLevel = [
  {
    conditions: {
      all: [
        {
          fact: 'insulationLevel',
          operator: 'equal',
          value: 'low',
        },
      ],
    },
    event: {
      type: 'heatLossCoefficient',
      params: {
        value: 3.5,
      },
    },
  },
  {
    conditions: {
      all: [
        {
          fact: 'insulationLevel',
          operator: 'equal',
          value: 'medium',
        },
      ],
    },
    event: {
      type: 'heatLossCoefficient',
      params: {
        value: 2.8,
      },
    },
  },
  {
    conditions: {
      all: [
        {
          fact: 'insulationLevel',
          operator: 'equal',
          value: 'good',
        },
      ],
    },
    event: {
      type: 'heatLossCoefficient',
      params: {
        value: 2,
      },
    },
  },
];

export default insulationLevel;
