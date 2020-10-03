import { Component, EventEmitter, Input, Output } from '@angular/core'
@Component({
    selector:'event-thumbnail',
    template:
    `    
    <div class="well hoverwell thumbnail">
    <h1>{{event.name}}</h1>
    <div>Date: {{event.date}}</div>
    <div>Time: {{event.time}}</div>
    <div>Price: \${{event.price}}</div>
        <div>
            <span>Location: {{event.location.address}}</span>
            <span>&nbsp;</span>
            <span>{{event.location.city}}, {{event.location.country}}</span>
            <button class="btn btn-primary" (click)="handleClickMe()">Click me! </button>

        </div>
    </div>
    `
})
export class EventsThumbnailComponent{
    @Input() event: any
    @Output() eventClick = new EventEmitter();
    handleClickMe(){
        this.eventClick.emit('foo');
    }
}