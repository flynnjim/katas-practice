/*
This function takes an array of objects and a string which should match a key of the objects in the array

const northcoders = [
  { name: 'douglas', location: 'manchester' },
  { name: 'liam', location: 'york' },
  { name: 'jim', location: 'leeds' },
  { name: 'haz', location: 'manchester' },
  { name: 'dave', location: 'leeds' },
];

groupBy(northcoders, 'location');
The function returns an object where the keys represent the matching values and each matching object is in an array.

// result
{
  manchester: [
    { name: 'douglas', location: 'manchester' },
    { name: 'haz', location: 'manchester' },
  ],
  york: [
    { name: 'liam', location: 'york' },
  ],
  leeds: [
    { name: 'jim', location: 'leeds' },
    { name: 'dave', location: 'leeds' },
  ]
}
*/
function groupBy(array, key) {
  const groupedObject = {};
  array.forEach((coder) => {
    const currentKeyValue = coder[key];

    if (!groupedObject[currentKeyValue]) {
      groupedObject[currentKeyValue] = [];
    }

    groupedObject[currentKeyValue].push(coder);
  });
  return groupedObject;
}

module.exports = groupBy;
