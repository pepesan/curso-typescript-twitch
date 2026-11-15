import { describe, expect, it } from "vitest";
import { resolveTheme } from "../../src/ui/theme.ts";

describe("selección inicial del tema", () => {
    it("respeta un tema guardado válido", () => {
        expect(resolveTheme("light", true)).toBe("light");
        expect(resolveTheme("dark", false)).toBe("dark");
    });

    it("usa el tema del sistema si no hay una preferencia guardada", () => {
        expect(resolveTheme(null, true)).toBe("dark");
        expect(resolveTheme(null, false)).toBe("light");
    });

    it("ignora valores almacenados que no reconoce", () => {
        expect(resolveTheme("sepia", true)).toBe("dark");
    });
});
