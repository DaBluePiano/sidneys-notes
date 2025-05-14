---
draft: false
title: Shared General Knowledge Files
tags: 
creation_date: Monday, February 3rd 2025, 12:59:31 pm
last_edit_date: Sunday, April 20th 2025, 9:02:42 pm
share_link: https://share.note.sx/nh0inbgw#qJaZpuIlFozRbiJbj3lGYlnAxgrcuJz6+RK6YjhywCc
share_updated: 2025-04-20T20:53:03+10:00
---

```dataview
TABLE WITHOUT ID
  link(file.path, truncate(file.name, 28)) as Note,
  dateformat(share_updated, "yyyy-MM-dd HH:MM") as "Shared on", 
  elink(share_link, regexreplace(share_link, "^.*?(\w+)(#.+?|)$", "$1")) as Link,
  choice(regextest("#", share_link), "🔒", "") as ""
WHERE contains(file.path, "General Knowledge/") AND share_link
```
