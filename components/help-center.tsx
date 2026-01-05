"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Search,
  BookOpen,
  Zap,
  Settings,
  CreditCard,
  Users,
  HelpCircle,
  MessageCircle,
  Mail,
  Phone,
  ChevronRight,
  Star,
  Clock,
  CheckCircle,
} from "lucide-react"

interface HelpArticle {
  id: string
  title: string
  description: string
  category: string
  tags: string[]
  readTime: number
  popularity: number
  lastUpdated: string
  content: string
}

// All help articles with actual content
const helpArticles: HelpArticle[] = [
  // Getting Started Articles (8 articles)
  {
    id: "getting-started-guide",
    title: "Getting Started with Leadtella",
    description: "A complete guide to setting up your first quiz and capturing leads",
    category: "getting-started",
    tags: ["beginner", "setup", "first-steps"],
    readTime: 5,
    popularity: 95,
    lastUpdated: "2024-01-15",
    content:
      "# Getting Started with Leadtella\n\nWelcome to Leadtella! This guide will help you create your first AI-powered lead capture quiz in just a few minutes.",
  },
  {
    id: "account-setup-guide",
    title: "Setting Up Your Leadtella Account",
    description: "Complete your profile and configure your account settings",
    category: "getting-started",
    tags: ["account", "profile", "setup"],
    readTime: 3,
    popularity: 88,
    lastUpdated: "2024-01-14",
    content:
      "# Setting Up Your Leadtella Account\n\nProperly configuring your account ensures the best experience with Leadtella.",
  },
  {
    id: "first-quiz-tutorial",
    title: "Creating Your First Quiz in 5 Minutes",
    description: "Quick tutorial to get your first quiz live",
    category: "getting-started",
    tags: ["tutorial", "quick-start", "beginner"],
    readTime: 5,
    popularity: 92,
    lastUpdated: "2024-01-13",
    content: "# Creating Your First Quiz in 5 Minutes\n\nLet's get your first quiz up and running quickly.",
  },
  {
    id: "understanding-dashboard",
    title: "Understanding Your Dashboard",
    description: "Navigate and use your Leadtella dashboard effectively",
    category: "getting-started",
    tags: ["dashboard", "navigation", "overview"],
    readTime: 4,
    popularity: 85,
    lastUpdated: "2024-01-12",
    content: "# Understanding Your Dashboard\n\nYour dashboard is your command center for managing quizzes and leads.",
  },
  {
    id: "quiz-templates-guide",
    title: "Choosing the Right Quiz Template",
    description: "Overview of available templates and when to use them",
    category: "getting-started",
    tags: ["templates", "quiz-types", "selection"],
    readTime: 6,
    popularity: 79,
    lastUpdated: "2024-01-11",
    content: "# Choosing the Right Quiz Template\n\nSelect the perfect template for your business goals.",
  },
  {
    id: "mobile-optimization",
    title: "Optimizing Quizzes for Mobile",
    description: "Ensure your quizzes work perfectly on mobile devices",
    category: "getting-started",
    tags: ["mobile", "responsive", "optimization"],
    readTime: 4,
    popularity: 82,
    lastUpdated: "2024-01-10",
    content: "# Optimizing Quizzes for Mobile\n\nOver 60% of quiz completions happen on mobile devices.",
  },
  {
    id: "quiz-best-practices",
    title: "Quiz Creation Best Practices",
    description: "Tips and strategies for creating high-converting quizzes",
    category: "getting-started",
    tags: ["best-practices", "conversion", "strategy"],
    readTime: 7,
    popularity: 87,
    lastUpdated: "2024-01-09",
    content: "# Quiz Creation Best Practices\n\nCreate quizzes that engage users and generate quality leads.",
  },
  {
    id: "common-mistakes",
    title: "Common Quiz Creation Mistakes to Avoid",
    description: "Learn from common pitfalls and improve your quiz performance",
    category: "getting-started",
    tags: ["mistakes", "pitfalls", "improvement"],
    readTime: 5,
    popularity: 76,
    lastUpdated: "2024-01-08",
    content: "# Common Quiz Creation Mistakes to Avoid\n\nLearn from these common mistakes to create better quizzes.",
  },

  // Quiz Builder Articles (12 articles)
  {
    id: "ai-quiz-generation",
    title: "Using AI to Generate Quiz Questions",
    description: "Learn how to leverage AI to create engaging quiz content automatically",
    category: "quiz-builder",
    tags: ["ai", "questions", "automation"],
    readTime: 7,
    popularity: 88,
    lastUpdated: "2024-01-12",
    content:
      "# Using AI to Generate Quiz Questions\n\nOur AI-powered quiz generator helps you create engaging questions that qualify leads effectively.",
  },
  {
    id: "question-types-guide",
    title: "Complete Guide to Question Types",
    description: "Understanding different question types and when to use them",
    category: "quiz-builder",
    tags: ["questions", "types", "formats"],
    readTime: 8,
    popularity: 84,
    lastUpdated: "2024-01-11",
    content:
      "# Complete Guide to Question Types\n\nChoose the right question type for maximum engagement and data collection.",
  },
  {
    id: "customizing-quiz-design",
    title: "Customizing Your Quiz Design",
    description: "Make your quiz match your brand with design customization",
    category: "quiz-builder",
    tags: ["design", "branding", "customization"],
    readTime: 6,
    popularity: 81,
    lastUpdated: "2024-01-10",
    content: "# Customizing Your Quiz Design\n\nCreate a quiz that perfectly matches your brand identity.",
  },
  {
    id: "result-pages-setup",
    title: "Creating Effective Result Pages",
    description: "Design result pages that convert quiz takers into leads",
    category: "quiz-builder",
    tags: ["results", "conversion", "personalization"],
    readTime: 7,
    popularity: 89,
    lastUpdated: "2024-01-09",
    content:
      "# Creating Effective Result Pages\n\nResult pages are where the magic happens - turn quiz engagement into conversions.",
  },
  {
    id: "conditional-logic",
    title: "Using Conditional Logic in Quizzes",
    description: "Create dynamic quizzes that adapt based on user responses",
    category: "quiz-builder",
    tags: ["logic", "branching", "dynamic"],
    readTime: 9,
    popularity: 77,
    lastUpdated: "2024-01-08",
    content:
      "# Using Conditional Logic in Quizzes\n\nCreate smart quizzes that adapt to user responses for better personalization.",
  },
  {
    id: "quiz-analytics-setup",
    title: "Setting Up Quiz Analytics",
    description: "Track and measure your quiz performance effectively",
    category: "quiz-builder",
    tags: ["analytics", "tracking", "metrics"],
    readTime: 6,
    popularity: 83,
    lastUpdated: "2024-01-07",
    content: "# Setting Up Quiz Analytics\n\nMeasure what matters to optimize your quiz performance.",
  },
  {
    id: "ab-testing-quizzes",
    title: "A/B Testing Your Quizzes",
    description: "Optimize quiz performance through systematic testing",
    category: "quiz-builder",
    tags: ["testing", "optimization", "conversion"],
    readTime: 8,
    popularity: 75,
    lastUpdated: "2024-01-06",
    content: "# A/B Testing Your Quizzes\n\nImprove quiz performance through data-driven testing.",
  },
  {
    id: "quiz-templates-customization",
    title: "Customizing Quiz Templates",
    description: "Modify templates to fit your specific business needs",
    category: "quiz-builder",
    tags: ["templates", "customization", "modification"],
    readTime: 5,
    popularity: 78,
    lastUpdated: "2024-01-05",
    content: "# Customizing Quiz Templates\n\nTransform templates into unique quizzes for your business.",
  },
  {
    id: "multi-step-quizzes",
    title: "Creating Multi-Step Quizzes",
    description: "Build engaging multi-page quiz experiences",
    category: "quiz-builder",
    tags: ["multi-step", "pages", "flow"],
    readTime: 7,
    popularity: 80,
    lastUpdated: "2024-01-04",
    content: "# Creating Multi-Step Quizzes\n\nDesign engaging multi-page experiences that keep users engaged.",
  },
  {
    id: "quiz-personalization",
    title: "Advanced Quiz Personalization",
    description: "Create highly personalized quiz experiences",
    category: "quiz-builder",
    tags: ["personalization", "dynamic", "custom"],
    readTime: 9,
    popularity: 73,
    lastUpdated: "2024-01-03",
    content: "# Advanced Quiz Personalization\n\nCreate unique experiences for each quiz taker.",
  },
  {
    id: "quiz-scoring-systems",
    title: "Setting Up Quiz Scoring Systems",
    description: "Create scoring systems to qualify and rank leads",
    category: "quiz-builder",
    tags: ["scoring", "qualification", "ranking"],
    readTime: 6,
    popularity: 82,
    lastUpdated: "2024-01-02",
    content: "# Setting Up Quiz Scoring Systems\n\nAutomatically qualify and rank leads based on quiz responses.",
  },
  {
    id: "quiz-embedding-options",
    title: "Advanced Quiz Embedding Options",
    description: "Explore different ways to embed and display quizzes",
    category: "quiz-builder",
    tags: ["embedding", "display", "integration"],
    readTime: 8,
    popularity: 86,
    lastUpdated: "2024-01-01",
    content: "# Advanced Quiz Embedding Options\n\nDiscover all the ways to integrate quizzes into your website.",
  },

  // Integrations Articles (15 articles)
  {
    id: "hubspot-integration",
    title: "Connecting HubSpot to Leadtella",
    description: "Step-by-step guide to sync your leads with HubSpot CRM",
    category: "integrations",
    tags: ["hubspot", "crm", "integration"],
    readTime: 8,
    popularity: 92,
    lastUpdated: "2024-01-10",
    content:
      "# Connecting HubSpot to Leadtella\n\nAutomatically sync your quiz leads to HubSpot CRM for seamless lead management.",
  },
  {
    id: "salesforce-integration",
    title: "Salesforce Integration Setup",
    description: "Connect Leadtella with Salesforce for enterprise lead management",
    category: "integrations",
    tags: ["salesforce", "crm", "enterprise"],
    readTime: 10,
    popularity: 87,
    lastUpdated: "2024-01-09",
    content: "# Salesforce Integration Setup\n\nEnterprise-grade integration with Salesforce CRM.",
  },
  {
    id: "mailchimp-integration",
    title: "Mailchimp Email Marketing Integration",
    description: "Sync quiz leads with Mailchimp for automated email campaigns",
    category: "integrations",
    tags: ["mailchimp", "email", "marketing"],
    readTime: 6,
    popularity: 89,
    lastUpdated: "2024-01-08",
    content:
      "# Mailchimp Email Marketing Integration\n\nAutomatically add quiz leads to your Mailchimp email campaigns.",
  },
  {
    id: "zapier-integration",
    title: "Zapier Integration for 5000+ Apps",
    description: "Connect Leadtella to thousands of apps through Zapier",
    category: "integrations",
    tags: ["zapier", "automation", "workflow"],
    readTime: 7,
    popularity: 85,
    lastUpdated: "2024-01-07",
    content: "# Zapier Integration for 5000+ Apps\n\nConnect Leadtella to virtually any app through Zapier automation.",
  },
  {
    id: "google-analytics-integration",
    title: "Google Analytics Integration",
    description: "Track quiz performance and conversions in Google Analytics",
    category: "integrations",
    tags: ["analytics", "google", "tracking"],
    readTime: 5,
    popularity: 91,
    lastUpdated: "2024-01-06",
    content: "# Google Analytics Integration\n\nTrack quiz performance and measure ROI with Google Analytics.",
  },
  {
    id: "pipedrive-integration",
    title: "Pipedrive CRM Integration",
    description: "Sync leads with Pipedrive for sales pipeline management",
    category: "integrations",
    tags: ["pipedrive", "crm", "sales"],
    readTime: 7,
    popularity: 83,
    lastUpdated: "2024-01-05",
    content: "# Pipedrive CRM Integration\n\nStreamline your sales process with Pipedrive integration.",
  },
  {
    id: "activecampaign-integration",
    title: "ActiveCampaign Marketing Automation",
    description: "Create sophisticated marketing workflows with ActiveCampaign",
    category: "integrations",
    tags: ["activecampaign", "automation", "marketing"],
    readTime: 8,
    popularity: 80,
    lastUpdated: "2024-01-04",
    content:
      "# ActiveCampaign Marketing Automation\n\nBuild advanced marketing workflows with ActiveCampaign integration.",
  },
  {
    id: "slack-integration",
    title: "Slack Notifications Integration",
    description: "Get instant notifications about new leads in Slack",
    category: "integrations",
    tags: ["slack", "notifications", "team"],
    readTime: 4,
    popularity: 78,
    lastUpdated: "2024-01-03",
    content: "# Slack Notifications Integration\n\nStay informed about new leads with real-time Slack notifications.",
  },
  {
    id: "webhook-integration",
    title: "Custom Webhook Integration",
    description: "Send quiz data to any system using webhooks",
    category: "integrations",
    tags: ["webhooks", "api", "custom"],
    readTime: 9,
    popularity: 72,
    lastUpdated: "2024-01-02",
    content: "# Custom Webhook Integration\n\nSend quiz data to any system using webhooks for maximum flexibility.",
  },
  {
    id: "api-integration",
    title: "Leadtella API Integration",
    description: "Build custom integrations using the Leadtella API",
    category: "integrations",
    tags: ["api", "development", "custom"],
    readTime: 12,
    popularity: 68,
    lastUpdated: "2024-01-01",
    content: "# Leadtella API Integration\n\nBuild powerful custom integrations using our REST API.",
  },
  {
    id: "wordpress-plugin",
    title: "WordPress Plugin Installation",
    description: "Easy WordPress integration with our official plugin",
    category: "integrations",
    tags: ["wordpress", "plugin", "cms"],
    readTime: 5,
    popularity: 88,
    lastUpdated: "2023-12-31",
    content: "# WordPress Plugin Installation\n\nEasily add quizzes to your WordPress site with our official plugin.",
  },
  {
    id: "shopify-integration",
    title: "Shopify E-commerce Integration",
    description: "Add product recommendation quizzes to your Shopify store",
    category: "integrations",
    tags: ["shopify", "ecommerce", "products"],
    readTime: 6,
    popularity: 84,
    lastUpdated: "2023-12-30",
    content: "# Shopify E-commerce Integration\n\nBoost sales with product recommendation quizzes on Shopify.",
  },
  {
    id: "facebook-pixel-integration",
    title: "Facebook Pixel Integration",
    description: "Track quiz conversions and create custom audiences",
    category: "integrations",
    tags: ["facebook", "pixel", "advertising"],
    readTime: 6,
    popularity: 86,
    lastUpdated: "2023-12-29",
    content: "# Facebook Pixel Integration\n\nOptimize Facebook ads with quiz conversion tracking.",
  },
  {
    id: "google-sheets-integration",
    title: "Google Sheets Integration",
    description: "Automatically export quiz data to Google Sheets",
    category: "integrations",
    tags: ["google-sheets", "export", "data"],
    readTime: 5,
    popularity: 81,
    lastUpdated: "2023-12-28",
    content: "# Google Sheets Integration\n\nAutomatically export and analyze quiz data in Google Sheets.",
  },
  {
    id: "integration-troubleshooting",
    title: "Integration Troubleshooting Guide",
    description: "Common integration issues and how to resolve them",
    category: "integrations",
    tags: ["troubleshooting", "issues", "support"],
    readTime: 8,
    popularity: 75,
    lastUpdated: "2023-12-27",
    content: "# Integration Troubleshooting Guide\n\nResolve common integration issues quickly and effectively.",
  },

  // Billing Articles (6 articles)
  {
    id: "pricing-plans-explained",
    title: "Understanding Leadtella Pricing Plans",
    description: "Complete breakdown of features included in each plan",
    category: "billing",
    tags: ["pricing", "plans", "features"],
    readTime: 6,
    popularity: 85,
    lastUpdated: "2024-01-08",
    content:
      "# Understanding Leadtella Pricing Plans\n\nChoose the right plan for your business needs and growth stage.",
  },
  {
    id: "billing-management",
    title: "Managing Your Billing and Payments",
    description: "How to update payment methods and manage your subscription",
    category: "billing",
    tags: ["billing", "payments", "subscription"],
    readTime: 5,
    popularity: 82,
    lastUpdated: "2024-01-07",
    content:
      "# Managing Your Billing and Payments\n\nKeep your account in good standing with proper billing management.",
  },
  {
    id: "plan-upgrades-downgrades",
    title: "Upgrading and Downgrading Plans",
    description: "How to change your subscription plan",
    category: "billing",
    tags: ["upgrade", "downgrade", "plan-change"],
    readTime: 4,
    popularity: 79,
    lastUpdated: "2024-01-06",
    content: "# Upgrading and Downgrading Plans\n\nChange your plan as your business needs evolve.",
  },
  {
    id: "refund-policy",
    title: "Refund Policy and Process",
    description: "Understanding our refund policy and how to request refunds",
    category: "billing",
    tags: ["refunds", "policy", "cancellation"],
    readTime: 4,
    popularity: 77,
    lastUpdated: "2024-01-05",
    content: "# Refund Policy and Process\n\nUnderstanding when and how refunds are available.",
  },
  {
    id: "enterprise-billing",
    title: "Enterprise Billing and Invoicing",
    description: "Custom billing options for enterprise customers",
    category: "billing",
    tags: ["enterprise", "invoicing", "custom"],
    readTime: 6,
    popularity: 71,
    lastUpdated: "2024-01-04",
    content: "# Enterprise Billing and Invoicing\n\nFlexible billing solutions for large organizations.",
  },
  {
    id: "tax-information",
    title: "Tax Information and Compliance",
    description: "Understanding taxes, VAT, and compliance requirements",
    category: "billing",
    tags: ["tax", "vat", "compliance"],
    readTime: 5,
    popularity: 68,
    lastUpdated: "2024-01-03",
    content: "# Tax Information and Compliance\n\nUnderstanding tax implications and compliance requirements.",
  },

  // Account Management Articles (9 articles)
  {
    id: "user-profile-management",
    title: "Managing Your User Profile",
    description: "Update your profile information and preferences",
    category: "account",
    tags: ["profile", "settings", "preferences"],
    readTime: 4,
    popularity: 84,
    lastUpdated: "2024-01-02",
    content: "# Managing Your User Profile\n\nKeep your profile information current and configure your preferences.",
  },
  {
    id: "team-management",
    title: "Team Management and Permissions",
    description: "Add team members and manage their access levels",
    category: "account",
    tags: ["team", "permissions", "collaboration"],
    readTime: 7,
    popularity: 81,
    lastUpdated: "2024-01-01",
    content: "# Team Management and Permissions\n\nCollaborate effectively with proper team management.",
  },
  {
    id: "security-settings",
    title: "Account Security Best Practices",
    description: "Secure your account with proper security measures",
    category: "account",
    tags: ["security", "authentication", "protection"],
    readTime: 6,
    popularity: 88,
    lastUpdated: "2023-12-31",
    content: "# Account Security Best Practices\n\nProtect your account and data with proper security measures.",
  },
  {
    id: "notification-settings",
    title: "Configuring Notification Settings",
    description: "Customize how and when you receive notifications",
    category: "account",
    tags: ["notifications", "alerts", "preferences"],
    readTime: 5,
    popularity: 76,
    lastUpdated: "2023-12-30",
    content: "# Configuring Notification Settings\n\nStay informed with customized notification preferences.",
  },
  {
    id: "data-export-import",
    title: "Data Export and Import Options",
    description: "Export your data or import from other platforms",
    category: "account",
    tags: ["export", "import", "data", "migration"],
    readTime: 6,
    popularity: 73,
    lastUpdated: "2023-12-29",
    content: "# Data Export and Import Options\n\nManage your data with flexible export and import capabilities.",
  },
  {
    id: "account-deletion",
    title: "Account Deletion and Data Retention",
    description: "Understanding account deletion and data policies",
    category: "account",
    tags: ["deletion", "retention", "privacy"],
    readTime: 5,
    popularity: 69,
    lastUpdated: "2023-12-28",
    content: "# Account Deletion and Data Retention\n\nUnderstanding what happens when you delete your account.",
  },
  {
    id: "api-key-management",
    title: "API Key Management",
    description: "Generate and manage API keys for integrations",
    category: "account",
    tags: ["api", "keys", "integration", "security"],
    readTime: 5,
    popularity: 72,
    lastUpdated: "2023-12-27",
    content: "# API Key Management\n\nSecurely manage API keys for custom integrations.",
  },
  {
    id: "account-migration",
    title: "Account Migration Between Plans",
    description: "Moving between different account types and plans",
    category: "account",
    tags: ["migration", "plans", "upgrade"],
    readTime: 6,
    popularity: 75,
    lastUpdated: "2023-12-26",
    content: "# Account Migration Between Plans\n\nSmoothly transition between different account types.",
  },
  {
    id: "compliance-settings",
    title: "Compliance and Privacy Settings",
    description: "Configure compliance settings for GDPR, CCPA, and other regulations",
    category: "account",
    tags: ["compliance", "gdpr", "privacy"],
    readTime: 7,
    popularity: 78,
    lastUpdated: "2023-12-25",
    content: "# Compliance and Privacy Settings\n\nEnsure compliance with privacy regulations and industry standards.",
  },

  // Troubleshooting Articles (10 articles)
  {
    id: "troubleshooting-common-issues",
    title: "Troubleshooting Common Issues",
    description: "Solutions to frequently encountered problems",
    category: "troubleshooting",
    tags: ["troubleshooting", "issues", "solutions"],
    readTime: 10,
    popularity: 78,
    lastUpdated: "2024-01-11",
    content: "# Troubleshooting Common Issues\n\nQuick solutions to the most common Leadtella problems.",
  },
  {
    id: "quiz-loading-problems",
    title: "Quiz Loading and Display Problems",
    description: "Resolve issues with quiz loading and display",
    category: "troubleshooting",
    tags: ["loading", "display", "performance"],
    readTime: 8,
    popularity: 82,
    lastUpdated: "2024-01-10",
    content: "# Quiz Loading and Display Problems\n\nDiagnose and fix quiz loading issues.",
  },
  {
    id: "integration-sync-issues",
    title: "Integration and Sync Issues",
    description: "Fix problems with CRM and third-party integrations",
    category: "troubleshooting",
    tags: ["integration", "sync", "crm"],
    readTime: 9,
    popularity: 85,
    lastUpdated: "2024-01-09",
    content: "# Integration and Sync Issues\n\nResolve integration problems with CRMs and third-party services.",
  },
  {
    id: "email-delivery-issues",
    title: "Email Delivery and Notification Issues",
    description: "Troubleshoot email delivery problems",
    category: "troubleshooting",
    tags: ["email", "delivery", "notifications"],
    readTime: 7,
    popularity: 79,
    lastUpdated: "2024-01-08",
    content: "# Email Delivery and Notification Issues\n\nEnsure reliable email delivery and notifications.",
  },
  {
    id: "mobile-compatibility-issues",
    title: "Mobile Compatibility Issues",
    description: "Fix problems with mobile quiz display and functionality",
    category: "troubleshooting",
    tags: ["mobile", "responsive", "compatibility"],
    readTime: 6,
    popularity: 81,
    lastUpdated: "2024-01-07",
    content: "# Mobile Compatibility Issues\n\nEnsure perfect mobile experience for quiz takers.",
  },
  {
    id: "data-accuracy-issues",
    title: "Data Accuracy and Reporting Issues",
    description: "Resolve problems with data collection and reporting",
    category: "troubleshooting",
    tags: ["data", "accuracy", "reporting"],
    readTime: 8,
    popularity: 76,
    lastUpdated: "2024-01-06",
    content: "# Data Accuracy and Reporting Issues\n\nEnsure accurate data collection and reporting.",
  },
  {
    id: "account-access-issues",
    title: "Account Access and Login Issues",
    description: "Resolve login problems and account access issues",
    category: "troubleshooting",
    tags: ["login", "access", "authentication"],
    readTime: 6,
    popularity: 83,
    lastUpdated: "2024-01-05",
    content: "# Account Access and Login Issues\n\nRegain access to your Leadtella account.",
  },
  {
    id: "performance-optimization",
    title: "Performance Optimization Issues",
    description: "Improve quiz loading speed and overall performance",
    category: "troubleshooting",
    tags: ["performance", "speed", "optimization"],
    readTime: 9,
    popularity: 74,
    lastUpdated: "2024-01-04",
    content: "# Performance Optimization Issues\n\nOptimize quiz performance for better user experience.",
  },
  {
    id: "browser-compatibility",
    title: "Browser Compatibility Issues",
    description: "Fix problems with specific browsers and versions",
    category: "troubleshooting",
    tags: ["browser", "compatibility", "support"],
    readTime: 7,
    popularity: 77,
    lastUpdated: "2024-01-03",
    content: "# Browser Compatibility Issues\n\nEnsure your quizzes work across all browsers.",
  },
  {
    id: "api-troubleshooting",
    title: "API and Technical Integration Issues",
    description: "Resolve technical problems with API integrations",
    category: "troubleshooting",
    tags: ["api", "technical", "integration"],
    readTime: 10,
    popularity: 70,
    lastUpdated: "2024-01-02",
    content: "# API and Technical Integration Issues\n\nTroubleshoot technical integration problems.",
  },
]

