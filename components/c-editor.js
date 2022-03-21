import React, {useRef, useEffect} from 'react';

import {EditorState} from '@codemirror/state';
import {EditorView, keymap} from '@codemirror/view';
import {defaultKeymap} from '@codemirror/commands';

// https://dev.to/adamcollier/adding-codemirror-6-to-a-react-project-36hl
export const CEditor = () => {
  const editor = useRef();

  useEffect(() => {
    const startState = EditorState.create({
      doc: 'Hello World for peter ', extensions: [keymap.of(defaultKeymap)],
    });

    const view = new EditorView({state: startState, parent: editor.current});
    return () => {
      view.destroy();
    };
  }, []);

  return <div ref={editor}></div>;
};
