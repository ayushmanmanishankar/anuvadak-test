import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DummyContent from './components/DummyContent';
import Contact from './components/Contact';
import About from './components/About';
import IndiaPortal from './components/IndiaPortal';

function Home() {
  return (
    <>
      <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

          <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mb-2 tracking-[-.01em]">
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
                src/app/page.js
              </code>
              .
            </li>
            <li className="tracking-[-.01em]" avk-only-nmt="true">
              Save and see your changes instantly.
            </li>
            <li className="mt-2 tracking-[-.01em]" avk-only-nmt="true">
              Explore the Next.js 14 documentation to learn more about the new
              features.
            </li>
            <li className="mt-2 tracking-[-.01em]" avk-only-nmt="true">
              App will automatically reload as you edit the code.
            </li>
          </ol>

          <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left" avk-only-nmt="true">
            <li className="mb-2 tracking-[-.01em]">
              Content 1
            </li>
            <li className="tracking-[-.01em]">
              Content 2
            </li>
          </ol>

          <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
            <li className="mt-2 tracking-[-.01em]">
              App will automatically reload as you edit the code.
            </li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >

              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >

            Learn
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >

            Examples
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="/page2"
            target="_blank"
            rel="noopener noreferrer"
          >

            Go to nextjs.org →
          </a>
          <p avk-only-nmt="true">
            Multi Page Content 1
          </p>
          <p avk-only-nmt="true">
            Multi Page Content 2
          </p>
          <p>
            Multi Page Content 2
          </p>
          <p><span>Hello</span></p>
          <p><a>Hello</a></p>
        </footer>
      </div>
    </>
  )
}



function About2() {
  return (
    <>
      <p avk-only-nmt="true">Newly Added test content 2</p>
    </>
  );
}

function Contact2() {
  return (
    <>
      <h2 avk-only-nmt="false" aria-label="Adding for sanity">Newly Added 6</h2 >
      <h2>Something beautiful</h2 >
      <p avk-only-nmt="false">Contact Page 2 - Reach us at contact @example.com.</p>

    </>
  )
}

function Contact3() {
  return (
<></>
  )
}

function Contact4() {
  return (
 <>
      {/* Pair 1: Equivalent. Styles are different but structure/content is identical. */}
      <p
        className="status"
        style={{
          backgroundColor: '#e6ffe6',
          color: '#006400',
          padding: '10px 15px',
          border: '1px solid #006400',
          borderRadius: '4px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif'
        }}
      >
        Active
      </p>
      <span
        className="status"
        style={{
          background: 'linear-gradient(to right, #f0fff0, #e0f8e0)',
          color: '#006400',
          padding: '10px 15px',
          border: '1px solid #006400',
          borderRadius: '4px',
          fontWeight: 'bold',
          fontFamily: 'Arial, sans-serif',
          display: 'inline-block',
          margin: '5px'
        }}
      >
        Active
      </span>

      {/* Pair 2: Equivalent. Different tags and styles, same structure/content. */}
      <div style={{ padding: '20px', backgroundColor: '#f4f4f4', border: '2px dashed #ccc' }}>
        <p style={{ margin: 0, padding: 0, fontSize: '1.1rem', color: '#333' }}>
          Name <b style={{ color: '#0056b3', fontWeight: '900', textTransform: 'uppercase' }}>John</b>
        </p>
      </div>
      <section style={{ padding: '20px', backgroundColor: '#fff', border: '2px solid #aaa', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <p style={{ margin: 0, padding: 0, fontSize: '1.1rem', color: '#333' }}>
          Name <em style={{ color: '#0056b3', fontStyle: 'normal', fontWeight: '900', textTransform: 'uppercase' }}>John</em>
        </p>
      </section>

      {/* Pair 3: Equivalent. Different list tags, complex item styles. */}
      <ul style={{ margin: '15px', padding: '10px', backgroundColor: '#fff8e1', borderLeft: '3px solid #ffc107' }}>
        <li style={{ color: '#856404', padding: '5px', fontWeight: 'bold' }}>Item A</li>
        <li style={{ color: '#856404', padding: '5px', fontWeight: 'bold' }}>Item B</li>
      </ul>
      <ol style={{ margin: '15px', padding: '10px', backgroundColor: '#e6f7ff', borderLeft: '3px solid #007bff' }}>
        <li style={{ color: '#0056b3', padding: '5px', fontWeight: 'bold' }}>Item A</li>
        <li style={{ color: '#0056b3', padding: '5px', fontWeight: 'bold' }}>Item B</li>
      </ol>

      {/* Pair 4: NON-Equivalent. Different node order. */}
      <div style={{ backgroundColor: '#f8f9fa', padding: '10px', fontFamily: 'Verdana', fontSize: '16px' }}>
        Hello <span style={{ color: 'red', fontWeight: 'bold', margin: '0 5px' }}>World</span>
      </div>
      <div style={{ backgroundColor: '#f8f9fa', padding: '10px', fontFamily: 'Verdana', fontSize: '16px' }}>
        <span style={{ color: 'red', fontWeight: 'bold', margin: '0 5px' }}>Hello</span> World
      </div>
      <div>
         <span style={{ color: 'red', fontWeight: 'bold', margin: '0 5px' }}>Hello</span><span style={{ color: 'red', fontWeight: 'bold', margin: '0 5px' }}>World</span>
      </div>

      {/* Pair 5: NON-Equivalent. Different nesting depth. */}
      <div style={{ border: '5px solid purple', padding: '25px', margin: '10px', backgroundColor: '#f3e5f5' }}>
        <p style={{ margin: 0, padding: '10px', backgroundColor: '#e1bee7', color: '#4a148c', fontWeight: '600' }}>
          Deep Content
        </p>
      </div>
      <p
        style={{
          margin: '10px',
          padding: '35px',
          backgroundColor: '#e1bee7',
          color: '#4a148c',
          fontWeight: '600',
          border: '5px solid purple'
        }}
        title='hello wrld'
      >
        Deep Content
      </p>
      <h1>Hello Ayushman</h1>
    </>
  )
}

function Contact5() {
  return (
    <>
      <h2>Newly Added 6</h2 >

    </>
  )
}

function DummyContent2() {
  return (
    <>
      <h2>This is a dummy content.</h2 >
      <p>Contact Page 3 - Reach us at contact @example.com.</p>
      <p>This is a new content for Dummy Page.</p>
    </>
  )
}

function DummyContent3() {
  return (
    <>
      <h2>This is a dummy content 3. The new page.</h2 >
      <p>Contact Page 3 - Reach us at contact @example.com.</p>
      <p>This is a new content for Dummy Page.</p>
    </>
  )
}

function NotFound() {
  return <h2>404 - Page Not Found</h2>;
}

function App() {
  return (
    <Router>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ margin: 5 }}>Home</Link>
        <Link to="/contact" style={{ margin: 5 }}>Contact</Link>
        {/* <Link to="/contact5" style={{ margin: 5 }}>Home</Link> */}
        {/* <Link to="/test1" style={{ margin:5 }}>About</Link>
        <Link to="/contact" style={{ margin:5 }}>Contact</Link> */}


      </nav>
      <Routes>
        <Route path="/" element={<Contact4 />} />
        <Route path="/contact" element={<Contact3 />} />
        <Route path="/contact2" element={<Contact2 />} />
        {/* <Route path="/contact5" element={<Contact5 />} /> */}
      </Routes>
    </Router>
  );
}

export default App;