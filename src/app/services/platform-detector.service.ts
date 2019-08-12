import { Injectable, PLATFORM_ID, Inject } from "@angular/core"
import { isPlatformBrowser } from '@angular/common';

@Injectable({ 
    providedIn: 'root'
})

export class PlatformDetectableService {
    constructor(@Inject(PLATFORM_ID) private platform: string) { }
    
    isPlatformBrowser() {
        return isPlatformBrowser(this.platform)
    }
}