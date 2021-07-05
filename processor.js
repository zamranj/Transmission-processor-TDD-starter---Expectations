function processor(transmission) {
  if(transmission.indexOf("::") < 0){

    return -1;
  }
  let parts = transmission.split("::");
  let rawData = parts[1];
  if(rawData[0] !== "<" || rawData[0].slice(-1) !== ">"){
    rawData = -1;
  };

  if(rawData !== -1){
    let rawDataSlice = rawData.slice(1,-1);
    if(isNan(rawDataSlice)){
      rawData = -1;
    }
  }

  return {
    id: Number(parts[0]),
    rawData:rawData
  };




}
   


module.exports = processor;