import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('BAT Zimbabwe error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-paper-50">
          <div className="text-center max-w-md">
            <p className="font-mono text-xs tracking-[0.2em] text-bat-600 uppercase">
              System notice
            </p>
            <h1 className="mt-3 font-display text-4xl text-corp-700">
              This page could not be rendered.
            </h1>
            <p className="mt-4 text-slate-500 text-sm">
              A client-side error has occurred. Refresh the page, or return to the homepage.
              If the issue persists please contact our Corporate Affairs team.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-3 bg-corp-600 text-white text-xs tracking-[0.12em] uppercase hover:bg-corp-700"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-6 py-3 border border-slate-700 text-slate-800 text-xs tracking-[0.12em] uppercase hover:bg-slate-800 hover:text-paper-50 transition-colors"
              >
                Homepage
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
