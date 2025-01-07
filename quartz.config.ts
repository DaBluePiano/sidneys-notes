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
        header: "poppins",
        body: "lexend",
        code: "jetbrains-mono",
      },
      colors: {
        lightMode: {
          light: "#edf5ff", // Soft, cool blue for page background
          lightgray: "#cddff7", // Light bluish-gray for borders
          gray: "#97b3d8", // Subtle blue-gray for graph links and heavier borders
          darkgray: "#5e779f", // Muted blue with a hint of purple for body text
          dark: "#3c4f6e", // Deep blue for header text and icons
          secondary: "#5e84f2", // Vibrant blue with a touch of purple for link colors and current graph node
          tertiary: "#8898f7", // Cool bluish-purple for hover states and visited graph nodes
          highlight: "rgba(94, 132, 242, 0.15)", // Soft blue for internal link background and highlights
          textHighlight: "#d3e3f7", // Very light blue for markdown highlighted text background
        },
        darkMode: {
          light: "#121a2b", // Deep blue-black for page background
          lightgray: "#202e49", // Muted dark blue for borders
          gray: "#314a70", // Cool blue-gray for graph links and heavier borders
          darkgray: "#5e7699", // Subtle blue for body text
          dark: "#94aedb", // Softer light blue for header text and icons
          secondary: "#5e84f2", // Vibrant blue with subtle purple undertones for link colors and current graph node
          tertiary: "#8898f7", // Cool bluish-purple for hover states and visited graph nodes
          highlight: "rgba(94, 132, 242, 0.15)", // Light blue for internal link background and highlights
          textHighlight: "#3a4c70", // Deep blue for markdown highlighted text background
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
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
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
