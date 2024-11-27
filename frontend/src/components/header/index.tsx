// ========================================
// DIRECTIVES
// ========================================

"use client"

// ========================================
// IMPORTS
// ========================================

// ========================
// Components
// ========================


// ========================
// React
// ========================
import { useState, useEffect } from "react"

// ========================
// Mantine
// ========================
import { 
  // Theming
  useMantineColorScheme,
  useComputedColorScheme,
  useMantineTheme,

  // Components
  Container, 
  Group, 
  Tooltip, 
  Title,
  Text,
  ActionIcon,
} from "@mantine/core"

// ========================
// Tabler Icons
// ========================
import { 
  IconShieldCheck,
  IconBrandGithub,
  IconSun,
  IconMoon,
} from "@tabler/icons-react"

// ========================================
// HEADER
// ========================================

export default function Header() {
  // ========================
  // Operations
  // ========================
  // Track the mounted state to handle client-side only logic
  const [mounted, setMounted] = useState(false)

  // Theme
  const theme = useMantineTheme()

  // Color scheme and check if light mode
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme("dark", { getInitialValueInEffect: true })
  const isLightMode = computedColorScheme === "light"

  // Ensure that theme is only set on client-side after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Return null during SSR to avoid hydration mismatch
  if (!mounted)
    return null 

  // ========================
  // Render
  // ========================
  return (
    <div id="header" className="relative">
      <Container fluid>
        <Group h="100%">
          {/* Left section */}
          <Group>
            {/* Project icon */}
            <IconShieldCheck size={45} color={theme.colors["accent-primary"][6]} />

            {/* Project title */}
            <Title order={2}>
              Athena
            </Title>

            {/* Project description */}
            <Text 
              size="lg"
              className="hidden sm:block"
              fs="italic"
              c="accent-primary"
            >
              Coding Standards and Documentation
            </Text>
          </Group>

          {/* Right section */}
          <Group className="absolute right-5" gap="md">
            <div className="hidden sm:block">
              {/* GitHub link */}
              <Tooltip 
                label="Project GitHub" 
                withArrow
                arrowSize={8}
                transitionProps={{ transition: "fade", duration: 300 }}
              >
                <ActionIcon
                  component="a"
                  size="xl" 
                  variant="outline"
                  href="https://github.com/nhuesman1043/Athena"
                  target="_blank"
                >
                  <IconBrandGithub 
                    size={30} 
                    className="cursor-pointer" 
                  />
                </ActionIcon>
              </Tooltip>
            </div>
            {/* Theme toggle */}
            <Tooltip 
              label={isLightMode ? "Dark mode" : "Light mode"} 
              withArrow
              arrowSize={8}
              transitionProps={{ transition: "fade", duration: 300 }}
            >
              <ActionIcon 
                size="xl" 
                variant="outline"
                aria-label="Toggle color scheme"
                onClick={() => setColorScheme(isLightMode ? "dark" : "light")}
              >
                {isLightMode ? (
                  <IconSun size={30} />
                ) : (
                  <IconMoon size={30} />
                )}
              </ActionIcon>
            </Tooltip>
          </Group>
        </Group>
      </Container>
    </div>
  )
}
