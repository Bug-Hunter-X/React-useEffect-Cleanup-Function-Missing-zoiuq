```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic:  The return function is missing
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);
  }, []);

  return (
    <div>Count: {count}</div>
  );
}
```