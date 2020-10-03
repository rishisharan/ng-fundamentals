import { Component } from '@angular/core'
@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent{
    event1 = {
        id: 1,
        name: 'Angular connect',
        date: '09/21/2020',
        time: '12:11AM',
        price: '10.00',
        imageUrl: '/assets/images/angular-connect-shield.png',
        location: {
            address: '1023 DT',
            city: 'London',
            country: 'England'
        }
    }

    handleEventClicked(data){
        console.log('received', data);
    }
}