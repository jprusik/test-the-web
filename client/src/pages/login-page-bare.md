---
slug: login-page-bare
title: Login
description: basic login form used for easy embedding via iframe
---

<div class="card padding--md">
  <form
    class="card__body"
    method="POST"
    action="/login"
  >
    <div class="row margin-bottom--md">
      <label for="username" class="margin-right--sm">Username</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="e.g. jsmith, jsmith@example.com"
      />
    </div>
    <div class="row margin-bottom--md">
      <label for="password" class="margin-right--sm">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        required
      />
    </div>
    <div class="row">
      <button type="submit" class="button button--primary">Login</button>
    </div>
  </form>
</div>
