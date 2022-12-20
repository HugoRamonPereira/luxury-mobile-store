import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText, reset } from './styles';
import { Context } from 'vm';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async function getInitialProps(ctx: Context) {
  // render page
  const results = await ctx.defaultGetInitialProps(ctx);
  // get the css for the current rendering cycle
  const stitchesCssString = getCssText();
  // reset the styles between renders
  reset();
  return {
    ...results,
    styles: (
      <>
        {results.styles}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: stitchesCssString }}
        />
      </>
    )
  };
};
