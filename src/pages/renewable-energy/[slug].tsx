import {
  ProjectHero,
  ProjectDetails,
  ProjectImageGallery,
} from '@/components/SingleProjectElements'
import { ProjectAwards } from '@/components/SingleProjectElements/ProjectAwards'
import { ProjectMedia } from '@/components/SingleProjectElements/ProjectMedia'
import { getProjectBySlug, getProjectSlugsByType, Project } from '@/lib/payload'
import { SerializedRichText } from '@/lib/serializeRichText'
import { GetStaticPaths, GetStaticProps } from 'next'
import { NextSeo } from 'next-seo'
import React from 'react'

interface Props {
  project: Project
}

export default function RenewableEnergyProject({ project }: Props) {
  const photos =
    project.gallery?.map((g) => ({
      src: g.image.url,
      width: g.image.width || 400,
      height: g.image.height || 300,
      title: g.title || '',
      description: g.description || '',
    })) || []

  return (
    <>
      <NextSeo
        title={project.meta?.title || project.title}
        description={project.meta?.description || ''}
      />
      <ProjectHero
        heroImage={project.heroImage.url}
        alt={`${project.title} hero image`}
      />
      <ProjectDetails
        title={project.title}
        location={project.location || ''}
        tagline={project.tagline || ''}
        completedDate={project.completedDate}
        size={project.size}
        projectType={project.projectType}
        logo={project.logo?.url}
        showSidePanel={project.showSidePanel}
      >
        <SerializedRichText content={project.description} />
      </ProjectDetails>
      {project.awards?.length ? <ProjectAwards awards={project.awards} /> : null}
      {project.media?.length ? <ProjectMedia media={project.media} /> : null}
      {photos.length ? <ProjectImageGallery photos={photos} /> : null}
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = await getProjectSlugsByType('renewable-energy')
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const project = await getProjectBySlug(params?.slug as string)
  if (!project) return { notFound: true }
  return { props: { project }, revalidate: 60 }
}
