const hotWaterCyliderRules = [
  {
    conditions: {
      all: [
        {
          fact: 'noBedrooms',
          operator: 'equal',
          value: 1,
        },
      ],
    },
    event: {
      type: 'hotWaterCylinderSize',
      params: {
        value: 100,
      },
    },
  },
  {
    conditions: {
      all: [
        {
          fact: 'noBedrooms',
          operator: 'equal',
          value: 2,
        },
      ],
    },
    event: {
      type: 'hotWaterCylinderSize',
      params: {
        value: 135,
      },
    },
  },
  {
    conditions: {
      all: [
        {
          fact: 'noBedrooms',
          operator: 'equal',
          value: 3,
        },
      ],
    },
    event: {
      type: 'hotWaterCylinderSize',
      params: {
        value: 180,
      },
    },
  },
  {
    conditions: {
      all: [
        {
          fact: 'noBedrooms',
          operator: 'equal',
          value: 4,
        },
      ],
    },
    event: {
      type: 'hotWaterCylinderSize',
      params: {
        value: 225,
      },
    },
  },
  {
    conditions: {
      all: [
        {
          fact: 'noBedrooms',
          operator: 'equal',
          value: 5,
        },
      ],
    },
    event: {
      type: 'hotWaterCylinderSize',
      params: {
        value: 270,
      },
    },
  },
  {
    conditions: {
      all: [
        {
          fact: 'noBedrooms',
          operator: 'greaterThan',
          value: 6,
        },
      ],
    },
    event: {
      type: 'hotWaterCylinderSize',
      params: {
        value: 300,
      },
    },
  },
];

export default hotWaterCyliderRules;
