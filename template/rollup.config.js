import vue from 'rollup-plugin-vue2'
import less from 'rollup-plugin-less'
import buble from 'rollup-plugin-buble'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import uglify from 'rollup-plugin-uglify'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'
import replace from 'rollup-plugin-replace'
import json from 'rollup-plugin-json'

const plugins = [
  json(),
  vue(),
  less({output: 'dist/build.css'}),
  buble({
    objectAssign: 'Object.assign'
  }),
  nodeResolve({ browser: true, jsnext: true }),
  commonjs()
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(replace({
    'process.env.NODE_ENV': JSON.stringify( 'production' )
  }))
  plugins.push(uglify())
}

if (process.env.NODE_ENV === 'development') {
  plugins.push(replace({
    'process.env.NODE_ENV': JSON.stringify( 'development' )
  }))
  plugins.push(livereload())
  plugins.push(serve({
    open: true
  }))
}

export default {
  entry: 'src/index.js',
  dest: 'dist/build.js',
  sourceMap: true,
  format: {{jsformat}},
  plugins
}
