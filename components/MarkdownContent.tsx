'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface MarkdownContentProps {
  content: string;
}

export default function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="prose prose-lg max-w-none
                    prose-headings:font-serif prose-headings:font-normal prose-headings:text-[#3d2e22]
                    prose-p:text-[#3d2e22] prose-p:leading-[1.9] prose-p:mb-6 prose-p:text-lg
                    prose-strong:text-[#3d2e22] prose-strong:font-semibold
                    prose-em:text-[#5c4a3a] prose-em:italic
                    prose-blockquote:border-l-[#b8a99a] prose-blockquote:bg-[#faf8f5] 
                    prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg
                    prose-blockquote:not-italic prose-blockquote:text-[#5c4a3a]
                    prose-li:text-[#3d2e22] prose-li:my-1
                    prose-ul:list-disc prose-ul:pl-6 prose-ul:my-4
                    prose-ol:list-decimal prose-ol:pl-6 prose-ol:my-4
                    prose-a:text-[#8b7355] prose-a:underline prose-a:underline-offset-2
                    prose-a:hover:text-[#5c4a3a]
                    prose-hr:border-[#ebe6df] prose-hr:my-8">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          ul: ({ children }) => (
            <ul className="list-disc pl-6 my-4 space-y-2 marker:text-[#b8a99a]">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal pl-6 my-4 space-y-2 marker:text-[#b8a99a]">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-[#3d2e22] text-lg leading-relaxed pl-2">
              {children}
            </li>
          ),
          p: ({ children }) => (
            <p className="text-[#3d2e22] text-lg leading-[1.9] mb-6">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-semibold text-[#3d2e22]">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="italic text-[#5c4a3a]">
              {children}
            </em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
