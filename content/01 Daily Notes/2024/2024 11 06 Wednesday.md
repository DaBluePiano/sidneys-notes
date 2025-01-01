---
draft: false
tags:
date: 2024-11-06
title: 2024 11 06 Wednesday
---

```dataviewjs
/*
    previous/next note by date for Daily Notes
    Also works for other files having a `date:` YAML entry.
    MCH 2021-06-14
*/
var none = '(none)';
var p = dv.pages('"' + dv.current().file.folder + '"').where(p => p.file.day).map(p => [p.file.name, p.file.day.toISODate()]).sort(p => p[1]);
var t = dv.current().file.day ? dv.current().file.day.toISODate() : luxon.DateTime.now().toISODate();
// Obsidian uses moment.js; Luxon’s format strings differ!
var format = app['internalPlugins']['plugins']['daily-notes']['instance']['options']['format'] || 'YYYY-MM-DD';
var current = '(' + moment(t).format(format) + ')';
var nav = [];
var today = p.find(p => p[1] == t);
var next = p.find(p => p[1] > t);
var prev = undefined;
p.forEach(function (p, i) {
    if (p[1] < t) {
        prev = p;
    }
});
nav.push(prev ? '[[' + prev[0] + ']]' : none);
//nav.push(today ? today[0] : none);
nav.push(today ? today[0] : current);
nav.push(next ? '[[' + next[0] + ']]' : none);

//dv.list(nav);
//dv.paragraph(nav.join(" · "));
dv.paragraph(nav[0] + ' ← ' + nav[1] + ' → ' + nav[2]);
```


# Piano
## Practical
### Excercises
Hanon 3
### List A
Fuga Working with left hand
### List B

### List C
Agitato poly
### List D

### Extra List

## Musicianship

## Notes 


# School
## Period 1
#Year8/PE
## Period 2
#Year8/Science
Science Results
Digestive System Model
Teeth Worksheet
## Period 3
#Year8/Japanese
[[Japanese Sporting Hero Assessment]]
## Period 4
#Year8/Maths
Volume and Capacity WS Revision
Mathspace
## Period 5
#Year8/Sport Frisbee
## Period 6
#Year8/Sport Netball
## Homework
Finish off mathspace task 