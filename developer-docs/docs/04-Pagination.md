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
