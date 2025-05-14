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
        // Base Layer
        light: "#F8F5FE",         // Soft lavender white background
        lightgray: "#E3DEF7",     // Light lavender borders
        gray: "#B8B0D9",         // Muted lilac accents
        
        // Text & Headers
        darkgray: "#2E284A",     // Deep navy purple text
        dark: "#5E4E8F",        // Royal purple headers/icons
        
        // Interactive Elements
        secondary: "#6B8CFF",   // Consistent cobalt blue (links/buttons)
        tertiary: "#D84FA8",    // Soft raspberry pink hover states
        
        // Effects
        highlight: "rgba(107, 140, 255, 0.15)",  // Subtle blue overlay
        textHighlight: "#FF9FEF", // Pale lavender highlight background
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
        textHighlight: "#5D2A8C", // Subtle purple-gray text bg
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
