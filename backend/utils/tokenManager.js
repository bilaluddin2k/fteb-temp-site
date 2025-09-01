const axios = require('axios');

class TokenManager {
    constructor() {
        this.accessToken = process.env.OFFICE365_ACCESS_TOKEN;
        this.refreshToken = process.env.OFFICE365_REFRESH_TOKEN;
        this.clientId = process.env.OFFICE365_CLIENT_ID;
        this.clientSecret = process.env.OFFICE365_SECRET;
        this.tenantId = process.env.OFFICE365_TENANT_ID;
        this.tokenExpirationTime = null;
    }

    async refreshAccessToken() {
        try {
            const tokenEndpoint = "https://login.microsoftonline.com/a0693751-615a-4611-90bd-13b76c2b33e3/oauth2/v2.0/token";            
            const params = new URLSearchParams();
            params.append('client_id', this.clientId);
            params.append('client_secret', this.clientSecret);
            params.append('refresh_token', this.refreshToken);
            params.append('grant_type', 'refresh_token');
            params.append('scope', 'https://graph.microsoft.com/.default');

            const response = await axios.post(tokenEndpoint, params);

            this.accessToken = response.data.access_token;
            this.refreshToken = response.data.refresh_token || this.refreshToken;
            
            // Set token expiration time (subtract 5 minutes for safety margin)
            this.tokenExpirationTime = Date.now() + (response.data.expires_in * 1000) - (5 * 60 * 1000);

            // Update environment variables
            process.env.OFFICE365_ACCESS_TOKEN = this.accessToken;
            process.env.OFFICE365_REFRESH_TOKEN = this.refreshToken;

            console.log('Token refreshed successfully');
            return this.accessToken;
        } catch (error) {
            console.error('Error refreshing token:', error.response?.data || error.message);
            throw new Error('Failed to refresh access token');
        }
    }

    async getValidToken() {
        // Check if token is expired or about to expire
        if (!this.tokenExpirationTime || Date.now() >= this.tokenExpirationTime) {
            await this.refreshAccessToken();
        }
        return this.accessToken;
    }

    // Initialize token expiration check
    async initialize() {
        try {
            // Verify current token and set initial expiration
            const tokenParts = this.accessToken.split('.');
            if (tokenParts.length === 3) {
                const payload = JSON.parse(Buffer.from(tokenParts[1], 'base64').toString());
                if (payload.exp) {
                    this.tokenExpirationTime = (payload.exp * 1000) - (5 * 60 * 1000); // 5 minutes safety margin
                }
            }
            
            // If token is already expired or close to expiration, refresh it immediately
            if (!this.tokenExpirationTime || Date.now() >= this.tokenExpirationTime) {
                await this.refreshAccessToken();
            }
        } catch (error) {
            console.error('Error initializing token manager:', error);
            // Try to refresh token if initialization fails
            await this.refreshAccessToken();
        }
    }
}

module.exports = new TokenManager();
 