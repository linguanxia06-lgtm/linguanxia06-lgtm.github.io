"use client";

import { useState } from "react";

export default function Avatar() {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-8" />
    );
  }

  return (
    <div className="w-32 h-32 rounded-full bg-slate-200 mx-auto mb-8 overflow-hidden">
      <img 
        src="/images/avatar.jpg" 
        alt="头像" 
        className="w-full h-full object-cover"
        onError={() => setError(true)}
      />
    </div>
  );
}
