import type {Result} from "@shared/worksheet";

export function calculate(v:number[]):Result[]{
const [sw,sh,lw,lh,m,g]=v,w=Math.max(0,sw-2*m),h=Math.max(0,sh-2*m);
 function layout(x:number,y:number){const cols=Math.floor((w+g)/(x+g)),rows=Math.floor((h+g)/(y+g));return {cols,rows,n:cols*rows};}
 const a=layout(lw,lh),b=layout(lh,lw),best=b.n>a.n?b:a;return [
 {name:"Best yield",value:best.n+" pcs",detail:[b.n>a.n?"Rotate labels 90 deg":"Use upright labels",best.cols+" across / "+best.rows+" down"],fraction:best.n*lw*lh/(sw*sh)},
 {name:"Upright",value:String(a.n),detail:[a.cols+" columns",a.rows+" rows"]},{name:"Rotated",value:String(b.n),detail:[b.cols+" columns",b.rows+" rows"]}];
}
