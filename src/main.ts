import "./styles/main.scss";
import { CourseApp } from "./app/courseApp.ts";
import { courseUnits } from "./app/courseCatalog.ts";
import { setupTheme } from "./ui/theme.ts";

const appRoot = document.querySelector<HTMLDivElement>("#app");
if (!appRoot) {
    throw new Error("No se encontró el elemento raíz #app");
}

new CourseApp(appRoot, courseUnits);
setupTheme(document.querySelector<HTMLButtonElement>("#theme-toggle")!);
