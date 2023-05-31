// import { useParams } from 'react-router-dom'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { PostInfos } from './components/PostInfos'
import { PostContainer, PostContent } from './styles'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism'

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
  const markdownContent = `
  # Exemplo de Markdown
  
  Este é um parágrafo normal.
  
  ## Código em JavaScript
  
  Aqui está um trecho de código em JavaScript:
  
  \`\`\`javascript
  function soma(a, b) {
    return a + b;
  }
  
  console.log(soma(2, 3)); // Output: 5
  \`\`\`
  
  ## Outro parágrafo
  
  Este é outro parágrafo com um link [OpenAI](https://openai.com/).
  `

  const components: any = {
    code: Code,
  }

  return (
    <PostContainer>
      <PostInfos />
      <PostContent>
        <ReactMarkdown components={components}>{markdownContent}</ReactMarkdown>
      </PostContent>
    </PostContainer>
  )
}
