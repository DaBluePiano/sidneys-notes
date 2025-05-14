---
draft: true
tags:
date:
title: Daily Temp
creation_date: Monday, February 3rd 2025, 12:59:31 pm
last_edit_date: Sunday, February 23rd 2025, 7:24:35 pm
---

<%*

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = days[new Date().getDay()];

const templateLink = `[[Templates/Daily Template - ${day}]]`;

tR += await tp.file.include(templateLink);

%>
