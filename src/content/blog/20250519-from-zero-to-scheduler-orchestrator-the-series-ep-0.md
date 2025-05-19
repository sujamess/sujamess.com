---
title: '[Eng] Distributed Scheduler The Series: Episode 0 — From Zero to Orchestrator'
description: 'Join me on this journey to build a distributed scheduler from scratch, exploring how we can solve the limitations of simple cron jobs and create a robust, scalable job orchestration system.'
pubDate: 'May 19 2025'
heroImage: '/distributed-scheduler-the-series/ep0/placeholder.jpg'
tags: Distributed System
---

## Why I Started This Series
Just for learning purposes, just curious how to do that, and if I'm still learning, why don't I just share with others who might not know this as well? (But the truth is, I just wanted to build something in Go 😛)

## It Started with a Cron Job
I've built many hobby projects—one of those, I think many of you might have done this before, the web scraper or fetcher or whatever you want to call it. I just wanted to do a simple task: fetch a URL every day at 3 A.M.

You might say:
- Use a cloud solution! — Then the pricing is main concern if we run millions of jobs on the cloud.
- That's easy — just run a cron with `0 3 * * *`, done! — Yes, the easiest way to solve that is to run the cron. It works like a charm, smooth as silk.

But what if you need other jobs that run at different times?

Easy! Just add more crons!

Then, at some point, things start going wrong:
- Emails aren't sent to customers.
- Partner data stops syncing.
- Reports aren't generated.
- **Worst of all — I didn't even notice.**

## The Limitations of Cron Jobs
As the system grows, we notice crons have limitations:
- No monitoring.
- No retry if failed.
- No logs — unless you add them manually.
- No visibility.
- Hard to keep track of many jobs.
- Painful to maintain at scale.

## Why Go Distributed?
So I thought—can I just build a better scheduler?

But once your system scales, you might got:
- One machine isn’t enough
- You need fault tolerance — if one server goes down, jobs still need to run
- Different jobs require different resources — CPU-heavy vs memory-heavy
- Some jobs need to run closer to the data (geographic requirements)

A single-server scheduler works… until suddenly, it doesn’t.
Then you're back to having a single point of failure.

## What's Next?
I didn’t plan to build a distributed system.
But here we are.

In the next episode, we’ll walk through what happens when you try to scale across multiple nodes — and why simple fixes like DB locks fall apart in real-world conditions.

This is the beginning of going from “just a cron job” to building a real orchestrator.

Let’s go and figure out how many episodes we’ll need to build this thing 😂
