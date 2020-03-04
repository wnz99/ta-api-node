import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/ta.js',
  output: {
    dir: 'dist',
    format: 'umd',
    name: 'TA'
  },
  plugins: [commonjs()]
};
