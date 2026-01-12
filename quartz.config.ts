import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Sidney's Obsidian Notes c: 🐰",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'google', tagId: 'G-G16ZWP0FLH'
    },
    locale: "en-US",
    baseUrl: "https://dabluepiano.github.io/sidneys-notes/",
    ignorePatterns: ["private", "templates", ".obsidian", "_sf"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Atkinson Hyperlegible",
        body: "Atkinson Hyperlegible",
        code: "jetbrains-mono",
      },
    colors: {
      lightMode: {
        // Base Layer
        light: "#F8F9FF",         // Very light blue-white background
        lightgray: "#E8EFFF",     // Soft blue-gray borders
        gray: "#C7D2FE",         // Light blue-purple accents
        
        // Text & Headers
        darkgray: "#3730A3",     // Deep blue-purple for body text
        dark: "#1E1B4B",         // Very dark blue for headers
        
        // Interactive Elements
        secondary: "#3B82F6",    // Bright blue
        tertiary: "#8B5CF6",     // Purple
        
        // Effects
        highlight: "rgba(59, 130, 246, 0.1)",  // Blue highlight
        textHighlight: "rgba(139, 92, 246, 0.15)", // Purple highlight
      },
      darkMode: {
        // Base Layer
        light: "#0F0A19",         // Deep blue-black background
        lightgray: "#1E1A2E",     // Dark blue-gray borders
        gray: "#312E81",         // Medium blue-purple accents
        
        // Text & Headers
        darkgray: "#C7D2FE",     // Light blue text
        dark: "#E0E7FF",         // Very light blue headers
        
        // Interactive Elements
        secondary: "#60A5FA",    // Light blue
        tertiary: "#A78BFA",     // Light purple
        
        // Effects
        highlight: "rgba(96, 165, 250, 0.2)",  // Blue glow
        textHighlight: "rgba(167, 139, 250, 0.25)", // Purple glow
      },
    }
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: true }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.ContentPage(), 
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
