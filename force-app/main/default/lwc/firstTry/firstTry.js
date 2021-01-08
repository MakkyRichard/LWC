import { LightningElement } from 'lwc';
import getMessage from '@salesforce/apex/QuickAction.getMessage';

export default class FirstTry extends LightningElement {

    connectedCallback() {
        getMessage()
            .then( result => {
                console.log(result);
        })
    }

    reloadWindow() {
        location.reload();
    }

}