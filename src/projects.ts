export interface Project {
  /** Display name. */
  readonly name: string;
  /** Repository name under github.com/earendil-works. */
  readonly repo: string;
  readonly description: string;
  /** Documentation or project website, if there is one. */
  readonly docs?: string;
}

export const githubUrl = (repo: string) => `https://github.com/earendil-works/${repo}`;

export const projects: readonly Project[] = [
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
];
