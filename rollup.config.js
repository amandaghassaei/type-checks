import ts from "rollup-plugin-ts";
// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import { terser } from "rollup-plugin-terser";
// import nodePolyfills from 'rollup-plugin-polyfill-node';

export default {
  input: 'src/type-checks.ts',
  output: [
	{
      file: 'dist/type-checks.js',
      sourcemap: true,
      format: 'umd',
      name: 'TypeChecks',
    },
	// {
    //   file: 'dist/origami-simulation.min.js',
    //   sourcemap: true,
    //   format: 'umd',
    //   name: 'OrigamiSimulation',
	//   plugins: [terser()],
	// }
  ],
  plugins: [
    ts(),
    // commonjs(),
	// nodePolyfills(),
    // resolve(),
  ],
};