import React, { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

interface QueueStatus {
    position: string;
    waitingCount: string;
    timestamp: string;
    url: string;
}

interface QueueMonitorProps {
    queueUrl: string;
}

const QueueMonitor: React.FC<QueueMonitorProps> = ({ queueUrl }) => {
    const [status, setStatus] = useState<QueueStatus | null>(null);
    const [socket, setSocket] = useState<Socket | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const newSocket = io('http://localhost:5000');
        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log('Connected to server');
            newSocket.emit('startMonitoring', { queueUrl });
        });

        newSocket.on('queueUpdate', ({ status }) => {
            setStatus(status);
            setError(null);

            // Check if queue position is 0 or 1
            if (status.position === '0' || status.position === '1') {
                // Show notification
                if (Notification.permission === 'granted') {
                    new Notification('Queue Update!', {
                        body: 'It\'s almost your turn in the queue!',
                    });
                }
            }
        });

        newSocket.on('monitoringError', ({ error }) => {
            setError(error);
        });

        // Request notification permission
        if (Notification.permission === 'default') {
            Notification.requestPermission();
        }

        return () => {
            if (newSocket) {
                newSocket.emit('stopMonitoring', { queueUrl });
                newSocket.disconnect();
            }
        };
    }, [queueUrl]);

    if (error) {
        return (
            <div className="p-4 bg-red-100 text-red-700 rounded-lg">
                Error: {error}
            </div>
        );
    }

    return (
        <div className="p-4 bg-white shadow-lg rounded-lg">
            <h2 className="text-xl font-bold mb-4">Queue Status</h2>
            {status ? (
                <div className="space-y-2">
                    <p className="text-lg">
                        Position: <span className="font-semibold">{status.position}</span>
                    </p>
                    <p className="text-lg">
                        People Waiting: <span className="font-semibold">{status.waitingCount}</span>
                    </p>
                    <p className="text-sm text-gray-500">
                        Last Updated: {new Date(status.timestamp).toLocaleTimeString()}
                    </p>
                </div>
            ) : (
                <p>Loading queue status...</p>
            )}
        </div>
    );
};

export default QueueMonitor; 