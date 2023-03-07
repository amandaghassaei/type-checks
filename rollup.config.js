import ts from "rollup-plugin-ts";

export default {
  input: 'src/type-checks.ts',
  output: [
	{
      file: 'dist/type-checks.js',
      sourcemap: true,
      format: 'umd',
      name: 'TypeChecks',
    },
  ],
  plugins: [
    ts(),
  ],
};