import {
  Component,
  ErrorInfo,
  PropsWithChildren,
  ReactNode,
} from 'react';

interface Props extends PropsWithChildren {
  fallback: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    console.log(error);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;
    if (hasError) {
      return fallback;
    }

    return children;
  }
}

export default ErrorBoundary;
