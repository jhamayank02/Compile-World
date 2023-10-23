import React from 'react'
import Editor from '@monaco-editor/react';

function CodeBlock(props) {

    const {code, codeChangeHandler, language, theme} = props;

  return (
    <Editor height="79vh" language={language} defaultValue={code} onChange={(value) => codeChangeHandler(value)} theme={theme} value={code} />
  )
}

export default CodeBlock