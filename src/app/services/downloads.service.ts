import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DownloadsService {
    googleApi: string = 'https://storage.googleapis.com'
    bucketName: string = 'coherent-lock-275712.appspot.com';

    constructor(private http: HttpClient) { }

    async downloadFile(filepath: string, filename: string, type: string, extension: string): Promise<void> {
        const url = this.getFileUrl(`${filepath}/${filename}`);
        this.http.get(url, { responseType: 'blob' }).subscribe((data: any) => {
            const blob = new Blob([data], { type });
            const a = document.createElement('a')
            const objectUrl = URL.createObjectURL(blob);
            a.href = objectUrl;
            a.download = `Yam Bakshi - ${filename}.${extension}`;
            a.click();
            URL.revokeObjectURL(objectUrl);
        })
    }

    getFileUrl(filename: string): string {
        return `${this.googleApi}/${this.bucketName}/${filename}`;
    }
}