const helpCategories = [
  {
    id: "getting-started",
    name: "Getting Started",
    description: "Learn the basics of Leadtella",
    icon: BookOpen,
    color: "bg-green-100 text-green-800",
    articles: helpArticles.filter((article) => article.category === "getting-started").length,
  },
  {
    id: "quiz-builder",
    name: "Quiz Builder",
    description: "Create and customize your quizzes",
    icon: Zap,
    color: "bg-primary-100 text-primary-800",
    articles: helpArticles.filter((article) => article.category === "quiz-builder").length,
  },
  {
    id: "integrations",
    name: "Integrations",
    description: "Connect with your favorite tools",
    icon: Settings,
    color: "bg-blue-100 text-blue-800",
    articles: helpArticles.filter((article) => article.category === "integrations").length,
  },
  {
    id: "billing",
    name: "Billing & Plans",
    description: "Manage your subscription",
    icon: CreditCard,
    color: "bg-orange-100 text-orange-800",
    articles: helpArticles.filter((article) => article.category === "billing").length,
  },
  {
    id: "account",
    name: "Account Management",
    description: "Profile and team settings",
    icon: Users,
    color: "bg-indigo-100 text-indigo-800",
    articles: helpArticles.filter((article) => article.category === "account").length,
  },
  {
    id: "troubleshooting",
    name: "Troubleshooting",
    description: "Common issues and solutions",
    icon: HelpCircle,
    color: "bg-red-100 text-red-800",
    articles: helpArticles.filter((article) => article.category === "troubleshooting").length,
  },
]

