import globImporter from "node-sass-glob-importer";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename);

const nextConfig = {
  // Enable SCSS support
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    importer: globImporter(),
  },
};

export default nextConfig;
