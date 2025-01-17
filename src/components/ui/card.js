// src/components/ui/card.js
export function Card({ className, children }) {
  return <div className={`bg-white rounded-lg shadow ${className}`}>{children}</div>;
}

export function CardHeader({ className, children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}

export function CardTitle({ className, children }) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}

export function CardContent({ className, children }) {
  return <div className={`p-6 pt-0 ${className}`}>{children}</div>;
}

// src/components/ui/button.js
export function Button({ className, children, ...props }) {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}