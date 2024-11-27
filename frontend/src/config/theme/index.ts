// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// ========================
// Mantine
// ========================
// Core
import { 
    createTheme,
    DEFAULT_THEME,
    mergeMantineTheme, 
} from "@mantine/core"

// Colors generator
import { generateColors } from "@mantine/colors-generator"

// ========================================
// THEME
// ========================================

// Theme override
const themeOverride = createTheme({
    // Primary color
    primaryColor: "accent-primary",
    primaryShade: 9,

    // Colors
    colors: {
        "accent-primary": generateColors("#7389AE"),
    },
})

export const theme = mergeMantineTheme(DEFAULT_THEME, themeOverride)