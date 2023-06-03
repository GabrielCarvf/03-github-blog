// import { useParams } from 'react-router-dom'
import React, { useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { PostInfos } from './components/PostInfos'
import { PostContainer, PostContent } from './styles'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useParams } from 'react-router-dom'
import { BlogContext } from '../../contexts/blogContext'

interface CodeProps {
  node: React.ReactNode
  inline: boolean
  className: string
  children: React.ReactNode
  [key: string]: any
}

const Code: React.FC<CodeProps> = ({
  node,
  inline,
  className,
  children,
  ...props
}) => {
  const match = /language-(\w+)/.exec(className || '')
  return !inline && match ? (
    <SyntaxHighlighter
      {...props}
      language={match[1]}
      style={dracula}
      PreTag="div"
    >
      {String(children).replace(/\n$/, '')}
    </SyntaxHighlighter>
  ) : (
    <code {...props} className={className}>
      {children}
    </code>
  )
}

export function Post() {
  const { issueNumber } = useParams()
  const { userPosts } = useContext(BlogContext)

  const detailedPost = userPosts.find(
    (item) => item.number === parseInt(issueNumber!),
  )

  const components: any = {
    code: Code,
  }

  return (
    <PostContainer>
      <PostInfos {...detailedPost!} />
      <PostContent>
        <ReactMarkdown components={components}>
          {detailedPost!.body}
        </ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
