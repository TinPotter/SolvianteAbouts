import React, { useState } from 'react';

const App: React.FC = () => {
  const [message, setMessage] = useState<string>('');

  const handleClick = () => {
    setMessage('You clicked the button!');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Welcome to My Beautiful TypeScript Website</h1>
      </header>
      <main>
        <section className="section">
          <p>This is a sample website built with React and TypeScript.</p>
          <button onClick={handleClick}>Click Me!</button>
          {message && <p>{message}</p>}
        </section>
      </main>
      <footer className="app-footer">
        <p>Hosted on GitHub Pages</p>
      </footer>
    </div>
  );
};

export default App;
