export interface Project {
  /** Display name. */
  readonly name: string;
  /** Repository name under github.com/earendil-works. */
  readonly repo: string;
  readonly description: string;
  /** Documentation or project website, if there is one. */
  readonly docs?: string;
}

export interface ProjectGroup {
  readonly id: string;
  readonly title: string;
  readonly projects: readonly Project[];
}

export const githubUrl = (repo: string) => `https://github.com/earendil-works/${repo}`;

export const groups: readonly ProjectGroup[] = [
  {
    id: 'projects',
    title: 'Projects',
    projects: [
      {
        name: 'Pi',
        repo: 'pi',
        description:
          'A minimal, extensible agent harness: unified LLM API, agent loop, TUI and coding agent CLI.',
        docs: 'https://pi.dev/docs/latest',
      },
      {
        name: 'Absurd',
        repo: 'absurd',
        description: 'The simplest durable execution workflow system, built on nothing but Postgres.',
        docs: 'https://earendil-works.github.io/absurd/',
      },
      {
        name: 'Gondolin',
        repo: 'gondolin',
        description:
          'Fast local Linux micro-VMs with a TypeScript control plane, for sandboxing agents.',
        docs: 'https://earendil-works.github.io/gondolin/',
      },
      {
        name: 'djs',
        repo: 'djs',
        description:
          'A small JavaScript and TypeScript engine in no_std Rust, built for wasm32 and pi’s codemode.',
        docs: 'https://earendil-works.github.io/djs/',
      },
      {
        name: 'dquickts',
        repo: 'dquickts',
        description:
          'QuickJS with durable execution: suspend running JS, snapshot the heap, resume it elsewhere.',
      },
      {
        name: 'Elanor',
        repo: 'elanor',
        description: 'Earendil’s design system: React components, design tokens, fonts and icons.',
        docs: 'https://elanor.earendil.com/',
      },
      {
        name: 'Inkling',
        repo: 'inkling',
        description: 'A collaborative Markdown editor for RFCs and notes.',
      },
      {
        name: 'Ray',
        repo: 'ray',
        description: 'Format code snippets for socials, in the Earendil aesthetic.',
        docs: 'https://earendil-works.github.io/ray/',
      },
      {
        name: 'Explainer',
        repo: 'explainer',
        description:
          'A pi skill that turns Markdown into book-style explainers and in-browser agent walkthroughs.',
      },
    ],
  },
  {
    id: 'pi-extensions',
    title: 'Pi extensions and examples',
    projects: [
      {
        name: 'pi-review',
        repo: 'pi-review',
        description: 'The code review extension we use at Earendil.',
      },
      {
        name: 'pi-review-loop',
        repo: 'pi-review-loop',
        description: 'A persistent, incremental diff review loop.',
      },
      {
        name: 'pi-chat',
        repo: 'pi-chat',
        description:
          'Bridges Discord and Telegram channels to sandboxed pi sessions running in Gondolin.',
      },
      {
        name: 'pi-voice',
        repo: 'pi-voice',
        description: 'Local speech-to-text for pi.',
      },
      {
        name: 'pi-claude-code',
        repo: 'pi-claude-code',
        description: 'Use a Claude Pro or Max subscription in pi through the Claude Code CLI.',
      },
      {
        name: 'pi-demo',
        repo: 'pi-demo',
        description:
          'Record product demos from inside pi, with webcam bubble and click-driven auto-zoom.',
      },
      {
        name: 'pi-tutorial',
        repo: 'pi-tutorial',
        description: 'An experimental interactive tutorial mode for pi.',
      },
      {
        name: 'pi-durable-cloudflare',
        repo: 'pi-durable-cloudflare',
        description: 'Example of a durable pi harness running in a Cloudflare Durable Object.',
      },
    ],
  },
];
