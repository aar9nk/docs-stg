---
title: Authorization
slug: authorization
excerpt: This guide describes the authorization flows for Dovetail’s Public API.
hidden: false
order: 2
# Documentation category
category: 655aa0b276d9f8052c092ccf
---

## What is authorization?

Authorization is the process of verifying the identity of a user and granting access to their Dovetail data. It also ensures that the entity making the request is who it claims to be. Dovetail uses API tokens to identify a user and control access to the API.

## How to get an API Token?

1. Go to [Dovetail's account settings](https://dovetail.com/settings/user/account).

    ![Image of top right avatar dropdown menu with link to account page setting](https://static-assets.dovetail.com/public-api-docs/avatar_dropdown_settings_account_page.png)

2. Enter a label for the key and create the key.

    **Note:** The UI will only display the key to you once so make sure you copy it to somewhere secure. Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, etc.

    ![Image of the user interface for creating and revoking personal access tokens](https://static-assets.dovetail.com/public-api-docs/ui_creating_and_revoking_api_keys.png)

## API Token Format

Dovetail’s API token consists of an opaque string prefixed with `api.`, e.g. `api.wcFxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`.

## API Token Expiry

The token is only valid for a period of 30 days, a new token needs to be generated at the end of the period.

You can manually revoke a token. This is really useful if you suspect that an API token has been leaked. Once a token has been revoked, it cannot be undone and any applications using this developer key will no longer be granted access to Dovetail data.

## How do I use my API token?

To authenticate your requests, pass the newly created key with header:

`Authorization: Bearer <DOVETAIL_API_TOKEN>`.  

See example below using the projects endpoint:

```bash
curl 'https://dovetail.com/api/v1/projects' \
  -H 'Authorization: Bearer <DOVETAIL_API_TOKEN>'
```
