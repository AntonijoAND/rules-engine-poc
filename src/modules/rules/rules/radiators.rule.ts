const radiators = [
  {
    engine: 'radiatorsEngine',
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
    engine: 'radiatorsEngine',
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
    engine: 'radiatorsEngine',
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
    engine: 'radiatorsEngine',
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
    engine: 'radiatorsEngine',
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
    engine: 'radiatorsEngine',
    conditions: {
      all: [
        {
          fact: 'radiators',
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
