import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ["tests/unit/**/*.test.ts"],
        reporters: [
            "default",
            ["html", { outputDir: "reports/unit/html" }],
            ["junit", { outputFile: "reports/unit/junit.xml" }],
            ["json", { outputFile: "reports/unit/results.json" }],
        ],
        coverage: {
            provider: "v8",
            include: ["src/07-funciones/funciones.ts"],
            reporter: ["text", "html", "json-summary"],
            thresholds: {
                lines: 90,
                functions: 90,
                statements: 90,
            },
        },
    },
});
