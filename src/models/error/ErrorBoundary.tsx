import React, { Component, ReactNode } from "react";

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
    constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("ErrorBoundary atrapó un error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>Algo salió mal.</h1>;
        }
        return this.props.children;
    }
}

export default ErrorBoundary;