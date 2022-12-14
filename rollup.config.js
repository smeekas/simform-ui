import external from "rollup-plugin-peer-deps-external";
// import postcss from 'rollup-plugin-postcss';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
// import scss from 'rollup-plugin-scss'
import styles from "rollup-plugin-styles";
import { terser } from "rollup-plugin-terser";
import * as packageJson from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    external(),
    // scss(),
    styles(),
    // postcss({
    //   // modules: true,
    //   use: ['sass'],
    //   minimize: true,
    // }),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      exclude: ["**/.tests.ts", "**/*.test.tsx"],
    }),
    terser(),
  ],
};
