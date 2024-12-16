'use client';

import { useState } from 'react';
import QueueMonitor from '@/components/QueueMonitor';

export default function QueuePage() {
    const [queueUrl, setQueueUrl] = useState('');
    const [isMonitoring, setIsMonitoring] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsMonitoring(true);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8">EECS Office Hours Queue Monitor</h1>
            
            <form onSubmit={handleSubmit} className="mb-8">
                <div className="flex gap-4">
                    <input
                        type="text"
                        value={queueUrl}
                        onChange={(e) => setQueueUrl(e.target.value)}
                        placeholder="Enter queue URL..."
                        className="flex-1 p-2 border rounded"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        disabled={isMonitoring}
                    >
                        {isMonitoring ? 'Monitoring...' : 'Start Monitoring'}
                    </button>
                </div>
            </form>

            {isMonitoring && <QueueMonitor queueUrl={queueUrl} />}
        </div>
    );
} 