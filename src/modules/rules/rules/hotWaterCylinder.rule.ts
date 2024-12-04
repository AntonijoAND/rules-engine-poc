const hotWaterCylider = [
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
      type: '320',
      params: {},
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
      type: '270',
      params: {},
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
      type: '225',
      params: {},
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
      type: '180',
      params: {},
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
      type: '135',
      params: {},
    },
  },
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
      type: '100',
      params: {},
    },
  },
];

export default hotWaterCylider;
