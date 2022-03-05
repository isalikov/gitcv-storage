# do-spaces

Express/S3 file uploader.

Supports Digital Ocean Spaces and AWS/S3 both.

### Requirements
- `node.js ^16`
- `yarn ^1.22`

### Installation
- `yarn install`

### Usage
- `yarn start` will start service at `env.PORT [3001]`

### Endpoints
- `[POST: ]/upload` requires `form/data:data` field with file to be uploaded

### Configuration
- `.env.example` contains available configuration options

### Uploading progress
```javascript
axios.post(url, formData, {
    headers: { 
        'Content-Type': 'multipart/form-data',
    }, 
    onUploadProgress: (progressEvent) => console.log((progressEvent.loaded / progressEvent.total) * 50),
});
```

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg)](https://www.digitalocean.com/?refcode=a227de30d029&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)
