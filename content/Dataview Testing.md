---
draft: false
title: Dataview Testing
tags:
creation_date: Monday, February 3rd 2025, 12:59:31 pm
last_edit_date: Sunday, February 23rd 2025, 8:11:00 pm
---

Notes created in the past week

```dataview
TABLE file.ctime AS "Created"
WHERE file.ctime >= date(today) - dur(1 week)
```

Dataview for Unlinked Notes

```dataview
list from [[]] and !outgoing([[]])
```
