import {
  Card,
  Container,
  Grid,
  Heading,
  Layout,
  Link,
  Page,
  PageHeader,
  Section,
  Stack,
  Text,
} from '@earendil-works/elanor-react';

import {githubUrl, groups, type Project} from '../projects.ts';

function ProjectCard({project}: {readonly project: Project}) {
  return (
    <Card className="project-card">
      <Stack gap="small">
        <Heading level={3} size={5}>
          {project.name}
        </Heading>
        <Text className="project-description">{project.description}</Text>
        <Stack direction="row" gap="medium" wrap="wrap">
          <Link href={githubUrl(project.repo)}>GitHub</Link>
          {project.docs ? <Link href={project.docs}>Documentation</Link> : null}
        </Stack>
      </Stack>
    </Card>
  );
}

export function ProjectList() {
  return (
    <Layout.Root>
      <Layout.Main>
        <Container>
          <Page>
            <PageHeader.Root>
              <PageHeader.Row>
                <PageHeader.Title level={1}>Earendil open source</PageHeader.Title>
              </PageHeader.Row>
              <PageHeader.Description>
                Open source projects by <Link href="https://earendil.com/">Earendil</Link>. All of
                them live on <Link href="https://github.com/earendil-works">GitHub</Link>.
              </PageHeader.Description>
            </PageHeader.Root>

            {groups.map((group) => (
              <Section.Root key={group.id} aria-labelledby={`${group.id}-heading`}>
                <Section.Content>
                  <Stack gap="medium" align="stretch">
                    <Heading level={2} size={4} id={`${group.id}-heading`}>
                      {group.title}
                    </Heading>
                    <Grid.Root gap="medium">
                      {group.projects.map((project) => (
                        <Grid.Item key={project.repo} span={{base: 'full', small: 6}}>
                          <ProjectCard project={project} />
                        </Grid.Item>
                      ))}
                    </Grid.Root>
                  </Stack>
                </Section.Content>
              </Section.Root>
            ))}
          </Page>
        </Container>
      </Layout.Main>
      <Layout.Footer>
        <Container>
          <Text className="footer">
            <Link href="https://earendil.com/">earendil.com</Link> ·{' '}
            <Link href="https://github.com/earendil-works">github.com/earendil-works</Link>
          </Text>
        </Container>
      </Layout.Footer>
    </Layout.Root>
  );
}
