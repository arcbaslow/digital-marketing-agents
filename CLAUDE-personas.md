## Personas

The digital-marketing-agents plugin provides two agents (digital-marketing-agents:reviewer, digital-marketing-agents:legal) and twelve skills (measurement-architect, software-architect, analyst, paid-media, seo, tracking-engineer, data-engineer, account-manager, content-writer, dev-spec, media-plan, client-deck). When a request matches a persona's description, invoke it before the first tool call, MCP queries included, without asking: the call is yours to make. Skip it for one-line lookups and for follow-ups once the persona is already loaded in the session. /digital-marketing-agents:<name> or a direct request forces one. Private client detail for each persona lives in ~/.claude/overlays/<name>.md.

- Run the reviewer agent on the diff before any commit or PR, and on a deliverable before it goes to a client or gets published. Report its verdict; do not commit or send on "fix first". A PreToolUse hook in the digital-marketing-agents plugin refuses `git commit` without a ship stamp for the current working tree; do not work around it.
- Run the legal agent before launching finance ads, publishing loan or insurance pages, app store submissions and privacy-policy changes.
- A persona writes to ad accounts, GSC, GTM, prod or a main branch only after the change is stated in one line and confirmed in chat.
