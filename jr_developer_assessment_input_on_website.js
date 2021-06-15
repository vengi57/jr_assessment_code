const data = {
  dimensions: [
    {
      id: "dimension_re",
      values: ["East", "East", "West", "SouthWest", "South", "NorthEast"],
    },
    {
      id: "dimension_cnt",
      values: ["London", "Italy", "Germany", "US", "Russia", "India"],
    },
  ],
  meaures: [
    {
      id: "measure_sales",
      values: [100, 156, 432, 462, 25, 100],
    },
    {
      id: "measure_qty",
      values: [85, 34, 153, 434, 52, 43],
    },
    {
      id: "measure_profit",
      values: [123, 45, 421, 465, 451, 56],
    },
  ],
  metadata: [
    {
      id: "measure_sales",
      label: "Sales",
      type: "number",
    },
    {
      id: "measure_qty",
      label: "Quantity",
      type: "number",
    },
    {
      id: "measure_profit",
      label: "Profit",
      type: "number",
    },
    {
      id: "dimension_re",
      label: "Region",
      type: "string",
    },
    {
      id: "dimension_cnt",
      label: "County",
      type: "string",
    },
  ],
};

//getting all the keys in metadata object
const metadataKey = data.metadata.map((value) => value.label);

//Creating arry of objects dynamically to assign values
let resultantArr = [];
data.dimensions[0]["values"].map((value) => {
  let tempObj = {};
  metadataKey.map((label) => {
    tempObj = { ...tempObj, [label]: null };
  });
  resultantArr.push(tempObj);
});

//Combining_dimensions and meaures to make iterator easy
let dimensionsAndMeaures = [];

data.dimensions.map((dimension) => {
  dimensionsAndMeaures.push(dimension);
});

data.meaures.map((meaure) => {
  dimensionsAndMeaures.push(meaure);
});

//Core logic to get the result for the given input data
dimensionsAndMeaures.map((obj) => {
    debugger;
  data.metadata.map((_data) => {
    if (_data.id === obj.id) {
      obj.values.map((val, key) => {
        if (typeof val === _data.type) {
          Object.assign(resultantArr[key], { [_data.label]: val });
        }
      });
    }
  });
});

//Consoling the result with key as resultantArr
console.log({ resultantArr });
//Consoling the result in table format
console.table(resultantArr);