const hotWaterCylider = [
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
      type: 'liter',
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
      type: 'liter',
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
      type: 'liter',
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
      type: 'liter',
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
      type: 'liter',
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
      type: 'liter',
      params: {
        value: 100,
      },
    },
  },
];

export default hotWaterCylider;