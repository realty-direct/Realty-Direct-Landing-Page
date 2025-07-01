export const CriticalStyles = () => {
  // Critical CSS for above-the-fold content
  const criticalCSS = `
    /* Reset and base styles */
    *, *::before, *::after {
      box-sizing: border-box;
    }
    
    html {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      line-height: 1.5;
    }
    
    body {
      margin: 0;
      min-height: 100vh;
      background-color: #ffffff;
    }
    
    /* Critical layout utilities */
    .container {
      width: 100%;
      margin-right: auto;
      margin-left: auto;
      padding-right: 1rem;
      padding-left: 1rem;
    }
    
    @media (min-width: 640px) {
      .container {
        max-width: 640px;
      }
    }
    
    @media (min-width: 768px) {
      .container {
        max-width: 768px;
      }
    }
    
    @media (min-width: 1024px) {
      .container {
        max-width: 1024px;
      }
    }
    
    @media (min-width: 1280px) {
      .container {
        max-width: 1280px;
      }
    }
    
    /* Critical typography */
    h1, h2, h3, h4, h5, h6 {
      margin: 0;
      font-weight: 600;
    }
    
    p {
      margin: 0;
    }
    
    /* Critical flexbox utilities */
    .flex {
      display: flex;
    }
    
    .flex-col {
      flex-direction: column;
    }
    
    .items-center {
      align-items: center;
    }
    
    .justify-center {
      justify-content: center;
    }
    
    .justify-between {
      justify-content: space-between;
    }
    
    /* Critical spacing */
    .p-4 {
      padding: 1rem;
    }
    
    .py-4 {
      padding-top: 1rem;
      padding-bottom: 1rem;
    }
    
    .px-4 {
      padding-left: 1rem;
      padding-right: 1rem;
    }
    
    /* Critical positioning */
    .relative {
      position: relative;
    }
    
    .absolute {
      position: absolute;
    }
    
    .fixed {
      position: fixed;
    }
    
    /* Critical display */
    .hidden {
      display: none;
    }
    
    .block {
      display: block;
    }
    
    /* Critical colors */
    .bg-white {
      background-color: #ffffff;
    }
    
    .text-white {
      color: #ffffff;
    }
    
    /* Critical text utilities */
    .text-center {
      text-align: center;
    }
    
    .font-bold {
      font-weight: 700;
    }
    
    /* Critical responsive utilities */
    @media (min-width: 768px) {
      .md\\:flex {
        display: flex;
      }
      
      .md\\:hidden {
        display: none;
      }
    }
    
    /* Prevent layout shift */
    img, video {
      max-width: 100%;
      height: auto;
    }
    
    /* Critical button styles */
    button {
      cursor: pointer;
      border: none;
      background: none;
      font: inherit;
    }
    
    /* Critical link styles */
    a {
      color: inherit;
      text-decoration: none;
    }
  `;

  return (
    <style
      dangerouslySetInnerHTML={{ __html: criticalCSS }}
    />
  );
};