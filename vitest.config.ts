import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        include: ["tests/unit/**/*.test.ts"],
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
