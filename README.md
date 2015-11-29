# Minimalist

A minimalistic theme for [Hexo].

## Installation

### Install

**Minimalist requires Hexo 2.4 and above.**

### Enable

Modify `theme` setting in `_config.yml` to `minimalist`.

## Configuration

``` yml
# Header
menu:
  Home: /
  Archives: /archives
  About: /about-me
rss: /atom.xml

# Content
excerpt_link: Read More
fancybox: true

# Sidebar
sidebar: right
widgets:
- category
- recent_posts

# Miscellaneous
google_analytics:
favicon: /favicon.png
twitter:
google_plus:
```
- **menu** - Navigation menu
- **rss** - RSS link
- **excerpt_link** - "Read More" link at the bottom of excerpted articles.
- **fancybox** - Enable [Fancybox]
- **sidebar** - Sidebar
- **widgets** - Widgets displaying in sidebar
- **google_analytics** - Google Analytics ID
- **favicon** - Favicon path
- **twitter** - Twiiter ID
- **google_plus** - Google+ ID

### Sidebar

You can put your sidebar in left side, right side or bottom of your site by editing `sidebar` setting.

Landscape provides 2 built-in widgets:

- category
- recent_posts

All of them are enabled by default. You can edit them in `widget` setting.

### Requirements

- Hexo 2.4+

[Hexo]: http://zespia.tw/hexo/
[Fancybox]: http://fancyapps.com/fancybox/
[Font Awesome]: http://fontawesome.io/