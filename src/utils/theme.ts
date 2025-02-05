import { ThemeType } from "../../lib/types"

export function getTheme() {
    return localStorage.getItem("theme") || ("light" as ThemeType)
}

export function setTheme(theme: ThemeType) {
    document.documentElement.style.colorScheme = theme
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
}
