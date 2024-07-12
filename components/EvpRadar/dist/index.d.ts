import React from "react";
import { ViewProps } from "react-native";
import { TextProps } from "react-native-svg";
import "react-native-svg";
interface RadarProps {
    data: number[];
    labels: string[] | React.JSX.Element[];
    radius?: number;
    backgroundColor?: string;
    strokeColor?: string;
    strokeWidth?: number;
    strokeType?: "solid" | "dashed";
    dashArray?: [number, number];
    strokeOpacity?: number;
    fillColor?: string;
    labelProps?: TextProps | ((idx: number) => TextProps);
    coefficient?: number;
    labelSpace: number;
    border?: {
        type: "circle" | "polygon" | "none";
        width?: number;
        color?: string;
    };
    Axis?: {
        type: "dashed" | "solid" | "none";
        color?: string;
        width?: number;
        dashArray?: [number, number];
    };
    ScaleLine?: {
        number: number;
        type: "dashed" | "solid" | "none";
        shape?: "circle" | "polygon";
        color?: string;
        width?: number;
        dashArray?: [number, number];
        opacity?: number;
    };
    containerViewProps?: ViewProps;
}
export default function EvpRadar({ data, labels, ...props }: RadarProps): React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map