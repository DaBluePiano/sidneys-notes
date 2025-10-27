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
        light: "#F9F7FE",         // Soft lavender white background
        lightgray: "#EAE7F8",     // Very subtle lavender borders
        gray: "#C5BFE6",         // Gentle lilac for accents
        
        // Text & Headers
        darkgray: "#3A2E5C",     // Rich plum for body text
        dark: "#6B4EBA",         // Vibrant amethyst for headers
        
        // Interactive Elements
        secondary: "#5D7FDC",    // Softer sapphire blue
        tertiary: "#D44D9A",     // Muted raspberry pink
        
        // Effects
        highlight: "rgba(157, 178, 255, 0.2)",  // Soft periwinkle glow
        textHighlight: "rgba(244, 187, 255, 0.35)", // Gentle lavender highlight
      },
      darkMode: {
        // Base Layer
        light: "#16122B",         // Deep twilight purple
        lightgray: "#2A2545",     // Muted plum borders
        gray: "#4A4266",         // Soft cosmic purple accents
        
        // Text & Headers
        darkgray: "#E6DFF8",     // Pale lavender text
        dark: "#9E8AFF",         // Bright periwinkle headers
        
        // Interactive Elements
        secondary: "#6B8CFF",    // Electric blue
        tertiary: "#FF7BC7",     // Vibrant pink
        
        // Effects
        highlight: "rgba(107, 140, 255, 0.25)",  // Enhanced blue glow
        textHighlight: "rgba(90, 42, 140, 0.4)", // Deep purple text background
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
