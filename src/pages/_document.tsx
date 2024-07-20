import React from 'react';
import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from 'next/document';
import { NextComponentType } from 'next';
import { AppInitialProps } from 'next/app';
import { EmotionCache } from '@emotion/cache';
import { createEmotionCache } from '@/utils';
import createEmotionServer from '@emotion/server/create-instance';
import { AppContextType, AppPropsType } from 'next/dist/shared/lib/utils';
import theme from '@/config/theme';

interface DocumentProps extends DocumentInitialProps {
  emotionStyleTags: JSX.Element[];
}

class MyDocument extends Document<DocumentProps> {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />

          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.background.paper} />
          <meta name="theme-color" content="#fbfbfb" />
          <meta name="msapplication-navbutton-color" content="#fbfbfb" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#fbfbfb" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400;0,500;0,700;1,500;1,700&display=swap"
            rel="stylesheet"
          />
          {/* Inject MUI styles first to match with the prepend: true configuration. */}
          {this.props.emotionStyleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx: DocumentContext): Promise<DocumentInitialProps & DocumentProps> => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      enhanceApp: (
        App: NextComponentType<AppContextType, AppInitialProps, AppPropsType & { emotionCache: EmotionCache }>
      ) =>
        function EnhanceApp(props) {
          // console.log('props ->', props)
          return <App emotionCache={cache} {...props} />
        },
    })

  const initialProps = await Document.getInitialProps(ctx)
  // This is important. It prevents emotion to render invalid HTML.
  // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html)
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ))

  return {
    ...initialProps,
    emotionStyleTags,
  }
}

export default MyDocument
