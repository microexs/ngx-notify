export interface Icons {
    alert: string;
    error: string;
    info: string;
    success: string;
}

export const defaultIcons: Icons = {
    alert: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
        </svg>`,

    error: `
    <svg viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M512 937.19552c-234.83392 0-425.19552-190.36672-425.19552-425.19552 0-234.8288 190.36672-425.19552 425.19552-425.19552 234.8288 0 425.20064 190.36672 425.20064 425.19552S746.8288 937.19552 512 937.19552z m0-797.24544c-205.47072 0-372.04992 166.57408-372.04992 372.04992 0 205.47072 166.5792 372.0448 372.04992 372.0448s372.0448-166.57408 372.0448-372.0448S717.47072 139.95008 512 139.95008z m37.7344 372.18816l112.59392 112.61952c10.37824 10.36288 10.37824 27.19744 0 37.57568s-27.20768 10.37824-37.57568 0l-112.61952-112.59392-113.3568 113.3568a26.75712 26.75712 0 0 1-37.87264 0 26.76224 26.76224 0 0 1 0-37.86752L474.2656 511.8464 361.66656 399.24736a26.5728 26.5728 0 1 1 37.5808-37.5808L511.8464 474.2656l114.20672-114.20672a26.78784 26.78784 0 0 1 37.87264 37.888l-114.19136 114.19136z"></path></svg>
    `,
    info: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
        </svg>
    `,
    success: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
        </svg>
    `
};
