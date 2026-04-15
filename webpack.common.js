 import path from 'node:path';
 import { fileURLToPath } from 'node:url';
 import HtmlWebpackPlugin from 'html-webpack-plugin';

 const __filename = fileURLToPath(import.meta.url);
 const __dirname = path.dirname(__filename);

 export default {
   entry: {
     app: './src/index.js',
   },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Production',
       template: "./src/template.html",
     }),
   ],
   output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
   },
   module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
      },
       {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
 };