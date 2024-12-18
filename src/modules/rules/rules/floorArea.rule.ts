const floorArea = [
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'detached',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 2,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 90,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'detached',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 3,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 110,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'detached',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 4,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 130,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'detached',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 5,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 150,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'detached',
        },
        {
          fact: 'noRooms',
          operator: 'greaterThanInclusive',
          value: 6,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 220,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'semiDetached',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 2,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 80,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'semiDetached',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 3,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 100,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'semiDetached',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 4,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 120,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'semiDetached',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 5,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 140,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'semiDetached',
        },
        {
          fact: 'noRooms',
          operator: 'greaterThanInclusive',
          value: 6,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 210,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'terraced',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 2,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 100,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'terraced',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 3,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 120,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'terraced',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 4,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 140,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'terraced',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 5,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 160,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'terraced',
        },
        {
          fact: 'noRooms',
          operator: 'greaterThanInclusive',
          value: 6,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 230,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'bungalow',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 2,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 90,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'bungalow',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 3,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 110,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'bungalow',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 4,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 130,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'bungalow',
        },
        {
          fact: 'noRooms',
          operator: 'equal',
          value: 5,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 150,
      },
    },
  },
  {
    engine: 'floorAreaEngine',
    conditions: {
      all: [
        {
          fact: 'propertyType',
          operator: 'equal',
          value: 'bungalow',
        },
        {
          fact: 'noRooms',
          operator: 'greaterThanInclusive',
          value: 6,
        },
      ],
    },
    event: {
      type: 'floorArea',
      params: {
        value: 220,
      },
    },
  },
];

export default floorArea;
