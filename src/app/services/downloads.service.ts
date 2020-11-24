import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DownloadsService {
    googleApi: string = 'https://storage.googleapis.com'
    bucketName: string = 'coherent-lock-275712.appspot.com';
    extensions: { [key: string]: string } = {
        'mp3': 'audio/mpeg',
        'rar': 'application/vnd.rar',
        'pdf': 'application/pdf',
        'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    }

    options: any = {
        headers: {
            'Access-Control-Allow-Origin': 'https://www.yambakshimusic.com'
        },
        responseType: 'blob'
    }

    constructor(private http: HttpClient) { }

    async downloadFile(objectPath: string, objectName: string, extension: string): Promise<void> {
        const url = this.getFileUrl(`${objectPath}${encodeURIComponent(objectName)}`);
        this.http.get(url, this.options).subscribe((data: any) => {
            const blob = new Blob([data], { type: this.extensions[extension] });
            const a = document.createElement('a')
            const objectUrl = URL.createObjectURL(blob);
            a.href = objectUrl;
            a.download = `Yam Bakshi - ${objectName}.${extension}`;
            a.click();
            URL.revokeObjectURL(objectUrl);
        })
    }

    getFileUrl(objectName: string): string {
        return `${this.googleApi}/${this.bucketName}/${objectName}`;
    }
}