import React from 'react';
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/monokai-sublime.css';
import style from './style.module.scss'

const MDDecode = (props) => {
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false, // 忽略html
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });
  
  let markdownHtml = marked(props.article ? props.article : '无内容摘要')
  return (
    <div className={style.mdDiv} dangerouslySetInnerHTML={{ __html: markdownHtml }}></div>
  );
}

export default MDDecode;
