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
    baseUrl: "quartz.jzhao.xyz",
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
          light: "#d0e4ff", // Soft, cool blue for page background
          lightgray: "#c2d4f9", // Light bluish-gray for borders
          gray: "#8aa3d3", // Subtle blue-gray for graph links and heavier borders
          darkgray: "#4e5c7a", // Muted blue with a hint of purple for body text
          dark: "#2e4063", // Deep blue with purple undertones for header text and icons
          secondary: "#5e7ef2", // Vibrant blue with a more pronounced purple for link colors and current graph node
          tertiary: "#7367f7", // Bluish-purple for hover states and visited graph nodes
          highlight: "rgba(94, 132, 242, 0.25)", // Soft blue for internal link background and highlights
          textHighlight: "#b4c9f7", // Very light blue with a hint of purple for markdown highlighted text background
        },
        darkMode: {
          light: "#101831", // Deep blue-black for page background
          lightgray: "#1b2d49", // Muted dark blue for borders
          gray: "#2b3f65", // Cool blue-gray for graph links and heavier borders
          darkgray: "#4f6788", // Subtle blue with a hint of purple for body text
          dark: "#758cd9", // Softer light blue with purple undertones for header text and icons
          secondary: "#5e7ef2", // Vibrant blue with purple undertones for link colors and current graph node
          tertiary: "#7367f7", // Cool bluish-purple for hover states and visited graph nodes
          highlight: "rgba(94, 132, 242, 0.25)", // Light blue for internal link background and highlights
          textHighlight: "#314a70", // Deep blue with purple undertones for markdown highlighted text background
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
