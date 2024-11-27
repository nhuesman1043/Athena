// ========================================
// IMPORTS
// ========================================

// ========================
// Tabler Icons
// ========================
import {
    IconBulb,
    IconLayout,
    IconGitBranch,
    IconFileText,
    IconCode,
    IconCheckbox,
    IconCloudUpload,
    IconShieldLock,
    IconActivity,
    IconEye,
    IconPalette,
    IconServer,
    IconChartBar,
    IconUsers,
    IconBook,
    IconTool,
    IconHistory,
} from "@tabler/icons-react"

// ========================================
// NAVBAR DATA
// ========================================

// ========================
// Variables
// ========================
const iconSize: number = 30
const iconStroke: number = 1.5

// ========================
// Data
// ========================
export const sections = [
    {
        label: "Introduction",
        href: "#introduction",
        icon: <IconBulb  size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "Purpose of Standards", href: "#purpose-of-standards" },
            { label: "How to Use This Guide", href: "#how-to-use" },
        ],
    },
    {
        label: "Code Organization",
        href: "#code-organization",
        icon: <IconLayout size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "File Structure", href: "#file-structure" },
            { label: "Naming Conventions", href: "#naming-conventions" },
            { label: "Sectioning Standards", href: "#sectioning-standards" },
        ],
    },
    {
        label: "Version Control",
        href: "#version-control",
        icon: <IconGitBranch size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "Git Workflow", href: "#git-workflow" },
            { label: "Repository Organization", href: "#repository-organization" },
        ],
    },
    {
        label: "Documentation",
        href: "#documentation",
        icon: <IconFileText size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "Code Documentation", href: "#code-documentation" },
            { label: "API Documentation", href: "#api-documentation" },
            { label: "README Files", href: "#readme-files" },
        ],
    },
    {
        label: "Coding Standards",
        href: "#coding-standards",
        icon: <IconCode size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "Language-Specific Guidelines", href: "#language-specific-guidelines" },
            { label: "Framework Standards", href: "#framework-standards" },
            { label: "Error Handling", href: "#error-handling" },
        ],
    },
    {
        label: "Testing",
        href: "#testing",
        icon: <IconCheckbox size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "Unit Testing", href: "#unit-testing" },
            { label: "Integration Testing", href: "#integration-testing" },
            { label: "End-to-End Testing", href: "#end-to-end-testing" },
        ],
    },
    {
        label: "Deployment",
        href: "#deployment",
        icon: <IconCloudUpload size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "Environment Configuration", href: "#environment-configuration" },
            { label: "CI/CD Pipelines", href: "#ci-cd-pipelines" },
            { label: "Rollback Strategies", href: "#rollback-strategies" },
        ],
    },
    {
        label: "Security",
        href: "#security",
        icon: <IconShieldLock size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "Code Security", href: "#code-security" },
            { label: "API Security", href: "#api-security" },
            { label: "Data Protection", href: "#data-protection" },
        ],
    },
    {
        label: "Performance",
        href: "#performance",
        icon: <IconActivity size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "Code Performance", href: "#code-performance" },
            { label: "API Performance", href: "#api-performance" },
            { label: "Database Optimization", href: "#database-optimization" },
        ],
    },
    {
        label: "Accessibility",
        href: "#accessibility",
        icon: <IconEye size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "Frontend Accessibility", href: "#frontend-accessibility" },
            { label: "Testing Accessibility", href: "#testing-accessibility" },
        ],
    },
    {
        label: "Design and UX",
        href: "#design-ux",
        icon: <IconPalette size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "UI/UX Standards", href: "#ui-ux-standards" },
            { label: "Prototyping", href: "#prototyping" },
        ],
    },
    {
        label: "DevOps and Infrastructure",
        href: "#devops-infrastructure",
        icon: <IconServer size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "Containerization", href: "#containerization" },
            { label: "Infrastructure as Code", href: "#infrastructure-as-code" },
            { label: "Monitoring and Logging", href: "#monitoring-logging" },
        ],
    },
    {
        label: "Analytics and Metrics",
        href: "#analytics-metrics",
        icon: <IconChartBar size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "Event Tracking", href: "#event-tracking" },
            { label: "Reporting", href: "#reporting" },
        ],
    },
    {
        label: "Team Collaboration",
        href: "#team-collaboration",
        icon: <IconUsers size={iconSize} stroke={iconStroke} />,
        children: [
            { label: "Code Reviews", href: "#code-reviews" },
            { label: "Communication", href: "#communication" },
            { label: "Onboarding", href: "#onboarding" },
        ],
    },
    {
        label: "Glossary",
        href: "#glossary",
        icon: <IconBook size={iconSize} stroke={iconStroke} />,
    },
    {
        label: "Tools and References",
        href: "#tools-references",
        icon: <IconTool size={iconSize} stroke={iconStroke} />,
    },
    {
        label: "Change Log",
        href: "#change-log",
        icon: <IconHistory size={iconSize} stroke={iconStroke} />,
    },
]