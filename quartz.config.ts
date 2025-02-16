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
        header: "dmSans",
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
        light: "#282828", // Very dark gray background
        lightgray: "#3c3836", // Dark muted brown for borders
        gray: "#504945", // Soft gray-brown for graph links and borders
        darkgray: "#ebdbb2", // Light cream for body text (contrast for dark mode)
        dark: "#d5c4a1", // Soft beige for header text and icons
        secondary: "#83a598", // Muted teal for link colors and current graph node
        tertiary: "#b8bb26", // Olive-greenish-yellow for hover states and visited graph nodes
        highlight: "rgba(72, 150, 120, 0.25)", // Soft green for internal link background and highlights
        textHighlight: "#3c3836", // Deep dark brown for markdown highlighted text background
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
