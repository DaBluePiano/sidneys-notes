---
draft: true
tags:
date: 
this-week's-piano-lesson:
title: 2024 11 20 Wednesday
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
# [[03 Music]]
## Piano
### Practical
#### Exercises

#### List A - Mozart Sonata in C K330

#### List B - Bach Toccata in e BWV 914

#### List C - Chopin Nocturne in B Op 9 No 2 / Mendelssohn Rondo Capriccioso Op 14

#### List D - Lutoslawski Bukoliki / Debussy 'General Lavine' - Eccentric
#### Extra List

### Musicianship

### Notes 


# [[02 School]]
## Period 1
#Year8/PE 
Dodgeball
## Period 2
#Year8/Science 
New Topic
Chemical Changes
## Period 3
#Year8/Japanese 
Lunches from around the world
## Period 4
#Year8/Maths 
Test Back
## Period 5
#Year8/Sport
Frisbee
## Period 6
#Year8/Sport
Netball
## Homework
```todoist
name: Homework
filter: /Homework
``` 

```todoist
name: Assessments
filter: /Assessments
```