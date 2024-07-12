# react-native-radar

A simple radar chart for react-native.

<img width="300" alt="Radar Demo" src="https://evan-oss-bucket1.oss-cn-hangzhou.aliyuncs.com/react-native-radar/demo.png">

## Installation

```bash
npm i @evanpatchouli/react-native-radar react-native-svg
```

## Example

```tsx
const MyRadar = (
  <EvpRadar
    data={[100, 20, 30, 10, 40]}
    labels={["Aaa", "Bbb", "Ccc", "Ddd", "Eee"]}
    radius={100} // default: 100
    backgroundColor="rgba(0, 0, 200, 0.05)" //default: none
    strokeColor="rgba(0, 0, 200, 0.5)" // none
    strokeWidth={1.5} // default: 1
    strokeType="solid" // dashed
    dashArray={[5, 3]} // default: [10, 5]
    fillColor="rgba(0, 255, 255, 0.4)"
    labelProps={{ fill: "rgba(0, 0, 200, 0.3)" }}
    coefficient={1} // default: 1
    labelSpace={40} // default: 0
    border={{
      type: "polygon", // circle, none, default: none
      color: "rgba(0, 0, 200, 0.5)", // default: black
      width: 10, // default: 1
    }}
    Axis={{
      // default: none of axis
      type: "dashed", // solid, none
      width: 1, // default: 1
      color: "rgba(0, 0, 200,  0.2)", // default: grey
      dashArray: [5, 4], // default: [10, 5]
    }}
    ScaleLine={{
      // default: none of scale lines
      type: "solid", // solid, none
      number: 4,
      width: 1, // default: 1
      color: "rgba(0, 0, 200, 0.2)", // default: grey
      dashArray: [5, 4], // default: [20, 5]
    }}
  />
);
```

## Props Api

You can learn from the table or the interface code at bottom.

### Table of Props:

|Prop|Description|Type|Default|
|---|---|---|---|
|data|Data to be displayed in the radar chart|number[]|[]|
|labels|Labels for each data|string[]|[]|
|radius|Radius of the radar chart|number|100|
|backgroundColor|Background color of the radar chart|string|"null"|
|strokeColor|Color of the stroke|string|"black"|
|strokeWidth|Width of the stroke|number|1|
|strokeType|Type of the stroke|"solid" \| "dashed"|"solid"|
|dashArray|Dash array of the stroke|[number, number]|[10, 5]|
|fillColor|Color of the fill area|string|"null"|
|labelProps|Props for the labels|TextProps \| ((idx: number) => TextProps)|{}|
|coefficient|Coefficient for the data|number|1|
|labelSpace|Space between the label and the radar chart|number|0|
|border|Border of the radar chart|{ type: "circle" \| "polygon" \| "none"; width?: number; color?: string; }|{ type: "none" }|
|Axis|Axis of the radar chart|{ type: "dashed" \| "solid" \| "none"; color?: string; width?: number; dashArray?: [number, number]; }|{ type: "none" }|
|ScaleLine|Scale lines of the radar chart|{ number: number; type: "dashed" \| "solid" \| "none"; color?: string; width?: number; dashArray?: [number, number]; opacity?: number; }|{ type: "none" }|

### Interface of RadarProps:

```tsx
interface RadarProps {
  data: number[];
  labels: string[];
  /** @default: 100 */
  radius?: number;
  /** @default "null" */
  backgroundColor?: string;
  strokeColor?: string;
  /** @default 1 */
  strokeWidth?: number;
  /** @default "solid" */
  strokeType?: "solid" | "dashed";
  /** @default [10,5] */
  dashArray?: [number, number];
  /** @default 1 */
  strokeOpacity?: number;
  fillColor?: string;
  labelProps?: TextProps | ((idx: number) => TextProps);
  /** @default 1 */
  coefficient?: number;
  /** @default 0 */
  labelSpace: number;
  border?: {
    type: "circle" | "polygon" | "none";
    /** @default 1 */
    width?: number;
    /** @default "black" */
    color?: string;
  };
  Axis?: {
    type: "dashed" | "solid" | "none";
    color?: string;
    width?: number;
    /** @default [10,5] */
    dashArray?: [number, number];
  };
  ScaleLine?: {
    number: number;
    type: "dashed" | "solid" | "none";
    color?: string;
    width?: number;
    /** @default [20,5] */
    dashArray?: [number, number];
    opacity?: number;
  };
}
```
