import {worksheet} from "@shared/worksheet";
import {calculate} from "./calculate";

const fields=[
  {
    "name": "Sheet wide",
    "unit": "mm",
    "initial": 210,
    "min": 1,
    "max": 2000,
    "step": 1
  },
  {
    "name": "Sheet high",
    "unit": "mm",
    "initial": 297,
    "min": 1,
    "max": 2000,
    "step": 1
  },
  {
    "name": "Label wide",
    "unit": "mm",
    "initial": 50,
    "min": 1,
    "max": 500,
    "step": 1
  },
  {
    "name": "Label high",
    "unit": "mm",
    "initial": 30,
    "min": 1,
    "max": 500,
    "step": 1
  },
  {
    "name": "Margin",
    "unit": "mm",
    "initial": 5,
    "min": 0,
    "max": 100,
    "step": 1
  },
  {
    "name": "Gap",
    "unit": "mm",
    "initial": 2,
    "min": 0,
    "max": 50,
    "step": 1
  }
];
worksheet({name:"Paper Yield",fields,calculate,accent:"#ECA64C",motion:{"motif":"shuttle","color":"#ECA64C","shine":"#FFF0BB"}});
