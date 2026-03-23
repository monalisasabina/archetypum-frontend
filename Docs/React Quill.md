# REACT QUILL

Is a popular, open source React Componen that wraps the vanilla Quill rich text eidtor library

## Installation 

```bash
npm install react-quill
```

## Basic implementation

```javascript
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the theme stylesheet

function MyEditor() {
  const [value, setValue] = useState('');

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
```