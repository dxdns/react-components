import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { extname, relative, resolve } from "path"
import { fileURLToPath } from "node:url"
import { glob } from "glob"
import dts from "vite-plugin-dts"
import { libInjectCss } from "vite-plugin-lib-inject-css"
import fs from "fs"

function generateCssDeclaration() {
    const cssDeclaration = `
  declare module "*.module.css" {
  const classes: { [key: string]: string }
  export default classes
  }

  declare module "*.css" {
    const content: string
    export default content
  }
  `

    const outputPath = resolve(__dirname, "lib/css.d.ts")
    fs.writeFileSync(outputPath, cssDeclaration, "utf-8")
}

generateCssDeclaration()

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const defaultConfig = {
        plugins: [react()],
        resolve: {
            alias: [
                {
                    find: "@",
                    replacement: resolve(__dirname, "src"),
                },
                {
                    find: "@components",
                    replacement: resolve(__dirname, "lib"),
                },
            ],
        },
    }

    if (mode === "pkg") {
        return {
            plugins: [
                ...defaultConfig.plugins,
                libInjectCss(),
                dts({ include: ["lib"] }),
            ],
            build: {
                copyPublicDir: false,
                cssCodeSplit: true,
                lib: {
                    entry: resolve(__dirname, "lib/index.ts"),
                    formats: ["es"],
                },
                rollupOptions: {
                    external: ["react", "react/jsx-runtime"],
                    input: Object.fromEntries(
                        glob
                            .sync("lib/**/*.{ts,tsx}", {
                                ignore: ["lib/**/*.d.ts"],
                            })
                            .map((file) => [
                                relative(
                                    "lib",
                                    file.slice(
                                        0,
                                        file.length - extname(file).length,
                                    ),
                                ),
                                fileURLToPath(new URL(file, import.meta.url)),
                            ]),
                    ),
                    output: {
                        assetFileNames: "assets/[name][extname]",
                        entryFileNames: "[name].js",
                    },
                },
            },
            ...defaultConfig.resolve,
        }
    }

    return defaultConfig
})
