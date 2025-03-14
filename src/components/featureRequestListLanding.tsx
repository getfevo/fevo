"use client"
import { useState, useEffect } from 'react';

export default function FeatureRequestListLanding() {
  // Initialize state with null to prevent rendering on server
  const [votes, setVotes] = useState<number[]|null>(null);

  // Generate random votes on client-side only
  useEffect(() => {
    const generatedVotes = [...Array(10)].map((_, i) => 
      // Use a deterministic algorithm based on index instead of random
      10 + (i * 5) % 40
    );
    setVotes(generatedVotes);
  }, []);

  return (
    <div className="pt-20 px-4">
      {/* Add a fixed height and enable vertical scrolling */}
      <div className="space-y-4 overflow-y-auto max-h-[400px] no-scrollbar pb-24 pt-4 ">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="rounded-lg border border-gray-200 p-4 bg-white shadow-sm">
            <div className="flex justify-between">
              <h3 className="font-medium">Feature Request #{i + 1}</h3>
              <span
  className={`text-sm px-2 py-0.5 rounded-full ${
    i % 2 === 0 ? "bg-yellow-100 text-yellow-800": "bg-green-100 text-green-800" 
  }`}
>
  {i % 2 === 0 ? "Planned" : "In Progress"}
</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">
              {i % 2 === 0
                ? "A planned feature request waiting for development."
                : "Currently being worked on by our team."}
            </p>
            <div className="flex items-center mt-2 text-sm text-gray-500">
              <span className="flex items-center">
                <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                {votes ? `${votes[i]} votes` : '...'} 
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}