import type { MDXComponents } from 'mdx/types'
import { cn } from '@/lib/utils'


// Styled heading components with cool effects
const Heading1 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn('',className)}
    {...props}
  />
)

const Heading2 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={cn('',className)}
    {...props}
  />
)

const Heading3 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn('',className)}  
    {...props}
  />
)

const Heading4 = ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    className={cn('',className)}
    {...props}
  />
)

// Enhanced paragraph component with cool effects
const Paragraph = ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn('',className)}
    {...props}
  />
)

// Enhanced list components with animations
const UnorderedList = ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
  <ul
    className={cn('',className)}
    {...props}
  />
)

const OrderedList = ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
  <ol
    className={cn('',className)}
    {...props}
  />
)

const ListItem = ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
  <li
    className={cn('',className)}
    {...props}
  />
)

// Super cool code components
const InlineCode = ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
  <code
    className={cn('',className)}
    {...props}
  />
)

const CodeBlock = ({ className, ...props }: React.HTMLAttributes<HTMLPreElement>) => (
  <pre
    className={cn('',className)}
    {...props}
  />
)

// Enhanced blockquote with cool styling
const Blockquote = ({ className, ...props }: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote
    className={cn('',className)}
    {...props}
  />
)

// Enhanced link component with cool effects
const Link = ({ className, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a
    className={cn('',className)}
    {...props}
  />
)

// Enhanced table components with modern styling
const Table = ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
  <div className="my-6 w-full overflow-y-auto">
    <table
      className={cn('',className)}
      {...props}
    />
  </div>
)

const TableHeader = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead
    className={cn('',className)}
    {...props}
  />
)

const TableBody = ({ className, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody
    className={cn('',className)}
    {...props}
  />
)

const TableRow = ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr
    className={cn('',className)}
    {...props}
  />
)

const TableHead = ({ className, ...props }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
  <th
    className={cn('',className)}
    {...props}
  />
)

const TableCell = ({ className, ...props }: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
  <td
    className={cn('',className)}
    {...props}
  />
)

// Cool horizontal rule with gradient
const HorizontalRule = ({ className, ...props }: React.HTMLAttributes<HTMLHRElement>) => (
  <hr
    className={cn('',className)}
    {...props}
  />
)

export const components: MDXComponents = {
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  p: Paragraph,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListItem,
  code: InlineCode,
  pre: CodeBlock,
  blockquote: Blockquote,
  a: Link,
  table: Table,
  thead: TableHeader,
  tbody: TableBody,
  tr: TableRow,
  th: TableHead,
  td: TableCell,
  hr: HorizontalRule,
  
}

export function useMDXComponents(): MDXComponents {
  return components
}

// Export components directly for server components
// export { components }