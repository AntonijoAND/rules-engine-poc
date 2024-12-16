const radiators = [
  {
    conditions: {
      all: [
        {
          fact: 'radiators',
          operator: 'lessThanInclusive',
          value: 4,
        },
      ],
    },
    event: {
      type: 'radiatorsPrice',
      params: {
        value: 800,
      },
    },
  },
  {
    conditions: {
      all: [
        {
          fact: 'radiators',
          operator: 'equal',
          value: 5,
        },
      ],
    },
    event: {
      type: 'radiatorsPrice',
      params: {
        value: 1000,
      },
    },
  },
  {
    conditions: {
      all: [
        {
          fact: 'radiators',
          operator: 'equal',
          value: 6,
        },
      ],
    },
    event: {
      type: 'radiatorsPrice',
      params: {
        value: 1200,
      },
    },
  },
  {
    conditions: {
      all: [
        {
          fact: 'radiators',
          operator: 'equal',
          value: 7,
        },
      ],
    },
    event: {
      type: 'radiatorsPrice',
      params: {
        value: 1400,
      },
    },
  },
  {
    conditions: {
      all: [
        {
          fact: 'radiators',
          operator: 'equal',
          value: 8,
        },
      ],
    },
    event: {
      type: 'radiatorsPrice',
      params: {
        value: 1600,
      },
    },
  },
  {
    conditions: {
      all: [
        {
          fact: 'noBedrooms',
          operator: 'greaterThan',
          value: 8,
        },
      ],
    },
    event: {
      type: 'radiatorsPrice',
      params: {
        value: 1800,
      },
    },
  },
];

export default radiators;
