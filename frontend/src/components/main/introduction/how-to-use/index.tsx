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
  Card,
} from "@mantine/core"

// ========================================
// HOW TO USE
// ========================================

export default function HowToUse() {
  // ========================
  // Operations
  // ========================
  // 

  // ========================
  // Render
  // ========================
  return (
    <div id="how-to-use" className="relative">
      <Container fluid>
        {/* Section title */}
        <Title 
          order={1} 
          mb="lg"
          c="accent-primary"
        >
          How to Use This Guide
        </Title>

        {/* Introductory text */}
        <Text size="lg" mb="md">
          Welcome to the official standards guide! This document is designed to 
          help you navigate and adopt best practices for software development 
          within your team or organization. Whether you're new to the team or 
          a seasoned developer, this guide will provide the structure and tools 
          you need to succeed.
        </Text>

        <Divider my="md" />

        {/* Navigation instructions */}
        <Title 
          order={2} 
          size="h3" 
          mt="lg" 
          mb="sm"
        >
          Navigating the Guide
        </Title>
        <List 
          spacing="md" 
          size="md" 
          withPadding
        >
          <List.Item>
            <Text>
              <strong>1. Explore Sections:</strong> Use the glossary or 
              navigation menu to locate specific topics or standards.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>2. Learn Key Concepts:</strong> Each section begins with an 
              overview of the topic, followed by detailed explanations and examples 
              to help you understand and apply the concepts.
            </Text>
          </List.Item>
          <List.Item>
            <Text>
              <strong>3. Use the Examples:</strong> Real-world examples and 
              templates are provided throughout the guide to illustrate how to 
              implement the standards effectively.
            </Text>
          </List.Item>
        </List>

        <Divider my="md" />

        {/* Tips for effective use */}
        <Title 
          order={3} 
          size="h4" 
          mt="lg" 
          mb="sm"
        >
          Tips for Effective Use
        </Title>
        <Card 
          shadow="sm" 
          padding="lg" 
          mb="md"
        >
          <List spacing="sm" size="md">
            <List.Item>
              <Text>
                <strong>Tip 1:</strong> Start with the "Purpose of Standards" 
                section to understand the overall objectives before diving into 
                specifics.
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                <strong>Tip 2:</strong> Bookmark key sections for quick reference 
                during your workflow.
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                <strong>Tip 3:</strong> Use the provided templates to save time 
                and maintain consistency across projects.
              </Text>
            </List.Item>
            <List.Item>
              <Text>
                <strong>Tip 4:</strong> Collaborate with your team to ensure a 
                shared understanding and application of the guide’s principles.
              </Text>
            </List.Item>
          </List>
        </Card>

        <Divider my="md" />

        {/* Closing statement */}
        <Text 
          size="lg" 
          mt="lg" 
        >
          This guide is your roadmap to mastering the standards and improving 
          your development workflow. Use it as a reference, a learning tool, and 
          a source of inspiration as you work toward creating high-quality, 
          scalable, and maintainable software.
        </Text>
      </Container>
    </div>
  )
}
