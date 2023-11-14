import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import {dts} from "rollup-plugin-dts";
import postcss from 'rollup-plugin-postcss';
import terser from '@rollup/plugin-terser';


//const packageJson = require("./package.json");
import packageJson from "./package.json" assert { type: "json" };

export default [
  {
    external : Object.keys(packageJson.devDependencies),
    preserveModules: true,
    input: "src/index.ts",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      postcss({
        //plugins: [autoprefixer()],
        sourceMap: false,
        extract: false,
        minimize: true,
      }),
      terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
