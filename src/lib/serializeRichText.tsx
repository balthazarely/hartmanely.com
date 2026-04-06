import React from 'react'

type LexicalNode = {
  type: string
  children?: LexicalNode[]
  text?: string
  format?: number
  tag?: string
  url?: string
  fields?: { url: string; newTab?: boolean }
  listType?: 'bullet' | 'number'
}

function serializeNode(node: LexicalNode, key: number): React.ReactNode {
  switch (node.type) {
    case 'text': {
      let el: React.ReactNode = node.text
      if (node.format && node.format & 1) el = <strong key={key}>{el}</strong>
      if (node.format && node.format & 2) el = <em key={key}>{el}</em>
      if (node.format && node.format & 8) el = <u key={key}>{el}</u>
      return el
    }
    case 'paragraph':
      return (
        <p key={key} className="small mt-2">
          {node.children?.map((child, i) => serializeNode(child, i))}
        </p>
      )
    case 'heading': {
      const Tag = (node.tag || 'h2') as keyof JSX.IntrinsicElements
      return (
        <Tag key={key}>
          {node.children?.map((child, i) => serializeNode(child, i))}
        </Tag>
      )
    }
    case 'list':
      if (node.listType === 'number') {
        return (
          <ol key={key} className="mt-2 list-decimal pl-5">
            {node.children?.map((child, i) => serializeNode(child, i))}
          </ol>
        )
      }
      return (
        <ul key={key} className="mt-2 list-disc pl-5">
          {node.children?.map((child, i) => serializeNode(child, i))}
        </ul>
      )
    case 'listitem':
      return (
        <li key={key} className="small">
          {node.children?.map((child, i) => serializeNode(child, i))}
        </li>
      )
    case 'link': {
      const url = node.fields?.url || node.url || '#'
      const newTab = node.fields?.newTab
      return (
        <a
          key={key}
          href={url}
          className="link-small"
          target={newTab ? '_blank' : undefined}
          rel={newTab ? 'noreferrer' : undefined}
        >
          {node.children?.map((child, i) => serializeNode(child, i))}
        </a>
      )
    }
    default:
      if (node.children) {
        return <>{node.children.map((child, i) => serializeNode(child, i))}</>
      }
      return null
  }
}

export function SerializedRichText({
  content,
}: {
  content: { root: { children: LexicalNode[] } } | null | undefined
}) {
  if (!content?.root?.children) return null
  return <>{content.root.children.map((node, i) => serializeNode(node, i))}</>
}
