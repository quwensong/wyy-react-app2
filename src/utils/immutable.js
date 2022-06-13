import { Map as ImmutableMap } from 'immutable';

// 初始化Immutable对象
export const initImmutableMap = function(state){
  return ImmutableMap(state);
}
// 设置值
export const setImmutableMap = function(state,key,value){
  return state.set(key,value);
}
// 获取值
export const getInImmutableMap = function(state,keys){
  return state.getIn(keys);
}
