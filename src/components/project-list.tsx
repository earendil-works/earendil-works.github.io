import {
  ButtonLink,
  Container,
  Heading,
  Layout,
  Link,
  Prose,
  Text,
  TopNavigation,
} from '@earendil-works/elanor-react';

import {githubUrl, projects, type Project} from '../projects.ts';

function Emblem() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="120 21 84 153"
      height="28"
      width="15.4"
    >
      <path
        fill="currentColor"
        d="M202.89,123.89c.4,29.74-40.27,26.97-40.8,48.11h-.05c-.52-21.14-41.19-18.38-40.8-48.11,27.99,0,40.09-46.29,40.82-101.27.74,54.98,12.83,101.27,40.82,101.27h0Z"
      />
    </svg>
  );
}

function ProjectItem({project}: {readonly project: Project}) {
  const github = githubUrl(project.repo);
  return (
    <li className="project">
      <Heading level={2} variant="marketing" size={5}>
        <a className="project-link" href={project.docs ?? github}>
          {project.name}
        </a>
      </Heading>
      <Text className="project-summary">{project.description}</Text>
      <div className="project-meta">
        <Link href={github}>GitHub</Link>
        {project.docs ? <Link href={project.docs}>Documentation</Link> : null}
      </div>
    </li>
  );
}

export function ProjectList() {
  return (
    <Layout.Root>
      <Layout.Header render={<TopNavigation.Root className="header" />}>
        <Container className="header-content">
          <TopNavigation.Identity>
            <a href="/" className="identity" aria-label="Earendil open source home">
              <Emblem />
              <span className="wordmark">Earendil</span>
            </a>
          </TopNavigation.Identity>
          <TopNavigation.Actions className="header-actions">
            <ButtonLink href="https://github.com/earendil-works" hierarchy="primary">
              GitHub
            </ButtonLink>
          </TopNavigation.Actions>
        </Container>
      </Layout.Header>
      <Layout.Main id="main-content">
        <Container className="page">
          <div className="intro">
            <Heading level={1} variant="marketing" size={2}>
              Earendil open source.
            </Heading>
            <Prose>
              <Text>
                <span className="lead-in">Built in the open</span> by Earendil Works, the
                builders of Pi. These are the projects we make and maintain in public, from the
                agent harness itself to the sandboxes, workflows and design system around it.
              </Text>
              <Text>
                Everything lives on GitHub under{' '}
                <Link href="https://github.com/earendil-works">earendil-works</Link>.
              </Text>
            </Prose>
          </div>
          <ul aria-label="Projects" className="projects">
            {projects.map((project) => (
              <ProjectItem key={project.repo} project={project} />
            ))}
          </ul>
        </Container>
      </Layout.Main>
      <Layout.Footer className="footer">
        <Container className="footer-content">
          <div className="footer-links">
            <Link href="https://earendil.com/">Earendil Inc.</Link>
            <Link href="https://pi.dev/">Pi</Link>
            <Link href="https://radius.earendil.com/">Radius</Link>
            <Link href="https://github.com/earendil-works">GitHub</Link>
          </div>
        </Container>
      </Layout.Footer>
    </Layout.Root>
  );
}
