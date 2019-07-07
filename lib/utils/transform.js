"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gateWay = gateWay;

function gateWay(gateWayData, itemData) {
  //当需要geteway数据时，进行转换。
  if (Object.keys(gateWayData).length > 0) {
    var _loop = function _loop(key) {
      //需要gateway的格式只有一层数据，如'a':'a1'
      if (key.split('-').length == 1) {
        if (!(key in itemData)) {
          itemData[key] = itemData[gateWayData[key]];
          delete itemData[gateWayData[key]];
        }
      } else {
        var getKey = key.split('-')[0]; //获取相应key

        if (Array.isArray(gateWayData[key]) && gateWayData[key].length > 0) {
          //需要gateway的格式为数组时,如 ‘a-item’:[{'x':'x1'},{'y':'y1'}]
          itemData[getKey] && itemData[getKey].length > 0 && itemData[getKey].map(function (item, index) {
            for (var x in gateWayData[key][0]) {
              //判断原先是否有这个key
              if (!(x in itemData[getKey][index])) {
                itemData[getKey][index][x] = itemData[getKey][index][gateWayData[key][0][x]];
                delete itemData[getKey][index][gateWayData[key][0][x]];
              }
            }
          });
        } else {
          //需要gateway的格式为对象时,如 ‘a-item’:{'x':'x1','y':"y1"}
          for (var x in gateWayData[key]) {
            itemData[getKey][x] = itemData[getKey][gateWayData[key][x]];
            delete itemData[getKey][gateWayData[key][x]];
          }
        }
      }
    };

    for (var key in gateWayData) {
      _loop(key);
    }
  }

  return itemData;
}