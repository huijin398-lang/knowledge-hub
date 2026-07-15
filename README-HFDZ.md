# Knowledge Hub deployment handoff

This local workspace is based on Quartz `v4.5.2` and is ready to become the separate `knowledge-hub` GitHub repository. No remote repository, Cloudflare project, custom domain, deployment, commit, or push has been created from this workspace.

## Obsidian workflow

- Open this directory as the Obsidian vault root.
- Write public notes in `content/<category>/<stable-english-slug>.md`.
- Put attachments in `content/assets/`.
- Start new notes in `content/Inbox/`, then move them into a formal category after review.
- Use `[[wikilinks]]`, tags, callouts and standard Markdown. Each public note needs `title`, `date`, `tags`, and `draft`; project documents use the `project` tag and resources use `type: resource`.

## Cloudflare Pages setup

Create and connect the separate GitHub repository manually, then configure a new Pages project:

| Setting                | Value                                                          |
| ---------------------- | -------------------------------------------------------------- |
| Production branch      | `main` (or the branch chosen when creating the new repository) |
| Framework preset       | None                                                           |
| Build command          | `npm ci && npx quartz build`                                   |
| Build output directory | `public`                                                       |
| Custom domain          | `wiki.hfdz1119.top`                                            |

Enable Cloudflare Web Analytics from that Pages project's dashboard. Quartz does not inject a second analytics provider. If Git timestamps are later relied on, use `git fetch --unshallow && npm ci && npx quartz build` as the build command.

## Release checks

Run `npm ci`, then `npx quartz build`. Verify the homepage, search, tags, backlinks, graph, Mermaid, LaTeX, code blocks, RSS at `/index.xml`, mobile explorer, absolute cross-domain navigation, and every row in `docs/migration/docsify-to-quartz.md`. Keep the old Docsify directories until these checks pass in the Pages preview and production environments.

## Language

The current Quartz v4 interface uses Chinese (`zh-CN`). English terms in global navigation remain deliberate. Quartz v4's built-in locale is build-time configuration; a runtime Chinese/English toggle needs a dedicated custom component and translated UI dictionary, so it is not enabled as a misleading nonfunctional control in this version.
