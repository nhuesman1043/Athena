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
import { sections } from "@/components/navbar/sections/"

// ========================
// React
// ========================
import { 
  useState, 
  useEffect,
  useMemo,
} from "react"

// ========================
// Mantine
// ========================
import { Container, NavLink } from "@mantine/core"

// ========================================
// NAVBAR
// ========================================

export default function Navbar({ 
  activeLink, 
  setActiveLink,
}: { 
  activeLink: string; 
  setActiveLink: (link: string) => void,
}) {
  // ========================
  // Operations
  // ========================

  // Track the open parents
  const [openParents, setOpenParents] = useState<Set<string>>(() => {
    // Initialize the set
    const initialSet = new Set<string>()

    // Open the first parent
    initialSet.add(sections[0].href) 
    
    // Return the set
    return initialSet
  })

  // Clear URL hash on refresh and set default active link
  useEffect(() => {
    // Clear the hash from the URL
    if (window.location.hash) 
      window.history.replaceState(null, "", window.location.pathname)
    
    // Set the hash to #purpose-of-standards
    window.location.hash = "#purpose-of-standards"
  }, [])

  // Toggle the parent open or closed
  const toggleParentOpen = (href: string) => {
    // Update the set of open parents
    setOpenParents((prev) => {
      const newSet = new Set(prev)

      // If the parent is already open, close it
      if (newSet.has(href)) 
        newSet.delete(href)
      
      // If the parent is closed, open it
      else 
        newSet.add(href)
      
      return newSet
    })
  }

  // Render the navbar dynamically
  const navbar = useMemo(
    () =>
      sections.map((parent) => (
        <NavLink
          key={parent.href}
          href={parent.href}
          label={parent.label}
          leftSection={parent.icon}
          childrenOffset={28}
          opened={openParents.has(parent.href)}
          onClick={() => toggleParentOpen(parent.href)}
          aria-expanded={openParents.has(parent.href)}
          active={
            parent.href === activeLink ||
            parent.children?.some((child) => child.href === activeLink)
          }
        >
          {parent.children?.map((child) => (
            <NavLink
              key={child.href}
              href={child.href}
              label={child.label}
              active={child.href === activeLink}
              onClick={() => setActiveLink(child.href)}
              onKeyDown={(e) => { if (e.key === "Enter") setActiveLink(child.href) }}
              variant="subtle"
              aria-current={child.href === activeLink ? "page" : undefined}
              tabIndex={0}
            />
          ))}
        </NavLink>
      )),
    [openParents, activeLink]
  )

  // ========================
  // Render
  // ========================
  return (
    <div id="navbar" className="relative">
      <Container fluid className="pt-2">
        {navbar}
      </Container>
    </div>
  )
}
