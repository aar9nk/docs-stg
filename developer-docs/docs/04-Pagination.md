---
title: Pagination
slug: pagination
excerpt: This guide describes how list resources are paginated.
hidden: false
order: 4
# Documentation category
category: 655aa0b276d9f8052c092ccf 
---

List resources in the API are paginated to allow clients to traverse data over multiple requests. Dovetail's API uses cursor-based pagination for efficient navigation through large datasets. By default, list resources return 100 items per API call which is also the maximum limit that can be requested.

## Parameters for paginated requests

Include pagination parameters in the query string of the `GET` request.


## Pagination response object

If an endpoint supports pagination, the response object structure will look like the following.

```JSON JSON
{
  "data": [...],
  "page": {
    "total_count": 200,
    "has_more": true,
    "next_cursor": "WyJjcmVhdGVkX2F0X2Rlc2MiLFsiMjAyMy0xMi0yMlQwNDoxNzoxOS44ODIyMjMrMDA6MDAiLCIwOGU5M2Y3ZS1jNDFiLTRkMTctOWY4ZC04ZWFkOTZjZTg1NDQiXV0"
  }
}
```

[block:parameters]
{
  "data": {
    "h-0": "Field",
    "h-1": "Type",
    "h-2": "Description",
    "0-0": "page[total_count]",
    "0-1": "number",
    "0-2": "The total number of items contained in all pages. This number **may vary** as the client requests subsequent pages, owing to the possibility of new records being added or removed.",
    "1-0": "page[has_more]",
    "1-1": "boolean",
    "1-2": "Indicates whether the page returned is the last one.",
    "2-0": "page[next_cursor]",
    "2-1": "string",
    "2-2": "An opaque string usable for fetching the subsequent page of results by utilizing its value as the page[start_cursor] parameter in the same endpoint.  \nThis value is `null` when there is no more result to fetch."
  },
  "cols": 3,
  "rows": 3,
  "align": [
    "left",
    "left",
    "left"
  ]
}
[/block]

### How to send a paginated request

1. Send a request to a resource list endpoint.
2. Retrieve the `page[next_cursor]` value from the response (only available if there is more than one page of results).
3. Send a subsequent request to the endpoint adding the value from `page[next_cursor]` to the `page[start_cursor]` param in the query string.

```curl
curl -G --location --request GET \
  --data-urlencode "page[start_cursor]=WyJjcmVhdGVkX2F0X2Rlc2MiLFsiMjAyMy0xMi0yMlQwNDoxNzoxOS44ODIyMjMrMDA6MDAiLCIwOGU5M2Y3ZS1jNDFiLTRkMTctOWY4ZC04ZWFkOTZjZTg1NDQiXV0" \
  'https://dovetail.com/api/v1/projects' \
  --header 'Authorization: Bearer <DOVETAIL_API_TOKEN>' \
  --header 'Content-Type: application/json'
```
