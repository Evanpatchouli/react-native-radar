import React from "react";
import { View } from "react-native";
import { Svg, Polygon, Line, Text, G, TextProps, Circle } from "react-native-svg";
import "react-native-svg";

interface RadarProps {
  data: number[];
  labels: string[];
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

export default function EvpRadar({ data, labels, ...props }: RadarProps) {
  const radius = props.radius || 100;
  const angleSlice = (Math.PI * 2) / data.length;

  const polarToCartesian = (angle: number, radius: number) => {
    return {
      x: Math.cos(angle - Math.PI / -2) * radius,
      y: Math.sin(angle - Math.PI / -2) * radius,
    };
  };

  const coefficient = props.coefficient || 1;

  const strokeConfig = {
    strokeWidth: props.strokeWidth || 1,
    strokeDasharray: props.strokeType === "dashed" ? props.dashArray ?? [10, 5] : void 0,
    strokeOpacity: props.strokeOpacity ?? 1,
    strokeColor: props.strokeColor ?? "black",
  };

  const radarBorderWidth = props.border?.width ?? 1;

  const radarBorderConfig = {
    backgroundColor: props.backgroundColor ?? "none",
    width: props.border?.width ?? 1,
    radius: radius + (radarBorderWidth ?? 1) / 2,
    color: props.border?.color ?? "black",
  };

  const AxisConfig = {
    color: props.border?.color ?? "gray",
    width: props.Axis?.width ?? 1,
    dashArray: props.Axis?.type === "dashed" ? props.Axis?.dashArray ?? [10, 5] : void 0,
  };

  const ScaleLineConnfig = {
    type: props.ScaleLine?.type ?? "dashed",
    number: props.ScaleLine?.number || 0,
    color: props.ScaleLine?.color ?? "gray",
    width: props.ScaleLine?.width ?? 1,
    dashArray: props.ScaleLine?.type === "dashed" ? props.ScaleLine?.dashArray ?? [20, 5] : void 0,
    opacity: props.ScaleLine?.opacity ?? 1,
  };

  const labelSpace = props.labelSpace || 0;

  return (
    <View>
      <Svg width={radius * 3} height={radius * 3}>
        <G x={radius * 1.5} y={radius * 1.5}>
          {/** @Border_of_circle 圆形边界 */}
          {props.border?.type === "circle" && (
            <Circle
              cx={0}
              cy={0}
              r={radarBorderConfig.radius}
              fill={radarBorderConfig.backgroundColor}
              stroke={radarBorderConfig.color}
              strokeWidth={radarBorderConfig.width}
            />
          )}
          {/** @Border_of_polygon 多边形边界 */}
          {props.border?.type === "polygon" && (
            <Polygon
              points={data
                .map((value, i) => polarToCartesian(angleSlice * i, radarBorderConfig.radius))
                .map((p) => `${p.x},${p.y}`)
                .join(" ")}
              fill={radarBorderConfig.backgroundColor}
              stroke={radarBorderConfig.color}
              strokeWidth={radarBorderConfig.width}
            />
          )}
          {props.border?.type === "polygon" &&
            Array.from({ length: props.ScaleLine?.number || 0 }, (_, index) => index).map((_, t) => (
              <Polygon
                points={data
                  .map((value, i) =>
                    polarToCartesian(
                      angleSlice * i,
                      radarBorderConfig.radius * (1 / ((ScaleLineConnfig.number || 0) + 1)) * (t + 1)
                    )
                  )
                  .map((p) => `${p.x},${p.y}`)
                  .join(" ")}
                fill={"none"}
                stroke={ScaleLineConnfig.color}
                strokeWidth={ScaleLineConnfig.width}
                strokeDasharray={ScaleLineConnfig.dashArray}
                strokeOpacity={ScaleLineConnfig.opacity}
                key={t}
              />
            ))}
          {/** @Axis 轴线 */}
          {props.Axis &&
            data.map((value, i) => {
              const { x, y } = polarToCartesian(angleSlice * i, radius);
              return (
                <Line
                  x1={0}
                  y1={0}
                  x2={x}
                  y2={y}
                  key={i}
                  stroke={AxisConfig.color}
                  strokeWidth={AxisConfig.width}
                  strokeDasharray={AxisConfig.dashArray}
                />
              );
            })}
          {/** @Area 有效面积 */}
          <Polygon
            points={data
              .map((value, i) => polarToCartesian(angleSlice * i, value * coefficient))
              .map((p) => `${p.x},${p.y}`)
              .join(" ")}
            fill={props.fillColor ?? "rgba(0,0,0,0.2)"}
          />
          {/** @Stroke 有效值线 */}
          {data.map((value, i) => {
            const { x, y } = polarToCartesian(angleSlice * i, value * coefficient);
            return (
              <Line
                x1={0}
                y1={0}
                x2={x}
                y2={y}
                stroke={strokeConfig.strokeColor}
                strokeWidth={strokeConfig.strokeWidth}
                strokeDasharray={strokeConfig.strokeDasharray}
                strokeOpacity={strokeConfig.strokeOpacity}
                key={i}
              />
            );
          })}
          {/** @Label 标签 */}
          {labels.map((label, i) => {
            const { x, y } = polarToCartesian(angleSlice * i, radius + labelSpace);
            return (
              <Text
                x={x}
                y={y}
                key={i}
                textAnchor="middle"
                {...(typeof props.labelProps === "function" ? props.labelProps(i) : props.labelProps)}
              >
                {label}
              </Text>
            );
          })}
        </G>
      </Svg>
    </View>
  );
}
