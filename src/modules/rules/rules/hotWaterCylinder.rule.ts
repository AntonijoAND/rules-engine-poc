const hotWaterCylider = [
  {
    engine: 'hotWaterCylinderEngine',
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
    engine: 'hotWaterCylinderEngine',
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
    engine: 'hotWaterCylinderEngine',
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
    engine: 'hotWaterCylinderEngine',
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
    engine: 'hotWaterCylinderEngine',
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
    engine: 'hotWaterCylinderEngine',
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

export default hotWaterCylider;
