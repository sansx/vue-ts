// import livedata from './livedata';
// import items from './items'
type CallbackFunction = () => Promise<number[]>;
declare var Index : {
  livedata: {
    testget: CallbackFunction
  },
  items: object,
}

export default Index

// declare const index: Index

// declare module "index" {
//   interface Index {
//     livedata?: object;
//     items?: object;
//   }
//   export = Index;
// }
