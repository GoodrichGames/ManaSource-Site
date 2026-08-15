import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  globalIgnores([
    ".next/**",
    "out/**",
    "public/nextImageExportOptimizer/**",
    "public/images/nextImageExportOptimizer/**",
    "public/images/cards/nextImageExportOptimizer/**",
  ]),
]);
