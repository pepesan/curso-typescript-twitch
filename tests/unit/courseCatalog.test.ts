import { describe, expect, it } from "vitest";
import { courseUnits } from "../../src/app/courseCatalog.ts";
import { resolveCourseRoute } from "../../src/app/courseApp.ts";

describe("catálogo y rutas del curso", () => {
    it("presenta las doce unidades en el orden del temario", () => {
        expect(courseUnits.map((unit) => unit.id)).toEqual([
            "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12",
        ]);
        expect(courseUnits.every((unit) => unit.examples.length > 0)).toBe(true);
    });

    it("resuelve un enlace directo a un ejemplo", () => {
        expect(resolveCourseRoute("#unidad-04/unknown", courseUnits)).toEqual({
            unitId: "04",
            exampleId: "unknown",
        });
    });

    it("usa el primer ejemplo si el enlace no es válido", () => {
        expect(resolveCourseRoute("#sin-ruta", courseUnits)).toEqual({
            unitId: "01",
            exampleId: "proposito",
        });
    });
});
