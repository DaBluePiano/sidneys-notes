---
draft: true
tags:
date:
title: Daily Temp
---
<%*

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const day = days[new Date().getDay()];

const templateLink = `[[Templates/Daily Template - ${day}]]`;

tR += await tp.file.include(templateLink);

%>
