# React Library 🍋

## Components

React If Conditions:
```js
<If condition={true}>
  <Then>Awesome text</Then>
  <ElseIf>ElseIf awesome text</ElseIf>
  <Else>Else awesome text</Else>
</If>
```

Switch
```js
<Switch expression='red' >
  <Case value='red'>
    Red
  </Case>
  <Case value='green'>
    Green
  </Case>
  <Case value='gray'>
    Gray
  </Case>
  <Default>
    Default
  </Default>
</Switch>
```

Portal
```js
<Portal container={document.body}>
  {children}
</Portal>
```

## Utils

Plural (declension of words)
```js
Plural(5, ['лимон', 'лимона', 'лимонов']) // => 5 лимонов
```

DownloadBlob (downloading blob as file)
```js
DownloadBlob(Blob, filename)
```

## React Hooks

usePrev
```js
const prevValue = usePrev(value)
```

useDebounce
```js
const debouncedValue = useDebounce(value, delay = 600)
```
