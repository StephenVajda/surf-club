const crypto = require('crypto');
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const storage = new CloudinaryStorage({
    cloudinary,
    params: {
        folder: 'surf-shop',
        format: async(req, file) => 'jpg', // supports promises as well
        public_id: function(req, file) {
            let buf = crypto.randomBytes(16);
            buf = buf.toString('hex');
            let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png/ig, '');
            uniqFileName += buf;
            return uniqFileName;
        }
    }
});

module.exports = {
    cloudinary,
    storage
}