import { useParams } from 'common'
import type {
  ProductMenuGroup,
  ProductMenuGroupItem,
} from 'components/ui/ProductMenu/ProductMenu.types'
import { IS_PLATFORM } from 'lib/constants'

export const generateAuthMenu = (ref: string | undefined): ProductMenuGroup[] => {
  if (!ref) return []
  return [
    {
      title: 'Users',
      name: 'Users',
      key: 'users',
      link: `/project/${ref}/auth/users`,
      items: [{ name: 'Users', key: 'users', url: `/project/${ref}/auth/users`, items: [] }],
    },
    {
      title: 'Configuration',
      name: 'Configuration',
      key: 'configuration',
      link: `/project/${ref}/auth/configuration`,
      items: [
        // {
        //   name: 'Policies',
        //   key: 'policies',
        //   url: `/project/${ref}/auth/policies`,
        //   items: [],
        // },
        ...(IS_PLATFORM
          ? [
              {
                name: 'Sign In / Up',
                key: 'sign-in-up',
                pages: ['providers', 'third-party'],
                url: `/project/${ref}/auth/providers`,
                items: [],
              },
              {
                name: 'Sessions',
                key: 'sessions',
                url: `/project/${ref}/auth/sessions`,
                items: [],
              },
              {
                name: 'Rate Limits',
                key: 'rate-limits',
                url: `/project/${ref}/auth/rate-limits`,
                items: [],
              },
              {
                name: 'Emails',
                key: 'emails',
                pages: ['templates', 'smtp'],
                url: `/project/${ref}/auth/templates`,
                items: [],
              },
              {
                name: 'Multi-Factor',
                key: 'mfa',
                url: `/project/${ref}/auth/mfa`,
                items: [],
              },
              {
                name: 'URL Configuration',
                key: 'url-configuration',
                url: `/project/${ref}/auth/url-configuration`,
                items: [],
              },
              {
                name: 'Attack Protection',
                key: 'protection',
                url: `/project/${ref}/auth/protection`,
                items: [],
              },
              {
                name: 'Auth Hooks',
                key: 'hooks',
                url: `/project/${ref}/auth/hooks`,
                items: [],
                label: 'BETA',
              },
              {
                name: 'Advanced',
                key: 'advanced',
                url: `/project/${ref}/auth/advanced`,
                items: [],
              },
            ]
          : []),
      ],
    },
  ]
}

export const generateAuthPageMenu = (ref: string): ProductMenuGroupItem[] => {
  return [
    {
      name: 'Users',
      key: 'users',
      url: `/project/${ref}/auth/users`,
    },
    {
      name: 'Sign-in method',
      key: 'Sign-in method',
      url: `/project/${ref}/auth/providers`,
    },
    {
      name: 'Session',
      key: 'session',
      url: `/project/${ref}/auth/session`,
    },
    {
      name: 'MFA',
      key: 'mfa',
      url: `/project/${ref}/auth/mfa`,
    },
    {
      name: 'Third party',
      key: 'third-party',
      url: `/project/${ref}/auth/third-party`,
    },
    {
      name: 'Rate Limits',
      key: 'rate-limits',
      url: `/project/${ref}/auth/rate-limits`,
    },
    {
      name: 'Emails',
      key: 'templates',
      url: `/project/${ref}/auth/templates`,
    },
    // {
    //   name: 'Email Templates',
    //   key: 'templates',
    //   url: `/project/${ref}/auth/templates`,
    // },
    // {
    //   name: 'URL Configuration',
    //   key: 'url-configuration',
    //   url: `/project/${ref}/auth/url-configuration`,
    // },
    {
      name: 'Hooks',
      key: 'hooks',
      url: `/project/${ref}/auth/hooks`,

      label: 'BETA',
    },
    {
      name: 'Configuration',
      key: 'configuration',
      url: `/project/${ref}/auth/configuration`,
      label: 'BETA',
    },
  ]
}
