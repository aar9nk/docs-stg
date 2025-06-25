---
title: Sort
slug: sort
excerpt: This guide describes how list resources can be sorted.
hidden: false
order: 6
# Documentation category
category: 655aa0b276d9f8052c092ccf 
---

List resources in the API can be sorted.

By default, all list resources are sorted by `created_at:desc`.

Our sort parameter accepts a single string value, or an array of strings:

```http
GET https://dovetail.com/api/v1/projects?sort=created_at:asc

GET https://dovetail.com/api/v1/projects?sort=created_at:asc&sort=title:asc

GET https://dovetail.com/api/v1/projects?sort[]=created_at:asc&sort[]=title:asc

GET https://dovetail.com/api/v1/projects?sort[0]=created_at:asc&sort[1]=title:asc
```
