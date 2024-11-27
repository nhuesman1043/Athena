// ========================================
// IMPORTS
// ========================================

// ========================
// Global Styles
// ========================
import "./globals.css"

// ========================
// Theme
// ========================
import { theme } from "../config/theme/"

// ========================
// Mantine
// ========================
// Core
import { MantineProvider, ColorSchemeScript } from "@mantine/core"

// Styles
import "@mantine/core/styles.css"

// ========================================
// METADATA
// ========================================

export const metadata = { title: "Athena", description: "Coding Standards and Documentation" }

// ========================================
// ROOT
// ========================================

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  // ========================
  // Operations
  // ========================
  //

  // ========================
  // Render
  // ========================
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme="auto">
          {children}
        </MantineProvider>
      </body>
    </html>
  )
}