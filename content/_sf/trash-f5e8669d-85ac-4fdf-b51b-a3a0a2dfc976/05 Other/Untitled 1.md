---
draft: true
tags:
title: Untitled 1
---

```dataview
TABLE name, tags, date
FROM #Maths
SORT file.ctime DESC
GROUP BY dateformat(file.ctime, "yyyy-MM")
```

> [!NOTE] Title
> Contents
