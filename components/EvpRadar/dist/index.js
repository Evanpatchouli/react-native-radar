var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from "react";
import { View } from "react-native";
import { Svg, Polygon, Line, Text, G, Circle } from "react-native-svg";
import "react-native-svg";
export default function EvpRadar(_a) {
    var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14;
    var data = _a.data, labels = _a.labels, props = __rest(_a, ["data", "labels"]);
    var radius = props.radius || 100;
    var angleSlice = (Math.PI * 2) / data.length;
    var polarToCartesian = function (angle, radius) {
        return {
            x: Math.cos(angle - Math.PI / -2) * radius,
            y: Math.sin(angle - Math.PI / -2) * radius,
        };
    };
    var coefficient = props.coefficient || 1;
    var strokeConfig = {
        strokeWidth: props.strokeWidth || 1,
        strokeDasharray: props.strokeType === "dashed" ? (_b = props.dashArray) !== null && _b !== void 0 ? _b : [10, 5] : void 0,
        strokeOpacity: (_c = props.strokeOpacity) !== null && _c !== void 0 ? _c : 1,
        strokeColor: (_d = props.strokeColor) !== null && _d !== void 0 ? _d : "black",
    };
    var radarBorderWidth = (_f = (_e = props.border) === null || _e === void 0 ? void 0 : _e.width) !== null && _f !== void 0 ? _f : 1;
    var radarBorderConfig = {
        backgroundColor: (_g = props.backgroundColor) !== null && _g !== void 0 ? _g : "none",
        width: (_j = (_h = props.border) === null || _h === void 0 ? void 0 : _h.width) !== null && _j !== void 0 ? _j : 1,
        radius: radius + (radarBorderWidth !== null && radarBorderWidth !== void 0 ? radarBorderWidth : 1) / 2,
        color: (_l = (_k = props.border) === null || _k === void 0 ? void 0 : _k.color) !== null && _l !== void 0 ? _l : "black",
    };
    var AxisConfig = {
        color: (_o = (_m = props.border) === null || _m === void 0 ? void 0 : _m.color) !== null && _o !== void 0 ? _o : "gray",
        width: (_q = (_p = props.Axis) === null || _p === void 0 ? void 0 : _p.width) !== null && _q !== void 0 ? _q : 1,
        dashArray: ((_r = props.Axis) === null || _r === void 0 ? void 0 : _r.type) === "dashed" ? (_t = (_s = props.Axis) === null || _s === void 0 ? void 0 : _s.dashArray) !== null && _t !== void 0 ? _t : [10, 5] : void 0,
    };
    var ScaleShapeGiven = (_v = (_u = props.ScaleLine) === null || _u === void 0 ? void 0 : _u.shape) !== null && _v !== void 0 ? _v : (_w = props.border) === null || _w === void 0 ? void 0 : _w.type;
    var ScaleLineConnfig = {
        type: (_y = (_x = props.ScaleLine) === null || _x === void 0 ? void 0 : _x.type) !== null && _y !== void 0 ? _y : "dashed",
        shape: ScaleShapeGiven === "none" ? "polygon" : ScaleShapeGiven || "polygon",
        number: ((_z = props.ScaleLine) === null || _z === void 0 ? void 0 : _z.number) || 0,
        color: (_1 = (_0 = props.ScaleLine) === null || _0 === void 0 ? void 0 : _0.color) !== null && _1 !== void 0 ? _1 : "gray",
        width: (_3 = (_2 = props.ScaleLine) === null || _2 === void 0 ? void 0 : _2.width) !== null && _3 !== void 0 ? _3 : 1,
        dashArray: ((_4 = props.ScaleLine) === null || _4 === void 0 ? void 0 : _4.type) === "dashed" ? (_6 = (_5 = props.ScaleLine) === null || _5 === void 0 ? void 0 : _5.dashArray) !== null && _6 !== void 0 ? _6 : [20, 5] : void 0,
        opacity: (_8 = (_7 = props.ScaleLine) === null || _7 === void 0 ? void 0 : _7.opacity) !== null && _8 !== void 0 ? _8 : 1,
    };
    var labelSpace = props.labelSpace || 0;
    return (<View {...props.containerViewProps} style={__spreadArray(__spreadArray([], (((_9 = props.containerViewProps) === null || _9 === void 0 ? void 0 : _9.style) ? [props.containerViewProps.style] : []), true), [
            {
                position: "relative",
            },
        ], false)}>
      <Svg width={radius * 3} height={radius * 3}>
        <G x={radius * 1.5} y={radius * 1.5}>
          
          {((_10 = props.border) === null || _10 === void 0 ? void 0 : _10.type) === "circle" && (<Circle cx={0} cy={0} r={radarBorderConfig.radius} fill={radarBorderConfig.backgroundColor} stroke={radarBorderConfig.color} strokeWidth={radarBorderConfig.width}/>)}
          
          {((_11 = props.border) === null || _11 === void 0 ? void 0 : _11.type) === "polygon" && (<Polygon points={data
                .map(function (value, i) { return polarToCartesian(angleSlice * i, radarBorderConfig.radius); })
                .map(function (p) { return "".concat(p.x, ",").concat(p.y); })
                .join(" ")} fill={radarBorderConfig.backgroundColor} stroke={radarBorderConfig.color} strokeWidth={radarBorderConfig.width}/>)}
          
          {ScaleLineConnfig.shape === "circle" &&
            Array.from({ length: ((_12 = props.ScaleLine) === null || _12 === void 0 ? void 0 : _12.number) || 0 }, function (_, index) { return index; }).map(function (_, t) { return (<Circle cx={0} cy={0} r={radarBorderConfig.radius * (1 / ((ScaleLineConnfig.number || 0) + 1)) * (t + 1)} fill={"none"} stroke={ScaleLineConnfig.color} strokeWidth={ScaleLineConnfig.width} strokeDasharray={ScaleLineConnfig.dashArray} strokeOpacity={ScaleLineConnfig.opacity} key={t}/>); })}
          
          {ScaleLineConnfig.shape === "polygon" &&
            Array.from({ length: ((_13 = props.ScaleLine) === null || _13 === void 0 ? void 0 : _13.number) || 0 }, function (_, index) { return index; }).map(function (_, t) { return (<Polygon points={data
                    .map(function (value, i) {
                    return polarToCartesian(angleSlice * i, radarBorderConfig.radius * (1 / ((ScaleLineConnfig.number || 0) + 1)) * (t + 1));
                })
                    .map(function (p) { return "".concat(p.x, ",").concat(p.y); })
                    .join(" ")} fill={"none"} stroke={ScaleLineConnfig.color} strokeWidth={ScaleLineConnfig.width} strokeDasharray={ScaleLineConnfig.dashArray} strokeOpacity={ScaleLineConnfig.opacity} key={t}/>); })}
          
          {props.Axis &&
            data.map(function (value, i) {
                var _a = polarToCartesian(angleSlice * i, radius), x = _a.x, y = _a.y;
                return (<Line x1={0} y1={0} x2={x} y2={y} key={i} stroke={AxisConfig.color} strokeWidth={AxisConfig.width} strokeDasharray={AxisConfig.dashArray}/>);
            })}
          
          <Polygon points={data
            .map(function (value, i) { return polarToCartesian(angleSlice * i, value * coefficient); })
            .map(function (p) { return "".concat(p.x, ",").concat(p.y); })
            .join(" ")} fill={(_14 = props.fillColor) !== null && _14 !== void 0 ? _14 : "rgba(0,0,0,0.2)"}/>
          
          {data.map(function (value, i) {
            var _a = polarToCartesian(angleSlice * i, value * coefficient), x = _a.x, y = _a.y;
            return (<Line x1={0} y1={0} x2={x} y2={y} stroke={strokeConfig.strokeColor} strokeWidth={strokeConfig.strokeWidth} strokeDasharray={strokeConfig.strokeDasharray} strokeOpacity={strokeConfig.strokeOpacity} key={i}/>);
        })}
          
          {typeof (labels === null || labels === void 0 ? void 0 : labels[0]) === "string" &&
            labels.map(function (label, i) {
                var _a = polarToCartesian(angleSlice * i, radius + labelSpace), x = _a.x, y = _a.y;
                return (<Text x={x} y={y} key={i} textAnchor="middle" {...(typeof props.labelProps === "function" ? props.labelProps(i) : props.labelProps)}>
                  {label}
                </Text>);
            })}
        </G>
      </Svg>

      
      {typeof (labels === null || labels === void 0 ? void 0 : labels[0]) !== "string" && (<View style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 0,
                height: 0,
            }}>
          {(labels === null || labels === void 0 ? void 0 : labels[0]) &&
                labels.map(function (label, i) {
                    var _a = polarToCartesian(angleSlice * i, radius + labelSpace), x = _a.x, y = _a.y;
                    return (<View key={i} style={{ position: "absolute", left: x, top: y, transform: "translate(-50%, -50%)" }}>
                  {label}
                </View>);
                })}
        </View>)}
    </View>);
}
//# sourceMappingURL=index.js.map