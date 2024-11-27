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
import Header from "@/components/header/"
import Navbar from "@/components/navbar/"
import Main from "@/components/main/"

// ========================
// React
// ========================


// ========================
// Mantine
// ========================
// Core
import { 
  AppShell, 
  Burger, 
  Group,
  ScrollArea,
} from "@mantine/core"

// Hooks
import { useDisclosure } from "@mantine/hooks"

// ========================================
// HOME
// ========================================

export default function Home() {
  // ========================
  // Operations
  // ========================
  // Navabr toggle
  const [opened, { toggle }] = useDisclosure()

  // ========================
  // Render
  // ========================
  return (
    <main>
      <AppShell
        header={{ height: 75 }}
        navbar={{
          width: 300,
          breakpoint: "sm",
          collapsed: { mobile: !opened },
        }}
        padding="md"
      >
        {/* Header */}
        <AppShell.Header>
          <Group 
            h="100%" 
            px="md" 
            w="100%"
          >
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              aria-label="Toggle navigation menu"
            />
            <div className="flex-grow">
              <Header />
            </div>
          </Group>
        </AppShell.Header>

        {/* Navbar */}
        <AppShell.Navbar>
          <AppShell.Section 
            grow 
            p="md"
            component={ScrollArea}
          >
            <Navbar />
          </AppShell.Section>
        </AppShell.Navbar> 

        {/* Main */}
        <AppShell.Main>
          <Main />
        </AppShell.Main>
      </AppShell>
    </main>
  )
}
