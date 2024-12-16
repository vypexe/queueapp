const axios = require('axios');
const cheerio = require('cheerio');
const EventEmitter = require('events');

class QueueMonitor extends EventEmitter {
    constructor() {
        super();
        this.currentStatus = null;
        this.isMonitoring = false;
        this.monitoringInterval = null;
    }

    async fetchQueueStatus(queueUrl) {
        try {
            const response = await axios.get(queueUrl);
            const $ = cheerio.load(response.data);
            
            // Extract queue information
            const queuePosition = $('.queue-position').text();
            const waitingCount = $('.waiting-count').text();
            const status = {
                position: queuePosition,
                waitingCount: waitingCount,
                timestamp: new Date(),
                url: queueUrl
            };

            if (JSON.stringify(this.currentStatus) !== JSON.stringify(status)) {
                this.currentStatus = status;
                this.emit('statusChange', status);
            }

            return status;
        } catch (error) {
            console.error('Error fetching queue status:', error);
            throw error;
        }
    }

    startMonitoring(queueUrl, interval = 30000) {
        if (this.isMonitoring) return;
        
        this.isMonitoring = true;
        this.monitoringInterval = setInterval(async () => {
            try {
                await this.fetchQueueStatus(queueUrl);
            } catch (error) {
                this.emit('error', error);
            }
        }, interval);

        // Initial fetch
        this.fetchQueueStatus(queueUrl).catch(error => this.emit('error', error));
    }

    stopMonitoring() {
        if (this.monitoringInterval) {
            clearInterval(this.monitoringInterval);
            this.monitoringInterval = null;
        }
        this.isMonitoring = false;
    }
}

module.exports = QueueMonitor; 