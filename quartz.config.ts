import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Sidney's Obsidian Notes :)",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: 'google', tagId: 'G-G16ZWP0FLH'
    },
    locale: "en-US",
    baseUrl: "https://dabluepiano.github.io/sidneys-notes/",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: false,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "DM Sans",
        body: "lexend",
        code: "jetbrains-mono",
      },
      colors: {
      lightMode: {
        light: "#fbf1c7", // Warm cream background
        lightgray: "#ebdbb2", // Soft light brownish-gray for borders
        gray: "#d5c4a1", // Muted beige-gray for graph links and borders
        darkgray: "#7c6f47", // Warm olive-brown for body text
        dark: "#3c3822", // Deep brown for header text and icons
        secondary: "#458588", // Soft teal for link colors and current graph node
        tertiary: "#b8bb26", // Olive-greenish-yellow for hover states and visited graph nodes
        highlight: "rgba(72, 150, 120, 0.25)", // Soft green for internal link background and highlights
        textHighlight: "#bdae93", // Pale beige with a hint of yellow for markdown highlighted text background
      },
      darkMode: {
        // Base Layer
        light: "#110E21",         // Deep space purple (softer than pure black)
        lightgray: "#2D2735",     // Muted lavender-gray borders
        gray: "#4A3E5C",         // Medium cosmic purple accents
        
        // Text & Headers
        darkgray: "#E8D7F4",     // Soft pearl pink (body text)
        dark: "#94B3FF",        // Bright azure headers/icons (improved contrast)
        
        // Interactive Elements
        secondary: "#6B8CFF",   // Vivid cobalt (links/buttons)
        tertiary: "#FF9FEF",    // Neon pink (hover states)
        
        // Effects
        highlight: "rgba(107, 140, 255, 0.2)",  // Enhanced blue overlay
        textHighlight: "#2D2735", // Subtle purple-gray text bg
      },
    },
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
