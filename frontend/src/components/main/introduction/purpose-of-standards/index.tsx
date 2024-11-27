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


// ========================
// Mantine
// ========================
import { 
    Container,
    Title,
    Text,
    List,
    Divider,
} from "@mantine/core"

// ========================================
// PURPOSE OF STANDARDS
// ========================================

export default function PurposeOfStandards() {
  // ========================
  // Operations
  // ========================
  // 

  // ========================
  // Render
  // ========================
  return (
    <div id="purpose-of-standards" className="relative">
      <Container fluid>
        {/* Section title */}
        <Title 
            order={1} 
            mb="lg"
            c="accent-primary"
        >
            Purpose of Standards
        </Title>

        {/* Introductory text */}
        <Text size="lg" mb="md">
            The purpose of these standards is to provide a unified framework for
            writing, organizing, and maintaining high-quality software. Adherence
            to these standards ensures consistency, scalability, and readability
            across all projects.
        </Text>

        <Divider my="md" />

        {/* Key objectives */}
        <Title 
            order={2} 
            size="h3" 
            mt="lg" 
            mb="sm"
        >
            Key Objectives
        </Title>
        <List 
            spacing="sm" 
            size="md" 
            withPadding
        >
            <List.Item>
                <Text>
                    <strong>Consistency:</strong> Establish a predictable structure
                    and naming convention across the codebase.
                </Text>
            </List.Item>
            <List.Item>
                <Text>
                    <strong>Readability:</strong> Ensure code and documentation are
                    easily understandable for developers of all levels.
                </Text>
            </List.Item>
            <List.Item>
                <Text>
                    <strong>Maintainability:</strong> Simplify updates, debugging, and
                    feature enhancements by following standardized practices.
                </Text>
            </List.Item>
            <List.Item>
                <Text>
                    <strong>Scalability:</strong> Lay a foundation for future growth
                    and team collaboration.
                </Text>
            </List.Item>
        </List>

        <Divider my="md" />

        {/* Closing statement */}
        <Text 
            size="lg" 
            mt="lg" 
            fs="italic"
        >
            By adhering to these standards, our teams can reduce errors, improve
            productivity, and foster collaboration while building robust and
            reliable systems.
        </Text>
      </Container>
    </div>
  )
}
