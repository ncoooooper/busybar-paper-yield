import {rect, type Frame} from "@shared/surface";
import type {Result} from "@shared/worksheet";

function tiles(columns: number, rows: number, width: number, height: number): Frame {
  const frame: Frame=[rect("sheet",51,2,20,13,"#38444AFF")];
  const scale=Math.min(8/width,6/height);
  const w=Math.max(1,Math.round(width*scale)),h=Math.max(1,Math.round(height*scale));
  const across=Math.min(columns,Math.floor(19/(w+1))),down=Math.min(rows,Math.floor(12/(h+1)));
  for (let y=0;y<down;y++) for (let x=0;x<across;x++) {
    frame.push(rect("tile"+y+"-"+x,52+x*(w+1),3+y*(h+1),w,h,"#EDC379FF"));
  }
  return frame;
}


export function calculate(v:number[]):Result[]{
const [sw,sh,lw,lh,m,g]=v,w=Math.max(0,sw-2*m),h=Math.max(0,sh-2*m);
 function layout(x:number,y:number){const cols=Math.floor((w+g)/(x+g)),rows=Math.floor((h+g)/(y+g));return {cols,rows,n:cols*rows};}
 const a=layout(lw,lh),b=layout(lh,lw),best=b.n>a.n?b:a;return [
 {preview:tiles(best.cols,best.rows,best===b?lh:lw,best===b?lw:lh),name:"Best yield",value:best.n+" pcs",detail:[b.n>a.n?"Rotate labels 90 deg":"Use upright labels",best.cols+" across / "+best.rows+" down"],fraction:best.n*lw*lh/(sw*sh)},
 {preview:tiles(a.cols,a.rows,lw,lh),name:"Upright",value:String(a.n),detail:[a.cols+" columns",a.rows+" rows"]},{preview:tiles(b.cols,b.rows,lh,lw),name:"Rotated",value:String(b.n),detail:[b.cols+" columns",b.rows+" rows"]}];
}
