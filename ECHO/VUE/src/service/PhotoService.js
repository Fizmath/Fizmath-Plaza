export const PhotoService = {
    getData() {
        return [
            {
                itemImageSrc: 'images/grpc-gateway.png',
                thumbnailImageSrc: 'images/grpc-gateway.png',
                alt: 'Description for Image 1',
                title: 'Title 1'
            },
            {
                itemImageSrc: 'images/a12.png',
                thumbnailImageSrc: 'images/a12.png',
                alt: 'Description for Image 2',
                title: 'Title 2'
            },
            {
                itemImageSrc: 'images/hexagonal.png',
                thumbnailImageSrc: 'images/hexagonal.png',
                alt: 'Description for Image 3',
                title: 'Title 3'
            },
           
        ];
    },

    getImages() {
        return Promise.resolve(this.getData());
    }
};
