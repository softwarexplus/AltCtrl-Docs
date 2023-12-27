import React from "react"
import { DocsThemeConfig, useConfig } from "nextra-theme-docs"
import { useRouter } from "next/router"

const config: DocsThemeConfig = {
    logo: <span>Alt Ctrl Docs</span>,
    project: {
        link: "https://github.com/softwarexplus/AltCtrl-Docs"
    },
    chat: {
        link: "https://discord.gg/7WtsbUsypB"
    },
    docsRepositoryBase: "https://github.com/softwarexplus/AltCtrl-Docs/tree/main",
    footer: {
        text: (
            <span>
                MIT {new Date().getFullYear()} ©{" "}
                <a href="https://github.com/softwareXPlus/AltCtrl-Docs" target="_blank">
                    Alt Ctrl
                </a>
                .
            </span>
        )
    },
    useNextSeoProps() {
        const { asPath } = useRouter()
        if (asPath !== "/") {
            return {
                titleTemplate: "%s – Alt Ctrl"
            }
        }
    },
    head: () => {
        const { frontMatter, title } = useConfig()
        const { asPath } = useRouter()

        let ogTitle = `${title} – Alt Ctrl`

        if (asPath === "/") {
            ogTitle = title
        }

        const ogDescription = frontMatter.description || ""

        return (
            <>
                <meta content={ogTitle} property="og:title" />
                <meta content={ogDescription} property="og:description" />
                <meta content={asPath} property="og:url" />
                <meta content="/favicon.png" property="og:image" />
                <meta content="#5865f2" data-react-helmet="true" name="theme-color" />
            </>
        )
    },
    gitTimestamp({ timestamp }) {
        const { locale, asPath } = useRouter()

        if (asPath !== "/") {
            return (
                <>
                    Last updated on:{" "}
                    <time dateTime={timestamp.toISOString()}>
                        {timestamp.toLocaleDateString(locale, {
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        })}
                    </time>
                </>
            )
        }
    }
}

export default config
