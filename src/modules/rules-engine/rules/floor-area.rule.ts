const floorAreaRules = [
  {
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

export default floorAreaRules;
