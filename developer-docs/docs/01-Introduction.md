---
title: Introduction
slug: introduction
excerpt: Learn how to build your own integrations with Dovetail.
hidden: false
order: 1
# Documentation category
category: 655aa0b276d9f8052c092ccf 
---

## Getting Started with the API

Our API allows you to integrate your applications and scripts with Dovetail, enabling you to automate tasks, extract insights, and manage your data in a more efficient and customized manner. This guide will provide you with an overview, its capabilities, and how you can use it to enhance your user research and insights operations.

## What is an Integration?

An integration is a process that allows different software systems to communicate and work together. It involves connecting the functionalities of two or more systems to streamline and automate tasks, improve data consistency, and enhance overall operational efficiency.

With our API, you can create integrations between Dovetail and your existing software systems. This allows you to leverage Dovetail's powerful user research and insights capabilities within your own applications, providing a seamless and efficient workflow.

## Using the API

To use the API, you will need to make HTTP requests to the API's endpoints. These endpoints correspond to specific functionalities within Dovetail, such as fetching a list of projects, creating a new note, or viewing user insights.

Here's a basic example of how you might use the API:

```http
GET https://dovetail.com/api/v1/projects
```

This request would retrieve a list of all your projects in Dovetail.

Before you can make requests to the API, you will need to authenticate your application. Dovetail uses API Tokens for authentication, and you can obtain an access token by following the instructions in our [Authorization](/docs/authorization) guide.

Once you have an access token, you can include it in the header of your HTTP requests like so:

```http
GET https://dovetail.com/api/v1/projects
Authorization: Bearer <DOVETAIL_API_TOKEN>
```

For more detailed information on how to use the API, including a full list of available endpoints and their corresponding functionalities, please refer to our [API Reference](/reference).
