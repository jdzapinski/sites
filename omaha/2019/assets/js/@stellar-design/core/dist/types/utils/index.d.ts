export { colors } from '../utils/colors';
import properties from 'css-custom-properties';
import isHexColor from 'validator/lib/isHexColor';
import delay from 'async-delay';
import ResizeObserver from 'resize-observer-polyfill';
import focusWithin from 'focus-within';
import parentNodeSelector from 'parent-node-selector';
import zxcvbn from "zxcvbn";
import TinyDatePicker from 'tiny-date-picker';
import moment from 'moment';
import mediumZoom from 'medium-zoom';
export declare function rIC(callback: () => void): void;
export declare const blurringEase: (args: EaseParams) => TweenInstance;
export declare function titleCase(str: any): any;
export declare var shuffle: (array: any) => any;
export declare const asyncForEach: (array: any, callback: any) => Promise<void>;
export declare function convert(s: any, val: any): {};
export declare function form2js(data: any): {};
export declare const asTime: (float: any) => string;
export declare const leadingZeroIndex: (index: any) => string;
export declare const relPathAsAbs: (sRelPath: any) => string;
export { properties, isHexColor, delay, ResizeObserver, focusWithin, parentNodeSelector, zxcvbn, TinyDatePicker, moment, mediumZoom };
