import type { AnchorHTMLAttributes, FC } from 'react'

const defaultArgs = {
  $baseUrl: (href: string | undefined) => href + '',
}

/**
 * 客製化 Link 元件
 *
 * @example
 * ```tsx
 * export const FooLink: FC<Props_Link> = $Link({ $baseUrl: (href) => '/foo' + href });
 * export const BarLink: FC<Props_Link> = $Link({ $baseUrl: (href) => '/bar' + href });
 * ```
 *
 * @param optArgs
 * @returns
 */
export const $Link = (optArgs: Partial<Args>): FC<Props_Link> => {
  const args = { ...defaultArgs, ...optArgs }
  const NewLink: FC<Props_Link> = ({ href, children, ...restProps }) => {
    return (
      <a href={args.$baseUrl(href)} {...restProps}>
        {children}
      </a>
    )
  }
  return NewLink
}

export const Link = $Link(defaultArgs)

type Args = typeof defaultArgs
type Props_Link = AnchorHTMLAttributes<HTMLAnchorElement>
