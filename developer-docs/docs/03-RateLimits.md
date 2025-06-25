---
title: Rate Limits
slug: rate-limits
excerpt: This guide provides details about rate limiting in Dovetail to help you anticipate and manage rate limiting
hidden: false
order: 3
# Documentation category
category: 655aa0b276d9f8052c092ccf 
---

Dovetail limits the rate of REST API requests to ensure that services are reliable and responsive for all API users. Dovetail has a default limit of **200** requests per minute for a workspace. Since limits are per workspace, developers may have to manage requests across multiple tokens.

## Rate limit responses

All responses from the Dovetail API will include three headers to help you manage your rate limits:


When a limit is exceeded  the API will return a response with a  `429` status. The `429` response is supplemented with a  `Retry-After` response header value, which indicates how many seconds the integration must wait before reissuing the request. If you reissue the request before the retry period expires, the request will fail.

## Handling

Integration should treat `429` responses as a signal to alleviate pressure on an endpoint. The best approach to accommodate rate limits is to respect the Retry-After or X-RateLimit-Reset header values and wait for this minimum amount before making another request. Alternatively, rate limits can be accommodated by exponentially increasing the delay after each successive `429` response from an endpoint.

When performing a scheduled task “a daily import”, it is best to apply some jitter to the requests to avoid the [thundering herd problem](https://en.wikipedia.org/wiki/Thundering_herd_problem). Check out the following AWS article about [exponential backoff and jitter](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/).

## Testing

Do not perform rate limit testing against Dovetail's endpoints because this will place load on the servers and may impact customers. The [Acceptable Use Policy](https://dovetail.com/help/acceptable-use-policy/) identifies your obligations to avoid overwhelming Dovetail's infrastructure.
