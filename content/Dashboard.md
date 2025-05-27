---
draft: true
tags: 
cssclasses:
  - dashboard
title: Dashboard
creation_date: Monday, February 3rd 2025, 12:59:29 pm
last_edit_date: Tuesday, May 27th 2025, 5:10:59 pm
---

 ``

![[Recording 20250506181559.webm]]

`contributionGraph

title: Edits

graphType: default

dateRangeValue: 180

dateRangeType: LATEST_DAYS

startOfWeek: 0

showCellRuleIndicators: true

titleStyle:

  textAlign: left

  fontSize: 15px

  fontWeight: normal

dataSource:

  type: PAGE

  value: ""

  dateField:

    type: FILE_MTIME

    value: last_edit_date

fillTheScreen: false

enableMainContainerShadow: false

cellStyleRules: []

```

```widgets
type: clock
```

```dataview
TABLE WITHOUT ID
  link(file.path, truncate(file.name, 28)) as Note,
  dateformat(share_updated, "yyyy-MM-dd") as "Shared on", 
  elink(share_link, regexreplace(share_link, "^.*?(\w+)(#.+?|)$", "$1")) as Link,
  choice(regextest("#", share_link), "🔒", "") as ""
WHERE share_link
```
```todoist
filter: all
groupBy: section
```
