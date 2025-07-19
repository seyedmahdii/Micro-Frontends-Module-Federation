# Micro-Frontends with Module Federation

<img width="1280" height="720" alt="Youtube Thumbnail (13)" src="https://github.com/user-attachments/assets/3d1bfb79-b4cb-4fcc-8fa1-0d87f644d7c6" />

توی این ویدیو، پروژه‌ای که توی فصل ۵ کتاب Building Micro-Frontends گفته شده رو بررسی می‌کنیم و می‌بینیم که چطور میکرو‌فرانت‌اندهای مختلف توی app shell با Module Federation لود و نمایش داده میشن.

🎬 **ویدئوی یوتوب**  
[https://www.youtube.com/watch?v=Pe69hfq1IPA&list=PL1bBcWODwsLMYe8Gor4PDwT5U5CK_S36x&index=1](https://www.youtube.com/watch?v=HdpFvw_B5R0&list=PL1bBcWODwsLMYe8Gor4PDwT5U5CK_S36x&index=5&pp=gAQBiAQB)

## Micro-Frontends definition

Micro-Frontends are the **technical representation of a business subdomain**, they allow **independent implementations** with the **same or different technology**.

Finally, they should **minimize the code shared** with other subdomains and they are **own by a single team**

### Module Federation

[Module federation](https://webpack.js.org/concepts/module-federation/) is a webpack plugin. It allows a JavaScript application to dynamically run code from another bundle/build, on both client and server.

![Module Federation](modFedExample.png)

### UI example
In this example we are going to create:     

- an application shell for hosting all the micro-frontends
- a sign in micro-frontend
- a catalogue micro-frontend with multiple views
- a my account micro-frontend that is loading 2 micro-frontends: account details and payments details

![Module Federation](modFedDiagram.png)
