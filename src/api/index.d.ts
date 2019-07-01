// import livedata from './livedata';
// import items from './items'
type TestgetCB = () => Promise<number[]>;
type TtemsCB = (str:number) => Promise<object[]>;
declare var Index : {
  livedata: {
    testget: TestgetCB
  },
  items: {
    itemget:TtemsCB
  },
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
