export type Theme = "light" | "dark";

const themeStorageKey = "curso-typescript-theme";

/** Decide el tema guardado o sigue la preferencia del sistema en la primera visita. */
export function resolveTheme(savedTheme: string | null, systemPrefersDark: boolean): Theme {
    if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
    }

    return systemPrefersDark ? "dark" : "light";
}

export function setupTheme(button: HTMLButtonElement): void {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = resolveTheme(window.localStorage.getItem(themeStorageKey), prefersDark);

    function applyTheme(nextTheme: Theme): void {
        document.documentElement.dataset.theme = nextTheme;
        const nextLabel = nextTheme === "dark" ? "claro" : "oscuro";
        document.querySelector<HTMLMetaElement>('meta[name="theme-color"]')?.setAttribute(
            "content",
            nextTheme === "dark" ? "#101419" : "#f5f6f8",
        );
        button.setAttribute("aria-label", `Cambiar a tema ${nextLabel}`);
        button.setAttribute("aria-pressed", String(nextTheme === "dark"));
        button.querySelector(".theme-toggle-icon")!.textContent = nextTheme === "dark" ? "☀" : "☾";
        button.querySelector(".theme-toggle-label")!.textContent = `Tema ${nextLabel}`;
    }

    applyTheme(theme);
    button.addEventListener("click", () => {
        const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        applyTheme(nextTheme);
        window.localStorage.setItem(themeStorageKey, nextTheme);
    });
}
