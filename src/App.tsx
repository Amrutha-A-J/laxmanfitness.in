import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-center">Body</h1>
          <p className="mt-4 text-center text-gray-600">
            Body content
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
