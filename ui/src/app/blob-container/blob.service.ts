import { Injectable } from "@angular/core";
import { Blob } from './blob.model';

@Injectable()
export class BlobService {
    private blobs: Blob[];

    getBlobs() {
        return this.blobs.slice();
    }
}