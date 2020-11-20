import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DownloadsService {
    bucketName: string = 'coherent-lock-275712.appspot.com';

    constructor(private http: HttpClient) { }

    async downloadFile(filename: string): Promise<void> {
        const url = `https://storage.googleapis.com/${this.bucketName}/${filename}`;
        this.http.get(url, { responseType: 'blob' }).subscribe((data: any) => {
            const blob = new Blob([data], { type: 'audio/mpeg' });
            const a = document.createElement('a')
            const objectUrl = URL.createObjectURL(blob);
            a.href = objectUrl;
            a.download = `Yam Bakshi - ${filename}`;
            a.click();
            URL.revokeObjectURL(objectUrl);
        })
    }
}