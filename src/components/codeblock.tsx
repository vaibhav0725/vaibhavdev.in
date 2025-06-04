import { CopyBlock, tomorrowNight } from 'react-code-blocks';

export function CodeBlock({ code, language }:
    {
        code:string,
        language:string,
    }) {
  return <div 
  className='text-lg'
  style={{ fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace" }}> 
    <CopyBlock
      text={code}
      language={language}
      showLineNumbers={false}
      theme={tomorrowNight}
      wrapLongLines={false}
      codeBlock
    />
  </div>
}