export function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [filteredArticles, setFilteredArticles] = useState<HelpArticle[]>(helpArticles)

  // Get popular articles (sorted by popularity)
  const popularArticles = [...helpArticles].sort((a, b) => b.popularity - a.popularity).slice(0, 6)

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    filterArticles(term, selectedCategory)
  }

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setSearchTerm("")
    filterArticles("", categoryId)
  }

  const resetFilters = () => {
    setSelectedCategory(null)
    setSearchTerm("")
    setFilteredArticles(helpArticles)
  }

  const filterArticles = (searchTerm: string, category: string | null) => {
    let filtered = helpArticles

    // Filter by category first
    if (category) {
      filtered = filtered.filter((article) => article.category === category)
    }

    // Then filter by search term
    if (searchTerm) {
      const lowerSearchTerm = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(lowerSearchTerm) ||
          article.description.toLowerCase().includes(lowerSearchTerm) ||
          article.tags.some((tag) => tag.toLowerCase().includes(lowerSearchTerm)),
      )
    }

    setFilteredArticles(filtered)
  }

  // Update filtered articles when dependencies change
  useEffect(() => {
    filterArticles(searchTerm, selectedCategory)
  }, [searchTerm, selectedCategory])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
        <p className="text-xl text-gray-600 mb-8">
          Find answers, learn best practices, and get the most out of Leadtella
        </p>

        {/* Search */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <Input
            placeholder="Search for articles, guides, and tutorials..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-12 pr-4 py-4 text-lg border-2 border-gray-200 focus:border-purple-500"
          />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        <Card className="border-2 border-purple-200 hover:border-purple-400 transition-colors cursor-pointer">
          <CardHeader className="text-center">
            <MessageCircle className="h-12 w-12 text-primary-600 mx-auto mb-4" />
            <CardTitle>Live Chat</CardTitle>
            <CardDescription>Get instant help from our support team</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button className="bg-primary-600 hover:bg-primary-700">Start Chat</Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 hover:border-green-400 transition-colors cursor-pointer">
          <CardHeader className="text-center">
            <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <CardTitle>Email Support</CardTitle>
            <CardDescription>Send us a detailed message</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50" asChild>
              <a href="mailto:support@leadtella.com">Send Email</a>
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-blue-200 hover:border-blue-400 transition-colors cursor-pointer">
          <CardHeader className="text-center">
            <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <CardTitle>Schedule Call</CardTitle>
            <CardDescription>Book a one-on-one session</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Book Call
            </Button>
          </CardContent>
        </Card>

        <Card className="border-2 border-orange-200 hover:border-orange-400 transition-colors cursor-pointer">
          <CardHeader className="text-center">
            <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
            <CardTitle>Affiliate Support</CardTitle>
            <CardDescription>Questions about our affiliate program</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50" asChild>
              <a href="mailto:affiliates@leadtella.com">Contact Affiliates</a>
            </Button>
          </CardContent>
        </Card>
      </div>

      {!selectedCategory && !searchTerm && (
        <>
          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category) => (
                <Card
                  key={category.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleCategorySelect(category.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className={`p-3 rounded-lg ${category.color}`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    </div>
                    <CardTitle className="text-lg">{category.name}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{category.articles} articles</span>
                      <Badge variant="outline">{category.articles}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {popularArticles.map((article) => (
                <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2">{article.title}</CardTitle>
                        <CardDescription>{article.description}</CardDescription>
                      </div>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-sm font-medium">{article.popularity}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime} min read</span>
                        </div>
                        <Badge variant="outline" className="text-xs">
                          {helpCategories.find((cat) => cat.id === article.category)?.name}
                        </Badge>
                      </div>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Search Results or Category Articles */}
      {(selectedCategory || searchTerm) && (
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {selectedCategory
                  ? helpCategories.find((cat) => cat.id === selectedCategory)?.name
                  : `Search Results for "${searchTerm}"`}
              </h2>
              <p className="text-gray-600">{filteredArticles.length} articles found</p>
            </div>
            <Button variant="outline" onClick={resetFilters}>
              Clear Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {filteredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-xl">{article.title}</CardTitle>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Star className="h-4 w-4 fill-current" />
                          <span className="text-sm font-medium">{article.popularity}</span>
                        </div>
                      </div>
                      <CardDescription className="text-base">{article.description}</CardDescription>
                    </div>
                    <ChevronRight className="h-5 w-5 text-gray-400 flex-shrink-0 ml-4" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime} min read</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" />
                        <span>Updated {new Date(article.lastUpdated).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge variant="outline" className="text-xs">
                        {helpCategories.find((cat) => cat.id === article.category)?.name}
                      </Badge>
                      {article.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search terms or browse our categories above.</p>
              <Button onClick={resetFilters}>Browse All Articles</Button>
            </div>
          )}
        </div>
      )}

      {/* Contact Section */}
      <div className="mt-16 bg-gray-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Still need help?</h3>
        <p className="text-gray-600 mb-6">
          Our support team is here to help you succeed with Leadtella. Get in touch and we'll get back to you as soon as
          possible. For affiliate program inquiries, contact affiliates@leadtella.com.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-primary-600 hover:bg-primary-700">
            <MessageCircle className="h-4 w-4 mr-2" />
            Start Live Chat
          </Button>
          <Button variant="outline" asChild>
            <a href="mailto:support@leadtella.com">
              <Mail className="h-4 w-4 mr-2" />
              Email Support
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
